/**
 * FRAME.AI — Constantes e Dados Estruturados
 * Design: Cinematográfico, moderno, com foco em filmmakers
 * Cores: Preto profundo (#080808), Laranja vibrante (#ff4d00), Branco creme (#f5f0e8)
 */

export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

export const SITE_CONFIG = {
  title: "FRAME.AI — Agência Inteligente para Filmmakers",
  description: "A agência inteligente do filmmaker moderno. Ferramentas IA para roteiro, callsheet, decupagem, orçamento e muito mais.",
  domain: "frame.ai",
};

export const NAVIGATION = [
  { label: "Ferramentas", href: "#tools" },
  { label: "Preços", href: "#pricing" },
  { label: "Sobre", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export const HERO = {
  tag: "Inteligência Artificial para Produção",
  title: ["ROTEIROS", "CALLSHEETS", "ORÇAMENTOS"],
  subtitle: "Transforme suas ideias em produções profissionais. Gere documentos técnicos, orçamentos realistas e cronogramas em segundos com IA treinada em padrões da indústria cinematográfica.",
  cta: {
    primary: { label: "Começar Agora", href: "#" },
    secondary: { label: "Ver Demo", href: "#" },
  },
  stats: [
    { number: "2.5K+", label: "Roteiros Gerados" },
    { number: "98%", label: "Satisfação" },
    { number: "47", label: "Países" },
  ],
};

export const TOOLS = [
  {
    icon: "🎬",
    number: "01",
    name: "Gerador de Roteiro",
    description: "Descreva a ideia e receba um roteiro formatado em padrão ABNT/Hollywood com diálogos, indicações técnicas e timecode.",
    tags: ["Pre-prod", "Ficção", "Institucional", "Publicitário"],
  },
  {
    icon: "📋",
    number: "02",
    name: "Callsheet Inteligente",
    description: "Preencha os dados do projeto e gere um callsheet profissional com contatos, horários, locações e necessidades técnicas.",
    tags: ["Produção", "Logística", "Equipe"],
  },
  {
    icon: "🎞",
    number: "03",
    name: "Decupagem Técnica",
    description: "Transforme roteiro em plano de filmagem detalhado: planos, movimentos de câmera, lentes recomendadas e tempo estimado.",
    tags: ["Direção", "DOP", "Planejamento"],
  },
  {
    icon: "💰",
    number: "04",
    name: "Orçamento Automático",
    description: "Monte orçamentos realistas com tabela de diárias de equipamento, equipe e pós-produção conforme mercado nacional.",
    tags: ["Comercial", "Produtora", "Freelance"],
  },
  {
    icon: "💼",
    number: "05",
    name: "Proposta Comercial",
    description: "Gere propostas elegantes e persuasivas para clientes com escopo, cronograma, valor e termos de pagamento.",
    tags: ["Vendas", "Cliente", "Contrato"],
  },
  {
    icon: "📊",
    number: "06",
    name: "Relatório de Produção",
    description: "Compile dados da produção em relatório executivo com KPIs, timeline, gastos e métricas de qualidade.",
    tags: ["Pós-prod", "Gestão", "Analytics"],
  },
];

export const MARQUEE_ITEMS = [
  "PRÉ-PRODUÇÃO",
  "ROTEIRO",
  "CALLSHEET",
  "DECUPAGEM",
  "ORÇAMENTO",
  "CONTRATO",
  "PROPOSTA",
  "COLORIZAÇÃO",
  "ENTREGA",
];

export const PRICING = [
  {
    tier: "// Iniciante",
    price: "R$97",
    period: "/mês",
    description: "Perfeito para freelancers e criadores independentes",
    features: [
      "5 roteiros/mês",
      "Callsheet básico",
      "Decupagem simplificada",
      "Orçamento padrão",
      "Suporte por email",
    ],
    cta: { label: "Começar Agora", href: "#" },
    highlight: false,
  },
  {
    tier: "// Profissional",
    price: "R$297",
    period: "/mês — mais popular",
    description: "Para produtoras e diretores profissionais",
    features: [
      "Roteiros ilimitados",
      "Decupagem técnica IA",
      "Contratos personalizados",
      "Orçamento automático",
      "Gestão de projeto",
      "Suporte prioritário",
    ],
    cta: { label: "Começar Agora", href: "#" },
    highlight: true,
  },
  {
    tier: "// Produtora",
    price: "R$697",
    period: "/mês",
    description: "Solução completa para grandes produtoras",
    features: [
      "Tudo do Profissional",
      "Multi-usuários (10 seats)",
      "API de integração",
      "White-label",
      "Onboarding dedicado",
      "SLA garantido",
    ],
    cta: { label: "Falar com equipe", href: "#" },
    highlight: false,
  },
];

export const FOOTER_LINKS = {
  tools: {
    title: "Ferramentas",
    links: [
      { label: "Gerador de Roteiro", href: "#" },
      { label: "Callsheet", href: "#" },
      { label: "Decupagem", href: "#" },
      { label: "Orçamento", href: "#" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Casos", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Termos", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
};
