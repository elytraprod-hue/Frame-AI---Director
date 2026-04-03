/**
 * FRAME.AI — Mock API
 * Simula chamadas de API com localStorage e delays
 */

import { ContactFormData, CheckoutFormData } from "./types";

const API_DELAY = 1500; // 1.5 segundos de delay para simular rede

/**
 * Simula delay de rede
 */
function delay(ms: number = API_DELAY): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Salva dados no localStorage
 */
function saveToStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erro ao salvar no localStorage:", error);
  }
}

/**
 * Recupera dados do localStorage
 */
function getFromStorage<T>(key: string): T | null {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erro ao recuperar do localStorage:", error);
    return null;
  }
}

/**
 * Simula envio de formulário de contato
 */
export async function submitContactForm(data: ContactFormData): Promise<{
  success: boolean;
  message: string;
  id?: string;
}> {
  await delay();

  // Simula validação
  if (!data.email || !data.name || !data.message) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  // Simula erro aleatório (10% de chance)
  if (Math.random() < 0.1) {
    throw new Error("Erro ao enviar mensagem. Tente novamente.");
  }

  // Salva no localStorage
  const contacts = getFromStorage<ContactFormData[]>("frame_contacts") || [];
  const newContact = { ...data, id: Date.now().toString() };
  contacts.push(newContact);
  saveToStorage("frame_contacts", contacts);

  return {
    success: true,
    message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    id: newContact.id,
  };
}

/**
 * Simula envio de formulário de checkout
 */
export async function submitCheckoutForm(data: CheckoutFormData): Promise<{
  success: boolean;
  message: string;
  orderId?: string;
  accessCode?: string;
  redirectUrl?: string;
}> {
  await delay(2000); // Checkout leva mais tempo

  // Simula validação básica
  if (!data.email || !data.fullName || !data.phone || !data.planId) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  // Gera um código de acesso único ex: FRAME-X7A9
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let accessCode = 'FRAME-';
  for (let i = 0; i < 4; i++) {
    accessCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const newOrder = {
    id: `ORD-${Date.now()}`,
    ...data,
    accessCode,
    createdAt: new Date().toISOString(),
    status: "completed",
  };

  const orders = getFromStorage<any[]>("frame_orders") || [];
  orders.push(newOrder);
  saveToStorage("frame_orders", orders);

  // Também salvamos um mapeamento de código -> usuário para o login
  const users = getFromStorage<any[]>("frame_users") || [];
  const newUser = {
    id: `USER-${Date.now()}`,
    email: data.email,
    name: data.fullName,
    plan: data.planId,
    accessCode: accessCode,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveToStorage("frame_users", users);

  return {
    success: true,
    message: "Pagamento via PIX confirmado! Código gerado.",
    orderId: newOrder.id,
    accessCode: accessCode,
    redirectUrl: "/success",
  };
}

/**
 * Simula envio de pedido de demo
 */
export async function submitDemoRequest(data: {
  email: string;
  name: string;
}): Promise<{
  success: boolean;
  message: string;
  demoId?: string;
}> {
  await delay();

  // Simula validação
  if (!data.email || !data.name) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  // Simula erro aleatório (5% de chance)
  if (Math.random() < 0.05) {
    throw new Error("Erro ao agendar demo. Tente novamente.");
  }

  // Salva no localStorage
  const demos = getFromStorage<any[]>("frame_demos") || [];
  const newDemo = {
    id: `DEMO-${Date.now()}`,
    ...data,
    createdAt: new Date().toISOString(),
    scheduledFor: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24h depois
  };
  demos.push(newDemo);
  saveToStorage("frame_demos", demos);

  return {
    success: true,
    message: "Demo agendada com sucesso! Você receberá um email de confirmação.",
    demoId: newDemo.id,
  };
}

/**
 * Recupera dados do usuário
 */
export function getCurrentUser() {
  return getFromStorage("frame_user");
}

/**
 * Realiza login através de um access code
 */
export async function loginWithAccessCode(code: string) {
  await delay(1000);
  const users = getFromStorage<any[]>("frame_users") || [];
  const user = users.find(u => u.accessCode === code.trim().toUpperCase());
  
  if (!user) {
    throw new Error("Código de acesso inválido ou expirado.");
  }
  
  // Salva na sessão atual
  saveToStorage("frame_user", user);
  return user;
}

/**
 * Faz logout
 */
export function logout(): void {
  localStorage.removeItem("frame_user");
}

/**
 * Recupera histórico de contatos
 */
export function getContacts() {
  return getFromStorage<ContactFormData[]>("frame_contacts") || [];
}

/**
 * Recupera histórico de pedidos
 */
export function getOrders() {
  return getFromStorage<any[]>("frame_orders") || [];
}

/**
 * Recupera histórico de demos
 */
export function getDemos() {
  return getFromStorage<any[]>("frame_demos") || [];
}
