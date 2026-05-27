import { useState } from "react";
import styles from "./FormatoPersonalizado.module.css";

const LIMITE_CHARS = 300;

const EXEMPLOS = [
  "Use apenas 2 tópicos e termine com uma frase resumo",
  "Responda em bullet points curtos, máximo 3 linhas cada",
  "Explique como se eu tivesse 15 anos, sem termos técnicos",
  "Estruture: Problema → Direitos → Próximos Passos",
];

/**
 * FormatoPersonalizado
 *
 * Props:
 *  - instrucao        : string   — valor atual da instrução
 *  - onInstrucaoChange: (str) => void
 */
const FormatoPersonalizado = ({ instrucao, onInstrucaoChange }) => {
  const [aberto, setAberto] = useState(false);

  const handleTexto = (e) => {
    if (e.target.value.length <= LIMITE_CHARS) {
      onInstrucaoChange(e.target.value);
    }
  };

  const aplicarExemplo = (ex) => onInstrucaoChange(ex);
  const limpar = () => onInstrucaoChange("");

  const temInstrucao = instrucao.trim().length > 0;

  return (
    <div className={styles.wrapper}>
      {/* Botão que abre/fecha o painel */}
      <button
        type="button"
        className={`${styles.gatilho} ${temInstrucao ? styles.gatilhoAtivo : ""}`}
        onClick={() => setAberto((v) => !v)}
        title="Personalizar formato da resposta"
      >
        <span className={styles.iconeFmt}>✦</span>
        <span>
          {temInstrucao ? "Formato personalizado ativo" : "Personalizar formato"}
        </span>
        {temInstrucao && (
          <span className={styles.badge}>1</span>
        )}
        <span className={`${styles.seta} ${aberto ? styles.setaAberta : ""}`}>
          ▾
        </span>
      </button>

      {/* Painel expansível */}
      {aberto && (
        <div className={styles.painel}>
          <p className={styles.descricao}>
            Descreva exatamente como quer que a IA estruture a resposta.
            Ela seguirá sua instrução na próxima mensagem enviada.
          </p>

          {/* Campo livre */}
          <div className={styles.campoWrapper}>
            <textarea
              className={styles.textarea}
              placeholder={`Ex: "Utilize apenas 2 tópicos, faça um resumo no meio e termine com uma única frase que resume a resposta"`}
              value={instrucao}
              onChange={handleTexto}
              rows={3}
            />
            <span className={`${styles.contador} ${instrucao.length > LIMITE_CHARS * 0.85 ? styles.contadorAlerta : ""}`}>
              {instrucao.length}/{LIMITE_CHARS}
            </span>
          </div>

          {/* Exemplos rápidos */}
          <div className={styles.exemplos}>
            <span className={styles.rotuloExemplos}>Exemplos rápidos:</span>
            <div className={styles.listaExemplos}>
              {EXEMPLOS.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  className={`${styles.chip} ${instrucao === ex ? styles.chipAtivo : ""}`}
                  onClick={() => aplicarExemplo(ex)}
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          {/* Ações */}
          {temInstrucao && (
            <button type="button" className={styles.botaoLimpar} onClick={limpar}>
              ✕ Remover instrução
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FormatoPersonalizado;
