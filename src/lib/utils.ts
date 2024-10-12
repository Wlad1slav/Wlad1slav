import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const https = (url: string) => `https://${url}`;
export const mailto = (email: string) => `mailto:${email}`;
