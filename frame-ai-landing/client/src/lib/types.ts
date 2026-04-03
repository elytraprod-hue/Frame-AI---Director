/**
 * FRAME.AI — Tipos Compartilhados
 * Tipos TypeScript para toda a aplicação
 */

export type PlanTier = "iniciante" | "profissional" | "produtora";

export type ToolId = "roteiro" | "callsheet" | "decupagem" | "orcamento" | "proposta" | "relatorio";

export interface User {
  id: string;
  email: string;
  name: string;
  plan: PlanTier;
  accessCode: string; // Adicionado para proteção via código
  createdAt: Date;
}

export interface Plan {
  id: PlanTier;
  tier: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlight: boolean;
}

export interface Tool {
  id: ToolId;
  icon: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
  fullDescription?: string;
  features?: string[];
  pricing?: {
    included: boolean;
    plans: PlanTier[];
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: "contact" | "demo" | "support";
}

export interface CheckoutFormData {
  planId: PlanTier;
  fullName: string;
  email: string;
  company?: string;
  phone: string;
  // Endereço e Cartão removidos em favor do fluxo PIX simplificado
}

export interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number;
}

export interface AppContextType {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // UI state
  isLoading: boolean;
  selectedPlan: PlanTier | null;
  selectedTool: ToolId | null;
  
  // Modals
  modals: {
    checkout: boolean;
    contact: boolean;
    demo: boolean;
    toolDetail: boolean;
  };
  
  // Notifications
  notifications: Notification[];
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  selectPlan: (plan: PlanTier) => void;
  selectTool: (tool: ToolId) => void;
  openModal: (modal: keyof AppContextType["modals"]) => void;
  closeModal: (modal: keyof AppContextType["modals"]) => void;
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  
  // API calls
  submitContact: (data: ContactFormData) => Promise<void>;
  submitCheckout: (data: CheckoutFormData) => Promise<string>; // Agora retorna o accessCode gerado
  submitDemo: (data: { email: string; name: string }) => Promise<void>;
  login: (accessCode: string) => Promise<boolean>;
  logout: () => void;
}
