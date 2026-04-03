/**
 * Tools Page
 * Página com lista de todas as ferramentas
 */

import { motion } from "framer-motion";
import { TOOLS } from "@/../../shared/const";
import { useApp } from "@/contexts/AppContext";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Tools() {
  const { selectTool, openModal } = useApp();
  const [, setLocation] = useLocation();

  const handleToolClick = (toolId: string) => {
    selectTool(toolId as any);
    setLocation(`/tools/${toolId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-orange-500"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FERRAMENTAS
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore todas as ferramentas IA disponíveis para potencializar sua produção cinematográfica.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(TOOLS as any).map((tool: any) => (
            <motion.div
              key={tool.number}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onClick={() => handleToolClick(tool.number)}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover:border-orange-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl">{tool.icon}</span>
                  <span
                    className="text-2xl font-bold text-orange-500"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {tool.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full font-mono group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                  Ver Detalhes
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Border animation on hover */}
              <div className="absolute inset-0 border border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
