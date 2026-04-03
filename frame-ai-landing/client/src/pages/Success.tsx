/**
 * Success Page
 * Página exibida após conclusão de compra ou ação bem-sucedida
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CheckCircle, Mail, Download } from "lucide-react";

export default function Success() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <CheckCircle size={80} className="text-orange-500 mx-auto" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Tudo Pronto!
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-8 max-w-xl mx-auto"
        >
          Sua compra foi processada com sucesso. Você agora tem acesso a todas as ferramentas FRAME.AI.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Email Confirmation */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-lg">
            <Mail className="text-orange-500 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold text-white mb-2">Email de Confirmação</h3>
            <p className="text-gray-400 text-sm">
              Enviamos um email com os detalhes da sua compra e instruções de acesso.
            </p>
          </div>

          {/* Get Started */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-lg">
            <Download className="text-orange-500 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold text-white mb-2">Comece Agora</h3>
            <p className="text-gray-400 text-sm">
              Acesse o dashboard e comece a usar as ferramentas imediatamente.
            </p>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Próximos Passos
          </h2>
          <ol className="text-left max-w-md mx-auto space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">1.</span>
              <span className="text-gray-300">Verifique seu email para confirmar a conta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">2.</span>
              <span className="text-gray-300">Faça login no dashboard com suas credenciais</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">3.</span>
              <span className="text-gray-300">Explore as ferramentas disponíveis no seu plano</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold">4.</span>
              <span className="text-gray-300">Agende uma demo com nosso time se precisar de ajuda</span>
            </li>
          </ol>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => setLocation("/")}
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8"
          >
            Voltar ao Home
          </Button>
          <Button
            onClick={() => setLocation("/tools")}
            variant="outline"
            className="border-gray-700 hover:border-orange-500 text-gray-300 hover:text-white px-8"
          >
            Explorar Ferramentas
          </Button>
        </motion.div>

        {/* Support */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-sm mt-12"
        >
          Tem dúvidas? Entre em contato com nosso suporte em{" "}
          <a href="mailto:support@frame.ai" className="text-orange-500 hover:text-orange-400">
            support@frame.ai
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
