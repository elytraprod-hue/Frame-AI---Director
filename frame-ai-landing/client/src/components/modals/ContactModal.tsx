/**
 * Contact Modal Component
 * Modal para formulário de contato/demo
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/forms/ContactForm";
import { useApp } from "@/contexts/AppContext";

interface ContactModalProps {
  type?: "contact" | "demo" | "support";
  title?: string;
  description?: string;
}

export function ContactModal({
  type = "contact",
  title = "Entre em Contato",
  description = "Preencha o formulário abaixo e entraremos em contato em breve.",
}: ContactModalProps) {
  const { modals, closeModal } = useApp();
  const isOpen = modals.contact;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal("contact")}>
      <DialogContent className="sm:max-w-md bg-gray-900 border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">{title}</DialogTitle>
          <DialogDescription className="text-gray-400">{description}</DialogDescription>
        </DialogHeader>
        <ContactForm type={type} onSuccess={() => closeModal("contact")} />
      </DialogContent>
    </Dialog>
  );
}
