/**
 * Dados centralizados da página Meus Processos.
 * Para alterar processos, abas ou nav, edite apenas este arquivo.
 */

// ── Categorias e suas cores ────────────────────────────────────────
// Centraliza o mapeamento de categoria → cor de badge.
// Evita passar cores como props inline nos componentes.
export const CORES_CATEGORIA = {
  Trabalhista: {
    fundo: "rgba(28, 101, 6, 0.05)",
    texto: "#1c6406",
  },
  Civel: {
    fundo: "rgba(61, 106, 138, 0.1)",
    texto: "#3d6a8a",
  },
  Família: {
    fundo: "rgba(75, 34, 157, 0.1)",
    texto: "#4b229d",
  },
};

// ── Status dos processos ───────────────────────────────────────────
export const STATUS = {
  EM_ANDAMENTO: "Em andamento",
  ENCERRADO: "Encerrado",
  AGUARDANDO: "Aguardando",
};

// ── Lista de processos ─────────────────────────────────────────────
export const PROCESSOS = [
  {
    id: "proc-001",
    categoria: "Trabalhista",
    titulo: "Rescisão indireta",
    numeroProcesso: "0001234-56.2024.5.02.0001",
    advogado: "Dra. Beatriz Oliveira",
    atualizadoEm: "10/05/2026",
    status: STATUS.EM_ANDAMENTO,
  },
  {
    id: "proc-002",
    categoria: "Civel",
    titulo: "Cobrança de débitos",
    numeroProcesso: "0002345-67.2024.8.26.0100",
    advogado: "Dr. Rafael Mendes",
    atualizadoEm: "08/05/2026",
    status: STATUS.EM_ANDAMENTO,
  },
  {
    id: "proc-003",
    categoria: "Família",
    titulo: "Regulamentação de visitas",
    numeroProcesso: "0003456-78.2024.8.26.0200",
    advogado: "Dra. Camila Torres",
    atualizadoEm: "05/05/2026",
    status: STATUS.EM_ANDAMENTO,
  },
];

// ── Abas de filtro ─────────────────────────────────────────────────
export const FILTROS = [
  {
    id: "ativos",
    label: "Ativos",
    icone: "/codicon-folder-active.svg",
    contagem: 3,
  },
  {
    id: "consultas",
    label: "Consultas agendadas",
    icone: "/mdi-light-calendar.svg",
    contagem: 2,
  },
  {
    id: "encerrados",
    label: "Encerrados",
    icone: "/ep-finished.svg",
    contagem: 3,
  },
];

// ── Ações disponíveis em cada card de processo ─────────────────────
export const ACOES_PROCESSO = [
  {
    id: "ver",
    label: "Ver detalhes",
    icone: "/iconoir-eye-solid1.svg",
    variante: "primaria",
  },
  {
    id: "cancelar",
    label: "Cancelar consulta",
    icone: "/uil-trash.svg",
    variante: "perigo",
  },
  {
    id: "trocar",
    label: "Trocar de advogado",
    icone: "/system-uicons-reverse.svg",
    variante: "secundaria",
  },
];

// ── Links da navbar interna ────────────────────────────────────────
export const LINKS_NAV_INTERNA = [
  { id: "inicio", label: "Início", rota: null },
  { id: "ia", label: "IA Jurídica", rota: null },
  { id: "advogados", label: "Advogados", rota: "/planos" },
  { id: "processos", label: "Meus processos", rota: "/" },
];
