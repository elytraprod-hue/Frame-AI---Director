/**
 * Contact Form Component
 * Formulário para contato, demo ou suporte
 */

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ContactFormData } from "@/lib/types";
import { useApp } from "@/contexts/AppContext";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
  type?: "contact" | "demo" | "support";
  onSuccess?: () => void;
}

export function ContactForm({ type = "contact", onSuccess }: ContactFormProps) {
  const { submitContact, isLoading } = useApp();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    defaultValues: {
      type,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContact(data);
      reset();
      onSuccess?.();
    } catch (error) {
      // Erro já é tratado pelo context
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-medium">
          Nome Completo *
        </Label>
        <Input
          id="name"
          placeholder="Seu nome"
          {...register("name", { required: "Nome é obrigatório" })}
          className="mt-1"
          disabled={isLoading}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
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
          disabled={isLoading}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium">
          Telefone
        </Label>
        <Input
          id="phone"
          placeholder="(11) 99999-9999"
          {...register("phone")}
          className="mt-1"
          disabled={isLoading}
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Mensagem *
        </Label>
        <Textarea
          id="message"
          placeholder="Conte-nos mais sobre sua necessidade..."
          {...register("message", { required: "Mensagem é obrigatória" })}
          className="mt-1 min-h-24"
          disabled={isLoading}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </Button>
    </form>
  );
}
