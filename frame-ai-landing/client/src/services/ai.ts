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
    console.log('Calling AI API with toolId:', toolId);
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ toolId, input }),
    });

    console.log('AI API response status:', response.status);

    if (!response.ok) {
      let errorMessage = 'Erro na geração de conteúdo';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
        if (errorData.details) {
          errorMessage += ` - ${errorData.details}`;
        }
      } catch (_) {
        errorMessage = `Erro HTTP ${response.status}`;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.content) {
      throw new Error('Nenhuma resposta recebida da IA');
    }

    console.log('Successfully generated content');
    return data.content;
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw error;
  }
};
