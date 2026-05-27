import { useState, useRef, useEffect, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import Menu1 from "../../components/Menu1";
import NavbarLateral from "./components/NavbarLateral/NavbarLateral";
import BotoSugesto from "./components/BotoSugesto";
import RespostaIA from "./components/RespostaIA";
import styles from "./UsurioIA.module.css";

// Aponta para o worker via CDN — evita problemas de path no Vite/Webpack
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs";

const N8N_WEBHOOK_URL = "/webhook/juriki-chat";

const FORMATOS = [
  {
    id: "detalhado",
    label: "Detalhado",
    instrucao: "Responda de forma detalhada, com listas, tópicos em negrito e seção de dicas.",
  },
  {
    id: "resumido",
    label: "Resumido",
    instrucao: "Responda de forma resumida em 2-3 parágrafos curtos, sem listas extensas.",
  },
  {
    id: "simples",
    label: "Simples",
    instrucao: "Responda de forma muito simples, como se estivesse explicando para alguém sem conhecimento jurídico.",
  },
];

const horarioAtual = () =>
  new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

const UsurioIA = () => {
  const [sugestoes] = useState([
    { id: 1, icone: "/Group-78@2x.png",  texto: "Tenho dúvidas sobre meus direitos trabalhistas" },
    { id: 2, icone: "/Group-782@2x.png", texto: "Quero entender um contrato" },
    { id: 3, icone: "/Group-781@2x.png", texto: "Dúvidas sobre direito do consumidor" },
  ]);

  const [mensagem, setMensagem]             = useState("");
  const [historico, setHistorico]           = useState([]);
  const [carregando, setCarregando]         = useState(false);
  const [formatoAtivo, setFormatoAtivo]     = useState("detalhado");
  const [instrucaoLivre, setInstrucaoLivre] = useState("");

  // Estados para upload de PDF
  const [arquivoPdf, setArquivoPdf]   = useState(null); // { nome, texto }
  const [dragAtivo, setDragAtivo]     = useState(false);
  const [erroArquivo, setErroArquivo] = useState("");
  const [extraindo, setExtraindo]     = useState(false);

  const fimChatRef     = useRef(null);
  const inputArquivoRef = useRef(null);

  useEffect(() => {
    fimChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historico, carregando]);

  // ─── Extração de texto do PDF ───────────────────────────────────────────────
  const extrairTextoPDF = async (arquivo) => {
    setErroArquivo("");

    if (arquivo.type !== "application/pdf") {
      setErroArquivo("Apenas arquivos PDF são aceitos.");
      return;
    }

    if (arquivo.size > 10 * 1024 * 1024) {
      setErroArquivo("Arquivo muito grande. Limite: 10 MB.");
      return;
    }

    setExtraindo(true);

    try {
      const url = URL.createObjectURL(arquivo);
      const pdf = await pdfjsLib.getDocument(url).promise;
      let texto = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const pagina   = await pdf.getPage(i);
        const conteudo = await pagina.getTextContent();
        texto += conteudo.items.map((item) => item.str).join(" ") + "\n";
      }

      URL.revokeObjectURL(url); // libera memória

      if (!texto.trim()) {
        setErroArquivo(
          "Este PDF parece ser uma imagem escaneada e não possui texto extraível."
        );
        return;
      }

      setArquivoPdf({ nome: arquivo.name, texto });
    } catch {
      setErroArquivo("Não foi possível ler o PDF. Verifique se o arquivo não está corrompido.");
    } finally {
      setExtraindo(false);
    }
  };

  // ─── Handlers de drag-and-drop ──────────────────────────────────────────────
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragAtivo(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragAtivo(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragAtivo(false);
    const arquivo = e.dataTransfer.files[0];
    if (arquivo) extrairTextoPDF(arquivo);
  }, []);

  const handleInputArquivo = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) extrairTextoPDF(arquivo);
    e.target.value = ""; // permite reselecionar o mesmo arquivo
  };

  const removerArquivo = () => {
    setArquivoPdf(null);
    setErroArquivo("");
  };

  // ─── Sanitização de instrução livre ─────────────────────────────────────────
  const sanitizarInstrucao = (texto) =>
    texto
      .replace(/ignore (all |todas |as )?(previous |anteriores )?instructions?/gi, "")
      .replace(/system prompt/gi, "")
      .replace(/você (agora |now )?(é|is|deve ser)/gi, "")
      .trim();

  // ─── Envio ao n8n ────────────────────────────────────────────────────────────
  const enviarParaN8n = async (texto) => {
    const formato       = FORMATOS.find((f) => f.id === formatoAtivo);
    const instrucaoLimpa = sanitizarInstrucao(instrucaoLivre);
    const instrucaoFinal = instrucaoLimpa
      ? `${formato.instrucao} Além disso, siga esta instrução específica do usuário: "${instrucaoLimpa}"`
      : formato.instrucao;

    // Se houver PDF, concatena o texto extraído à mensagem
    const mensagemFinal = arquivoPdf
      ? `${texto}\n\n---\n📄 Conteúdo do arquivo "${arquivoPdf.nome}":\n${arquivoPdf.texto}`
      : texto;

    const resposta = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: mensagemFinal,
        instrucaoFormato: instrucaoFinal,
        history: historico.map((m) => ({
          role: m.tipo === "usuario" ? "user" : "assistant",
          content: m.conteudo,
        })),
      }),
    });

    if (!resposta.ok) throw new Error("Erro ao contatar o servidor.");

    const dados = await resposta.text();
    return dados ?? "Sem resposta.";
  };

  // ─── Envio da mensagem ───────────────────────────────────────────────────────
  const handleEnviar = async (textoOverride) => {
    const texto = (textoOverride ?? mensagem).trim();
    if (!texto || carregando) return;

    // Monta o conteúdo exibido na bolha do usuário
    const conteudoExibido = arquivoPdf
      ? `${texto}\n📄 ${arquivoPdf.nome}`
      : texto;

    setHistorico((prev) => [
      ...prev,
      { tipo: "usuario", conteudo: conteudoExibido, horario: horarioAtual() },
    ]);
    setMensagem("");
    setArquivoPdf(null); // limpa o PDF após enviar
    setCarregando(true);

    try {
      const respostaIA = await enviarParaN8n(texto);
      setHistorico((prev) => [
        ...prev,
        { tipo: "ia", conteudo: respostaIA, horario: horarioAtual() },
      ]);
    } catch (erro) {
      setHistorico((prev) => [
        ...prev,
        {
          tipo: "ia",
          conteudo:
            "⚠️ Não consegui processar sua dúvida no momento. Por favor, tente novamente em instantes.",
          horario: horarioAtual(),
        },
      ]);
    } finally {
      setCarregando(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleEnviar();
    }
  };

  const emConversa = historico.length > 0;

  return (
    <div className={styles.paginaLayout}>
      <Menu1 />

      <main className={styles.corpoPrincipal}>
        <aside className={styles.sidebarEsquerda}>
          <NavbarLateral />
        </aside>

        {/* A section inteira vira a zona de drag-and-drop */}
        <section
          className={`${styles.telaIa} ${dragAtivo ? styles.telaIaDragAtiva : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Input file oculto — acionado pelo botão do alfinete */}
          <input
            ref={inputArquivoRef}
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleInputArquivo}
          />

          {/* Overlay visual de drag ativo */}
          {dragAtivo && (
            <div className={styles.overlayDrag}>
              <div className={styles.overlayDragConteudo}>
                <span className={styles.overlayDragIcone}>📄</span>
                <span className={styles.overlayDragTexto}>Solte o PDF aqui</span>
              </div>
            </div>
          )}

          <div className={styles.containerCentro}>

            <header className={styles.cumprimentosIa}>
              <h1 className={styles.olAlice}>Olá, Alice!</h1>
              <h2 className={styles.comoPossoAjudar}>Como posso te ajudar hoje?</h2>
            </header>

            {emConversa && (
              <div className={styles.seletorFormato}>
                <span className={styles.rotuloFormato}>Formato da resposta:</span>
                {FORMATOS.map((f) => (
                  <button
                    key={f.id}
                    className={`${styles.botaoFormato} ${
                      formatoAtivo === f.id ? styles.botaoFormatoAtivo : ""
                    }`}
                    onClick={() => setFormatoAtivo(f.id)}
                    title={f.instrucao}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            {!emConversa ? (
              <div className={styles.botesDeSugesto}>
                {sugestoes.map((s) => (
                  <BotoSugesto
                    key={s.id}
                    icone={s.icone}
                    texto={s.texto}
                    onClick={() => handleEnviar(s.texto)}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.areaChat}>
                {historico.map((msg, idx) =>
                  msg.tipo === "usuario" ? (
                    <div key={idx} className={styles.mensagemUsuario}>
                      <div className={styles.bolhaUsuario}>
                        <p>{msg.conteudo}</p>
                        <span className={styles.horarioUsuario}>{msg.horario}</span>
                      </div>
                      <div className={styles.avatarUsuario} />
                    </div>
                  ) : (
                    <RespostaIA
                      key={idx}
                      conteudo={msg.conteudo}
                      horario={msg.horario}
                    />
                  )
                )}

                {carregando && <RespostaIA carregando />}

                <div ref={fimChatRef} />
              </div>
            )}

            {/* Preview do arquivo selecionado + erros — acima do formulário */}
            {extraindo && (
              <div className={styles.previewPdf}>
                <span>⏳ Extraindo texto do PDF...</span>
              </div>
            )}

            {arquivoPdf && !extraindo && (
              <div className={styles.previewPdf}>
                <span>📄 {arquivoPdf.nome}</span>
                <button
                  onClick={removerArquivo}
                  title="Remover arquivo"
                  className={styles.botaoRemoverPdf}
                >
                  ✕
                </button>
              </div>
            )}

            {erroArquivo && (
              <span className={styles.erroArquivo}>{erroArquivo}</span>
            )}

            <div className={styles.formularioChat}>
              <div className={styles.inputIa}>
                {/* Botão do alfinete agora abre o explorador de arquivos */}
                <button
                  type="button"
                  className={`${styles.botaoMidia} ${arquivoPdf ? styles.botaoMidiaAtivo : ""}`}
                  title="Anexar PDF"
                  onClick={() => inputArquivoRef.current?.click()}
                  disabled={extraindo}
                >
                  <img src="/Group-80@2x.png" alt="Anexo" />
                </button>

                <input
                  type="text"
                  className={styles.campoTexto}
                  placeholder={
                    arquivoPdf
                      ? "PDF anexado. Digite sua pergunta sobre o documento..."
                      : "Digite sua dúvida aqui..."
                  }
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={carregando}
                />

                <button
                  type="button"
                  className={styles.botaoEnviar}
                  title="Enviar mensagem"
                  onClick={() => handleEnviar()}
                  disabled={carregando || (!mensagem.trim() && !arquivoPdf)}
                >
                  <img src="/Group-79@2x.png" alt="Enviar" />
                </button>
              </div>

              <div className={styles.descrioDeSegurana}>
                <img className={styles.vectorIcon} alt="" src="/Vector6.svg" />
                <span>Suas conversas são confidenciais e seguras.</span>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default UsurioIA;
