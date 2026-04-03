/**
 * Checkout Modal Component
 * Modal para formulário de checkout/pagamento
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { useApp } from "@/contexts/AppContext";

export function CheckoutModal() {
  const { modals, closeModal } = useApp();
  const isOpen = modals.checkout;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal("checkout")}>
      <DialogContent className="sm:max-w-2xl bg-gray-900 border border-gray-800 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Finalizar Compra</DialogTitle>
          <DialogDescription className="text-gray-400">
            Preencha os dados abaixo para completar sua compra. Seu pagamento é seguro e criptografado.
          </DialogDescription>
        </DialogHeader>
        <CheckoutForm onSuccess={() => closeModal("checkout")} />
      </DialogContent>
    </Dialog>
  );
}
