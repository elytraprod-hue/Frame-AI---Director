import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { TOOLS } from "@/../../shared/const";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Play, Copy, CheckCircle2 } from "lucide-react";
import { generateContent } from "@/services/ai";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

export default function Studio() {
  const [location, setLocation] = useLocation();
  const [inputContext, setInputContext] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Extrai o ID da URL (.../studio/01)
  const toolId = location.split("/").pop();
  const tool = (TOOLS as any).find((t: any) => t.number === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Módulo não encontrado no Estúdio</h1>
          <Button onClick={() => setLocation("/tools")} className="bg-orange-500 hover:bg-orange-600">
            Voltar para Ferramentas
          </Button>
        </div>
      </div>
    );
  }

  const handleGenerate = async () => {
    if (!inputContext.trim()) {
      toast.error("Por favor, preencha as informações necessárias.");
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateContent(toolId!, inputContext);
      setOutput(result);
      toast.success("Conteúdo gerado com sucesso!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao gerar conteúdo na IA.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-8 md:px-12 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation(`/tools/${toolId}`)}
              className="text-gray-500 hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-gray-900"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-orange-500">Módulo Ativo</p>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="text-gray-500">[{tool.number}]</span>
                {tool.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Studio Editor Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
          
          {/* Input Area */}
          <div className="flex flex-col h-full space-y-4">
            <div className="bg-gray-900 border border-gray-800 p-4 rounded-t flex justify-between items-center">
              <span className="text-sm font-mono uppercase tracking-widest text-gray-400">INPUT DO USUÁRIO</span>
            </div>
            <textarea
              value={inputContext}
              onChange={(e) => setInputContext(e.target.value)}
              placeholder="Descreva as diretrizes, o contexto geral, referências, ou informações cruciais...&#10;&#10;Ex: Uma cena de ação que se passa em um estúdio molhado, com paleta de cores teal and orange."
              className="w-full flex-grow bg-black border border-gray-800 text-gray-300 p-6 rounded-b focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm leading-relaxed"
            />
            
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || inputContext.trim() === ""}
              className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-black font-bold uppercase tracking-widest text-sm disabled:opacity-50 mt-4"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processando via IA...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Executar Motor IA
                </>
              )}
            </Button>
          </div>

          {/* Output Area */}
          <div className="flex flex-col h-full bg-gray-950 border border-gray-800 rounded relative">
            <div className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center rounded-t">
              <span className="text-sm font-mono uppercase tracking-widest text-orange-500/80">OUTPUT GERADO</span>
              <button 
                onClick={copyToClipboard}
                disabled={!output}
                className="text-gray-500 hover:text-white disabled:opacity-30 transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
              >
                {copied ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
                Copiar
              </button>
            </div>
            
            <div className="flex-grow p-6 overflow-y-auto font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-300">
              {output ? (
                <div className="prose prose-invert prose-orange max-w-none prose-p:leading-relaxed prose-h3:text-white prose-h3:text-2xl prose-h3:mb-4">
                  <ReactMarkdown>{output}</ReactMarkdown>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                  {isGenerating ? (
                     <div className="flex flex-col items-center animate-pulse">
                        <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mb-4" />
                        <p>Analisando contexto...</p>
                        <p className="text-xs">Aplicando motor {tool.name}</p>
                     </div>
                  ) : (
                     <>
                        <span className="text-6xl opacity-20">{tool.icon}</span>
                        <p>O resultado da IA aparecerá aqui.</p>
                     </>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
