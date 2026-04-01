import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix local asset paths with Vite's base URL (needed for GitHub Pages sub-path deploys). */
export function assetUrl(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL || "/";
  if (path.startsWith("/")) {
    return base.replace(/\/$/, "") + path;
  }
  return base + path;
}
