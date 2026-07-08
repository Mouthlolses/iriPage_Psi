import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}


export function handleScheduleClick(
  number:string,
  message:string
) {
  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}