import { NAVIGATION } from "@/../../shared/const";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useApp } from "@/contexts/AppContext";
import { LogOut } from "lucide-react";

/**
 * Navigation Component
 * Design: Cinematográfico com tipografia técnica (JetBrains Mono)
 * Posicionamento: Fixed top, mix-blend-mode para efeito visual
 */
export default function Navigation() {
  const [location, setLocation] = useLocation();
  const { isAuthenticated, logout } = useApp();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setLocation(href);
    }
  };

  const getLinks = () => {
    if (isAuthenticated) {
      return [
        { label: "Studio", href: "/studio" },
        { label: "Workflow", href: "/workflow" },
        { label: "Tools", href: "/tools" },
      ];
    }
    return [
      { label: "Ferramentas", href: "#tools" },
      { label: "Preços", href: "#pricing" },
      { label: "Login", href: "/login" },
    ];
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference"
    >
      {/* Logo */}
      <button
        onClick={() => setLocation("/")}
        className="text-2xl font-bold tracking-widest text-white hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        FRAME<span className="text-orange-500">.</span>AI
      </button>

      {/* Links */}
      <div className="flex gap-8 items-center">
        {getLinks().map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer bg-none border-none"
          >
            {link.label}
          </button>
        ))}
        {isAuthenticated && (
          <button
            onClick={() => {
              logout();
              setLocation("/");
            }}
            title="Sair da Conta"
            className="text-gray-400 hover:text-red-500 transition-colors ml-4"
          >
            <LogOut size={18} />
          </button>
        )}
      </div>
    </motion.nav>
  );
}
