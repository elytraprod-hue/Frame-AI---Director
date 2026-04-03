import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  modalName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary specifically for modal components
 * Prevents modal errors from crashing the entire application
 */
export class ModalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      `Modal Error (${this.props.modalName || "unknown"})`,
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      // Silently fail for modal errors - don't show UI feedback
      // Just return null to prevent rendering broken modal
      console.warn(
        `Modal rendering failed (${this.props.modalName}). Modal will not be displayed.`
      );
      return null;
    }

    return this.props.children;
  }
}
