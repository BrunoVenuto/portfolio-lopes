import { cn } from "@/lib/cn";

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold text-white", className)}>
      {children}
    </h2>
  );
}
