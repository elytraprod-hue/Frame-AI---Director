import { HERO } from "@/../../shared/const";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { useLocation } from "wouter";

/**
 * Hero Section Component
 * Design: Cinematográfico com efeito de reel de filme, gradiente radial
 * Animações: Fade-in sequencial, hover effects nos botões
 * Tipografia: Bebas Neue para títulos (display), DM Sans para corpo
 */
export default function Hero() {
  const { openModal, isAuthenticated } = useApp();
  const [, setLocation] = useLocation();

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-8 md:px-12 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, #1a0a00 0%, #080808 70%)",
        }}
      />

      {/* Film Reel Background */}
      <div className="absolute top-0 right-0 w-2/3 h-full -z-5 overflow-hidden" style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,77,0,0.03) 3px, rgba(255,77,0,0.03) 4px)",
          }}
        />
        <div className="absolute inset-0 flex flex-wrap gap-0.5 p-0.5 opacity-15">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1/5 h-20 bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-700 rounded-sm"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3,
                delay: (i % 20) * 0.15,
                repeat: Infinity as any,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl"
      >
        {/* Tag */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-6"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-orange-500 animate-pulse">▶</span>
          <span className="text-xs font-mono uppercase tracking-widest text-orange-500">{(HERO as any).tag}</span>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1
            className="text-6xl md:text-8xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {(HERO as any).title[0]}
            <br />
            <span className="text-orange-500 ml-16">{(HERO as any).title[1]}</span>
            <br />
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "2px #f5f0e8",
              }}
            >
              {(HERO as any).title[2]}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed text-gray-400 mb-12 max-w-xl font-light"
        >
          {(HERO as any).subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 items-center flex-wrap">
          {isAuthenticated ? (
            <motion.button
              onClick={() => setLocation('/workflow')}
              className="bg-orange-500 text-black px-10 py-4 font-mono text-sm uppercase tracking-widest font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
              style={{
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ▶ Abrir o Studio
            </motion.button>
          ) : (
            <motion.button
              onClick={() => openModal('checkout')}
              className="bg-orange-500 text-black px-10 py-4 font-mono text-sm uppercase tracking-widest font-semibold hover:bg-orange-600 transition-colors cursor-pointer"
              style={{
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {(HERO as any).cta.primary.label}
            </motion.button>
          )}

          <motion.button
            onClick={() => openModal('demo')}
            className="text-gray-400 font-mono text-sm uppercase tracking-widest px-6 py-4 border border-gray-700 hover:border-gray-500 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            whileHover={{ x: 4 }}
          >
            {(HERO as any).cta.secondary.label}
            <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-20 right-8 md:right-12 flex gap-12"
      >
        {HERO.stats.map((stat: any) => (
          <div key={stat.label} className="text-right">
            <div
              className="text-4xl font-bold text-orange-500 leading-none mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {stat.number}
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-gray-500">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
