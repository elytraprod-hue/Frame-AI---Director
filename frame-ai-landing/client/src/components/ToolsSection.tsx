import { TOOLS, MARQUEE_ITEMS } from "@/../../shared/const";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

/**
 * Tools Section Component
 * Design: Grid de 6 cards com efeito hover, marquee animado
 * Animações: Fade-in staggered, hover scale effects
 */
export default function ToolsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scroll = () => {
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0;
      } else {
        marquee.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

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
    <section id="tools" className="py-24 px-8 md:px-12 bg-black">
      {/* Marquee */}
      <div className="mb-24 overflow-hidden bg-gradient-to-r from-transparent via-orange-500/10 to-transparent py-6">
        <div
          ref={marqueeRef}
          className="flex gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="text-sm font-mono uppercase tracking-widest text-orange-500/60 flex-shrink-0"
            >
              {item}
              <span className="mx-4 text-orange-500">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(TOOLS as any).map((tool: any) => (
            <motion.div
              key={tool.number}
              variants={cardVariants}
              onClick={() => setLocation('/tools')}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 hover:border-orange-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{tool.icon}</span>
                  <span
                    className="text-2xl font-bold text-orange-500"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {tool.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full font-mono group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border animation on hover */}
              <div className="absolute inset-0 border border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
