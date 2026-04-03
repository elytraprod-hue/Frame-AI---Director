/**
 * Contact Page
 * Página de contato com formulário
 */

import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
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
            ENTRE EM CONTATO
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem dúvidas? Nosso time está pronto para ajudar. Entre em contato conosco.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-lg">
              <Mail className="text-orange-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:contato@frame.ai" className="text-gray-400 hover:text-orange-500 transition-colors">
                contato@frame.ai
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-lg">
              <Phone className="text-orange-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Telefone</h3>
              <a href="tel:+5511999999999" className="text-gray-400 hover:text-orange-500 transition-colors">
                +55 (11) 99999-9999
              </a>
            </div>

            {/* Address */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-lg">
              <MapPin className="text-orange-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Endereço</h3>
              <p className="text-gray-400">
                São Paulo, SP<br />
                Brasil
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Envie uma Mensagem
            </h2>
            <ContactForm type="contact" />
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PERGUNTAS FREQUENTES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Qual é o tempo de resposta?",
                answer: "Respondemos todas as mensagens em até 24 horas úteis.",
              },
              {
                question: "Vocês oferecem suporte técnico?",
                answer: "Sim, oferecemos suporte técnico 24/7 para todos os planos.",
              },
              {
                question: "Posso agendar uma demo?",
                answer: "Claro! Você pode agendar uma demo diretamente no site.",
              },
              {
                question: "Como funciona o período de teste?",
                answer: "O período de teste é de 14 dias com acesso completo a todas as ferramentas.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
