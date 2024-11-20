import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ...existing code...
resolve: {
  // Removed fallback configurations
}
// ...existing code...