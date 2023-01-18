export interface ToastProps {
    successMessage: string
    errorMessage: string
    loadingMessage: string
    promise: Promise<unknown>
  }
  