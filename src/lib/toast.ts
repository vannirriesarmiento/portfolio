export type ToastVariant = "success" | "deleted" | "error" | "info";

export interface ToastOptions {
    message: string;
    variant?: ToastVariant;
    icon?: string;
    duration?: number;
}

export function showToast(options: ToastOptions) {
    if (typeof document === "undefined") return;

    document.dispatchEvent(
        new CustomEvent<ToastOptions>("app:toast", { detail: options }),
    );
}
