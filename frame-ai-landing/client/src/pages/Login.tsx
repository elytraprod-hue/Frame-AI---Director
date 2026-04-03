import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp } from "@/contexts/AppContext";
import { Loader2, KeyRound } from "lucide-react";
import { HERO } from "@/../../shared/const";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isLoading } = useApp();
  const [code, setCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    const success = await login(code);
    if (success) {
      // Pequeno delay para a mensagem de sucesso aparecer
      setTimeout(() => {
        setLocation("/tools");
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, #1a0a00 0%, #000000 70%)",
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5 -z-5"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500" />
          
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
              <KeyRound className="w-8 h-8 text-orange-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {(HERO as any).tag || "Acesso Restrito"}
            </h1>
            <p className="text-gray-400 text-sm">
              Insira o código de acesso que você recebeu após o pagamento para liberar o estúdio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="code" className="text-sm font-medium text-gray-300">
                Código de Acesso
              </Label>
              <Input
                id="code"
                type="text"
                placeholder="Ex: FRAME-XYZA"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="mt-2 h-14 text-center text-xl tracking-widest font-mono bg-black/50 border-gray-700 text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors uppercase"
                disabled={isLoading}
                maxLength={10}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !code.trim() || code.length < 6}
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-black font-bold uppercase tracking-widest text-sm"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Verificando...
                </>
              ) : (
                "Acessar Estúdio"
              )}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Não tem um código? <button onClick={() => setLocation("/pricing")} className="text-orange-500 hover:underline">Veja os planos</button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
