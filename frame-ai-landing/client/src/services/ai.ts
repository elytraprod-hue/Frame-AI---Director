/**
 * FRAME.AI — Serviços de Inteligência Artificial
 * Mock do motor de geração para as ferramentas SaaS
 */

import { ToolId } from "../lib/types";

// Simula tempo de processamento de IA (2-4 segs)
const simulateProcessing = () => new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));

export const generateContent = async (toolId: ToolId | string, input: string): Promise<string> => {
  if (!input || input.trim().length === 0) {
    throw new Error("O contexto de entrada não pode ser vazio.");
  }

  await simulateProcessing();

  switch (toolId) {
    case "roteiro":
    case "01":
      return `### Roteiro Gerado com Sucesso\n\n**TÍTULO:** ${input.substring(0, 30).toUpperCase()}...\n\n**CENA 1 - INT. ESTÚDIO - DIA**\n\n(Ação)\nA câmera revela o ambiente baseado no seu contexto: "${input}".\n\n**DIRETOR**\n(Para a equipe)\nAção!\n\n---\n*Nota da IA: Adapte os diálogos conforme a estética da marca.*`;
    
    case "callsheet":
    case "02":
      return `### Callsheet Inteligente\n\n**DATA DA DIÁRIA:** [Preencher]\n**CALL TIME GERAL:** 07:00 AM\n\n**RESUMO DO PROJETO:**\n"${input}"\n\n**Cronograma Previsto:**\n- 07:00: Café da Manhã\n- 08:00: Maquiagem e Figurino\n- 09:30: Primeiro Motor\n\n*Nota: Emita também os Termos de Imagem.*`;
    
    case "decupagem":
    case "03":
      return `### Plano de Decupagem (Shotlist)\n\n**CENA 1** - Referência: ${input}\n\n1. **PLANO ABERTO (WIDE):** Estabelece locação (Lente: 24mm).\n2. **PLANO MÉDIO (MEDIUM):** Atores interagindo (Lente: 50mm).\n3. **PLANO DETALHE (CLOSE-UP):** Objeto importante (Lente: 85mm).\n\n*Nota da IA: Considere filtros de difusão para aspecto cinematográfico.*`;
    
    case "orcamento":
    case "04":
      return `### Projeção Estimada de Orçamento\n\n**Contexto:** ${input}\n\n**EQUIPE TÉCNICA:**\n- Direção: R$ 3.000\n- Direção de Fotografia: R$ 2.500\n- Produção: R$ 1.500\n\n**EQUIPAMENTOS (Locação):**\n- Câmera Cinema + Lentes: R$ 3.800/diária\n- Iluminação Completa: R$ 2.000/diária\n\n**TOTAL ESTIMADO:** R$ 12.800,00 *(+ Taxas)*\n\n*Nota: Valores baseados no mercado nacional CPT/SIND.*`;
    
    case "proposta":
    case "05":
      return `### Proposta Comercial Executiva\n\nPrezado(a) Cliente,\n\nApresentamos abaixo o escopo comercial para: ${input}\n\n**OBJETIVOS DO PROJETO:**\nProver uma estética premium audiovisual para engajar seu público e reter a audiência nas primeiras 3 semanas de campanha.\n\n**VALORES E PRAZOS:**\n- Sinal: 50% na aprovação\n- Entrega (Final Cut): D+15 após captação\n\nFicamos à disposição.`;
    
    case "relatorio":
    case "06":
      return `### Relatório de Produção (Wrap Report)\n\n**PROJETO:** ${input}\n\n**STATUS GERAL:** Captação Concluída\n\n**OCORRÊNCIAS:**\nNenhuma ocorrência grave reportada no set.\n\n**PRÓXIMOS PASSOS:**\n- Ingest dos materiais (Concluído)\n- Edição offline (Em andamento)\n- Color Grading (Pendente)\n\n*Fim do Relatório*`;

    default:
      return `### Ferramenta Ativada\n\nProcessamento para a ferramenta [${toolId}] utilizando o input: "${input}".\n\nO conteúdo específico desta automação está em fase beta e logo será liberado.`;
  }
};
