import { cn } from "@/lib/cn";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  pulse?: boolean;
};

export default function Button({
  variant = "primary",
  pulse = false,
  className,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition active:scale-[0.99]";

  const styles =
    variant === "primary"
      ? "bg-[#f5c400] text-black hover:brightness-110"
      : "bg-white/10 text-white hover:bg-white/15 border border-white/10";

  return (
    <a className={cn(base, styles, pulse && "animate-pulse", className)} {...props} />
  );
}
