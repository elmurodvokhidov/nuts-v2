import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function findProductByTitle(data: Product[], num: number) {
  const regex = new RegExp(`\\b${num}\\s*-?\\s*oyna\\b|\\boyna\\s*-?\\s*${num}\\b`, 'i');
  return data.find(product => regex.test(product.title));
}