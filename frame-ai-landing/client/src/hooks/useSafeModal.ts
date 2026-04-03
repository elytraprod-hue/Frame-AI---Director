import { useCallback, useRef } from "react";

/**
 * Safety hook to prevent rapid modal state changes
 * which can cause DOM insertion errors with Radix UI
 */
export function useSafeModal(initialState = false) {
  const isOpenRef = useRef(initialState);
  const pendingStateRef = useRef(initialState);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setOpen = useCallback((open: boolean) => {
    pendingStateRef.current = open;

    // Clear any pending transitions
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }

    // Debounce state changes to prevent rapid DOM mutations
    transitionRef.current = setTimeout(() => {
      isOpenRef.current = pendingStateRef.current;
      // This would trigger a re-render through context
    }, 0);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const openModal = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return {
    isOpen: isOpenRef.current,
    openModal,
    closeModal,
    setOpen,
  };
}
