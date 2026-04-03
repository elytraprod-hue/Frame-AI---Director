/**
 * Tool Detail Page
 * Página com detalhes de uma ferramenta específica
 */

import { motion } from "framer-motion";
import { TOOLS } from "@/../../shared/const";
import { useApp } from "@/contexts/AppContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

export default function ToolDetail() {
  const [location, setLocation] = useLocation();
  const { openModal, isAuthenticated } = useApp();

  // Extrai o ID da URL
  const toolId = location.split("/").pop();
  const tool = (TOOLS as any).find((t: any) => t.number === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Ferramenta não encontrada</h1>
          <Button onClick={() => setLocation("/tools")} className="bg-orange-500 hover:bg-orange-600">
            Voltar para Ferramentas
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setLocation("/tools")}
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para Ferramentas
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start gap-6 mb-8">
            <span className="text-6xl">{tool.icon}</span>
            <div>
              <h1
                className="text-5xl font-bold text-orange-500 mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {tool.name}
              </h1>
              <p className="text-gray-400 text-lg">{tool.description}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            {/* About */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Sobre
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {tool.description} Esta ferramenta foi desenvolvida especificamente para profissionais de vídeo que
                precisam de soluções rápidas e eficientes em suas produções.
              </p>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Principais Recursos
              </h2>
              <ul className="space-y-3">
                {[
                  "Processamento rápido com IA",
                  "Interface intuitiva e fácil de usar",
                  "Exportação em múltiplos formatos",
                  "Integração com outras ferramentas",
                  "Suporte técnico 24/7",
                  "Atualizações automáticas",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check size={20} className="text-orange-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Casos de Uso
              </h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Produtoras de conteúdo independentes</li>
                <li>• Agências de publicidade</li>
                <li>• Estúdios de produção</li>
                <li>• Criadores de conteúdo digital</li>
                <li>• Profissionais freelancer</li>
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="bg-gradient-to-br from-orange-500/10 to-black border border-orange-500/30 p-8 rounded-lg sticky top-32">
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Comece Agora
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {isAuthenticated 
                  ? "Você tem acesso liberado para este módulo."
                  : "Experimente esta ferramenta ou adquira um plano."
                }
              </p>
              
              {isAuthenticated ? (
                <Button
                  onClick={() => setLocation(`/studio/${tool.number}`)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold mb-3 font-mono tracking-widest text-xs uppercase"
                >
                  ▶ Abrir no Studio
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => openModal("checkout")}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold mb-3 tracking-widest text-xs uppercase"
                  >
                    Adquirir Acesso
                  </Button>
                  <Button
                    onClick={() => openModal("demo")}
                    variant="outline"
                    className="w-full border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white"
                  >
                    Agendar Demo
                  </Button>
                </>
              )}

              {/* Info Box */}
              <div className="mt-8 pt-8 border-t border-gray-800 space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Disponível em</p>
                  <p className="text-sm text-white mt-1">Todos os planos</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Tempo de Processamento</p>
                  <p className="text-sm text-white mt-1">Menos de 2 minutos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
