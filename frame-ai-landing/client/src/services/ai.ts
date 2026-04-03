/**
 * FRAME.AI — Serviços de Inteligência Artificial
 * Integração com API Groq para geração de conteúdo
 */

import { ToolId } from "../lib/types";

export const generateContent = async (toolId: ToolId | string, input: string): Promise<string> => {
  if (!input || input.trim().length === 0) {
    throw new Error("O contexto de entrada não pode ser vazio.");
  }

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ toolId, input }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro na geração de conteúdo');
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw error;
  }
};
