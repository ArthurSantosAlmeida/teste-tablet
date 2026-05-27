/**
 * Dados centralizados de todos os planos da Juriki.
 * Para alterar preços, features ou nomes, edite apenas este arquivo.
 */

export const PLANOS_PARA_VOCE = [
  {
    id: "petala",
    nome: "Pétala",
    descricao: "Para clientes",
    icone: "/Petala@2x.png",
    preco: "29,90",
    features: [
      "Conversas limitadas com IA",
      "Acesso à base de documentos",
      "Suporte por e-mail",
      "Histórico de conversas",
      "Notificações de prazo",
    ],
    tipoBotao: "assinar",
    destaque: false,
  },
  {
    id: "broto",
    nome: "Broto",
    descricao: "Para advogados e clientes",
    icone: "/broto-1@2x.png",
    preco: "79,90",
    features: [
      "Conversas ilimitadas com IA",
      "Acesso à base de documentos",
      "Suporte prioritário",
      "Histórico completo",
      "Notificações de prazo",
    ],
    tipoBotao: "assinar",
    destaque: true,
  },
  {
    id: "flor",
    nome: "Flor",
    descricao: "Para advogados",
    icone: "/flor-5-1@2x.png",
    preco: "29,90",
    features: [
      "Conversas ilimitadas com IA",
      "Gestão de clientes",
      "Relatórios automáticos",
      "Integração com sistemas",
      "Suporte dedicado",
    ],
    tipoBotao: "assinar",
    destaque: false,
  },
];

export const PLANOS_PARA_EQUIPES = [
  {
    id: "ramo",
    nome: "Ramo",
    descricao: "Até 5 usuários",
    icone: "/flor-4-1@2x.png",
    preco: "399,90",
    features: [
      "Tudo do plano Flor",
      "Painel administrativo",
      "Relatórios de equipe",
      "Suporte por telefone",
      "Onboarding personalizado",
      "Integrações avançadas",
      "SLA garantido",
      "Backup automático",
    ],
    tipoBotao: "vendas",
    destaque: false,
  },
  {
    id: "jardim",
    nome: "Jardim",
    descricao: "Grandes corporações",
    icone: "/jardim-1@2x.png",
    preco: "399,90",
    features: [
      "Tudo do plano Ramo",
      "Usuários ilimitados",
      "Infraestrutura dedicada",
      "Compliance e auditoria",
      "Gerente de conta exclusivo",
      "Treinamento da equipe",
      "API personalizada",
      "Contrato enterprise",
    ],
    tipoBotao: "vendas",
    destaque: false,
  },
];

export const LINKS_RODAPE = {
  navegacao: ["Início", "Planos", "Sobre nós", "FAQ"],
  paraVoce: [
    "Como funciona",
    "Perguntas frequentes",
    "Termos de uso",
    "Política de privacidade",
  ],
  paraAdvogados: [
    "Seja um parceiro",
    "Ferramentas",
    "Planos para advogados",
    "Central de ajuda",
  ],
  contato: {
    email: "contato@juriki.com.br",
    telefone: "(11) 4002-8922",
    horario: "Seg - Sex: 9h às 18h",
  },
};

export const REDES_SOCIAIS = [
  { src: "/instagram-white-icon.svg", alt: "Instagram", url: "https://www.instagram.com/juriki_juridico"},
  { src: "/linkedin-app-white-icon.svg", alt: "LinkedIn", url: "https://www.linkedin.com/in/juriki-juridico-7165a8405/"},
  { src: "github-white-icon.svg", alt: "github"},
  { src: "/ri-youtube-line.svg", alt: "YouTube" },
  { src: "/hugeicons-new-twitter-rectangle.svg", alt: "Twitter/X" },
];
