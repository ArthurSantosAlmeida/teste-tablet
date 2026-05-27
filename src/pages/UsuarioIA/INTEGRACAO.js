// ─── MUDANÇAS EM UsurioIA.jsx ────────────────────────────────────────────────

// 1. Importe o componente novo:
import FormatoPersonalizado from "./components/FormatoPersonalizado";

// 2. Adicione um estado para a instrução livre:
const [instrucaoLivre, setInstrucaoLivre] = useState("");

// 3. Função de sanitização (mantém aqui em cima para usar abaixo):
const sanitizarInstrucao = (texto) =>
  texto
    .replace(/ignore (all |todas |as )?(previous |anteriores )?instructions?/gi, "")
    .replace(/system prompt/gi, "")
    .replace(/você (agora |now )?(é|is|deve ser)/gi, "")
    .trim();

// 4. Função principal de envio:
const enviarParaN8n = async (texto) => {
  const formato = FORMATOS.find((f) => f.id === formatoAtivo);

  const instrucaoLimpa = sanitizarInstrucao(instrucaoLivre);

  const instrucaoFinal = instrucaoLimpa
    ? `${formato.instrucao} Além disso, siga esta instrução específica do usuário: "${instrucaoLimpa}"`
    : formato.instrucao;

  const resposta = await fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: texto,
      instrucaoFormato: instrucaoFinal,
      history: historico.map((m) => ({
        role: m.tipo === "usuario" ? "user" : "assistant",
        content: m.conteudo,
      })),
    }),
  });

  const dados = await resposta.json();
  return dados.reply ?? "Sem resposta.";
};