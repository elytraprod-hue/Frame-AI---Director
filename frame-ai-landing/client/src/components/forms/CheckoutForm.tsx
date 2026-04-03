import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckoutFormData } from "@/lib/types";
import { useApp } from "@/contexts/AppContext";
import { Loader2, Copy, CheckCircle2, QrCode } from "lucide-react";
import { toast } from "sonner";

interface CheckoutFormProps {
  onSuccess?: () => void;
}

export function CheckoutForm({ onSuccess }: CheckoutFormProps) {
  const { submitCheckout, isLoading, selectedPlan } = useApp();
  const [step, setStep] = useState<"form" | "pix" | "success">("form");
  const [accessCode, setAccessCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      planId: selectedPlan || "profissional",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setFormData(data);
    setStep("pix");
  };

  const simulatePayment = async () => {
    if (!formData) return;
    try {
      const code = await submitCheckout(formData);
      setAccessCode(code);
      setStep("success");
    } catch (error) {
      setStep("form");
    }
  };

  useEffect(() => {
    if (step === "pix") {
      // Auto-simular pagamento depois de alguns segundos
      const timer = setTimeout(() => {
        simulatePayment();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, formData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accessCode);
    setCopied(true);
    toast.success("Código copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  if (step === "success") {
    return (
      <div className="space-y-6 text-center py-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Pagamento Confirmado!</h3>
          <p className="text-gray-400">Aqui está o seu código de acesso exclusivo.</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <p className="text-xs uppercase tracking-widest text-orange-500 font-mono mb-2">Código de Acesso</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl font-mono text-white tracking-widest">{accessCode}</span>
            <button 
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white"
            >
              {copied ? <CheckCircle2 size={24} className="text-green-500" /> : <Copy size={24} />}
            </button>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-400 mb-4">Guarde este código. Você precisará dele para fazer login no estúdio.</p>
          <Button
            onClick={() => {
              onSuccess?.();
              window.location.href = "/login";
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
          >
            Ir para o Login
          </Button>
        </div>
      </div>
    );
  }

  if (step === "pix") {
    return (
      <div className="space-y-8 text-center py-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Pagamento via PIX</h3>
          <p className="text-gray-400 text-sm">Escaneie o código abaixo com o app do seu banco ou use a função Copia e Cola.</p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-xl relative overflow-hidden group">
            {/* Mock QR Code Pattern */}
            <div className="w-48 h-48 bg-gray-100 flex items-center justify-center relative">
              <QrCode className="w-32 h-32 text-gray-800" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full font-mono text-xs text-gray-400 hover:text-white">
            00020126580014br.gov.bcb.pix0136...
            <Copy size={14} className="ml-2" />
          </Button>

          <Button
            onClick={simulatePayment}
            disabled={isLoading}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin text-orange-500" />
            ) : null}
            Simular Pagamento Aprovado
          </Button>
          <p className="text-xs text-gray-500">O pagamento será simulado automaticamente em 5s no ambiente local.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Plan Selection */}
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono mb-2">Plano Selecionado</p>
        <p className="text-lg font-bold text-orange-500">{selectedPlan?.toUpperCase() || "PROFISSIONAL"}</p>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-white uppercase tracking-widest">Informações Pessoais</h3>

        <div>
          <Label htmlFor="fullName" className="text-sm font-medium">
            Nome Completo *
          </Label>
          <Input
            id="fullName"
            placeholder="Seu nome completo"
            {...register("fullName", { required: "Nome é obrigatório" })}
            className="mt-1"
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            className="mt-1"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Telefone *
            </Label>
            <Input
              id="phone"
              placeholder="(11) 99999-9999"
              {...register("phone", { required: "Telefone é obrigatório" })}
              className="mt-1"
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium">
              Empresa
            </Label>
            <Input
              id="company"
              placeholder="Sua empresa"
              {...register("company")}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg flex items-center justify-between">
        <span className="text-orange-500 font-medium text-sm">Método de Pagamento</span>
        <span className="text-white font-bold inline-flex items-center gap-2">
          PIX
        </span>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3"
      >
        Gerar PIX
      </Button>

      {/* Security Note */}
      <p className="text-xs text-gray-500 text-center">
        Seus dados são processados de forma segura. Acesso imediato após o pagamento.
      </p>
    </form>
  );
}
