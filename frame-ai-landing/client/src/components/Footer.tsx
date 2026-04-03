import { FOOTER_LINKS, SITE_CONFIG } from "@/../../shared/const";
import { motion } from "framer-motion";

/**
 * Footer Component
 * Design: Simples e elegante com links organizados em colunas
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="/"
              className="text-2xl font-bold tracking-widest text-white hover:text-orange-500 transition-colors mb-4 inline-block"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              FRAME<span className="text-orange-500">.</span>AI
            </a>
            <p className="text-gray-400 text-sm font-light max-w-sm">
              A agência inteligente do filmmaker moderno. Ferramentas IA para roteiro, callsheet, decupagem, orçamento e muito mais.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-8"
          >
            {Object.entries(FOOTER_LINKS).map(([key, section]: any) => (
              <div key={key}>
                <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link: any) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
        >
          <div>© {currentYear} FRAME.AI — Todos os direitos reservados.</div>
          <div>Feito por filmmakers, para filmmakers.</div>
        </motion.div>
      </div>
    </footer>
  );
}
