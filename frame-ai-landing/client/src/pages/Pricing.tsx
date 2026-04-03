/**
 * Pricing Page
 * Página de preços com seleção de plano
 */

import { motion } from "framer-motion";
import { PRICING } from "@/../../shared/const";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const { selectPlan, openModal } = useApp();

  const handleSelectPlan = (planId: string) => {
    selectPlan(planId as any);
    openModal("checkout");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-32 pb-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PLANOS SIMPLES
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha o plano perfeito para sua produção. Sem contratos, cancele quando quiser.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mb-12"
        >
          {(PRICING as any).map((plan: any, idx: number) => {
            const isHighlight = plan.highlight;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  isHighlight
                    ? "md:scale-105 bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-2 border-orange-500"
                    : "bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700"
                }`}
              >
                {/* Card Content */}
                <div className="p-8 md:p-10">
                  {/* Tier Label */}
                  <div className="text-sm font-mono uppercase tracking-widest text-orange-500 mb-4">
                    {plan.tier}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-8 font-light">{plan.description}</p>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleSelectPlan(plan.tier.replace("// ", "").toLowerCase())}
                    className={`w-full py-3 px-6 mb-8 font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${
                      isHighlight
                        ? "bg-orange-500 text-black hover:bg-orange-600"
                        : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                    }`}
                  >
                    {plan.cta.label}
                  </Button>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature: string, fidx: number) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-black px-4 py-2 text-xs font-mono uppercase tracking-widest font-semibold">
                    Popular
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm"
        >
          Todos os planos incluem acesso a todas as ferramentas. Diferenças apenas em limite de uso e suporte.
        </motion.p>
      </div>
    </div>
  );
}
