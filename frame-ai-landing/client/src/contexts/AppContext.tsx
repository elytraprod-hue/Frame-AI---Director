/**
 * FRAME.AI — App Context
 * Gerenciamento de estado global da aplicação
 */

import React, { createContext, useState, useCallback, useEffect } from "react";
import { AppContextType, Notification, User, PlanTier, ToolId, ContactFormData, CheckoutFormData } from "@/lib/types";
import { submitContactForm, submitCheckoutForm, submitDemoRequest, getCurrentUser, loginWithAccessCode, logout as apiLogout } from "@/lib/api";
import { toast } from "sonner";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // User state
  const [user, setUser] = useState<User | null>(() => getCurrentUser() as User | null);

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanTier | null>(null);
  const [selectedTool, setSelectedTool] = useState<ToolId | null>(null);

  // Modals
  const [modals, setModals] = useState({
    checkout: false,
    contact: false,
    demo: false,
    toolDetail: false,
  });

  // Notifications
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Modal handlers
  const openModal = useCallback((modal: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modal]: true }));
  }, []);

  const closeModal = useCallback((modal: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [modal]: false }));
  }, []);

  // Notification handlers
  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
    const id = Date.now().toString();
    const newNotification: Notification = { ...notification, id };
    setNotifications((prev) => [...prev, newNotification]);

    // Auto-remove after duration
    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // API call handlers
  const submitContact = useCallback(async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const result = await submitContactForm(data);
      toast.success(result.message);
      closeModal("contact");
      addNotification({
        type: "success",
        message: result.message,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao enviar mensagem";
      toast.error(message);
      addNotification({
        type: "error",
        message,
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [closeModal, addNotification]);

  const submitCheckout = useCallback(async (data: CheckoutFormData) => {
    setIsLoading(true);
    try {
      const result = await submitCheckoutForm(data);
      if (!result.accessCode) throw new Error("Falha ao gerar código de acesso.");
      
      toast.success(result.message);
      
      addNotification({
        type: "success",
        message: result.message,
      });

      return result.accessCode;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao processar pagamento";
      toast.error(message);
      addNotification({
        type: "error",
        message,
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [addNotification]);

  const submitDemo = useCallback(async (data: { email: string; name: string }) => {
    setIsLoading(true);
    try {
      const result = await submitDemoRequest(data);
      toast.success(result.message);
      closeModal("demo");
      addNotification({
        type: "success",
        message: result.message,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao agendar demo";
      toast.error(message);
      addNotification({
        type: "error",
        message,
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [closeModal, addNotification]);

  const login = useCallback(async (accessCode: string) => {
    setIsLoading(true);
    try {
      const user = await loginWithAccessCode(accessCode);
      setUser(user);
      toast.success("Login efetuado com sucesso!");
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Código inválido.";
      toast.error(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    apiLogout();
    setUser(null);
    toast.info("Você saiu do sistema.");
  }, []);

  const value: AppContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    selectedPlan,
    selectedTool,
    modals,
    notifications,
    setUser,
    setLoading: setIsLoading,
    selectPlan: setSelectedPlan,
    selectTool: setSelectedTool,
    openModal,
    closeModal,
    addNotification,
    removeNotification,
    clearNotifications,
    submitContact,
    submitCheckout,
    submitDemo,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextType {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useApp deve ser usado dentro de AppProvider");
  }
  return context;
}
