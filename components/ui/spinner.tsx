import { Loader } from "lucide-react";
import { cn } from "@/lib/utils"; // если используешь shadcn шаблон

export function Spinner({ className }: { className?: string }) {
  return (
    <Loader className={cn("h-5 w-5 animate-spin text-white", className)} />
  );
}