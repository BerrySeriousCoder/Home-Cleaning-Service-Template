import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-[600px] mx-auto">{subtitle}</p>
      )}
    </div>
  );
}