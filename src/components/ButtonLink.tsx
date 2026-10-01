import Link from "next/link";

type Variant = "primary" | "secondary" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-marigold text-ink hover:bg-marigold-deep shadow-[0_2px_0_0_var(--color-marigold-deep)]",
  secondary: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
  light: "border-2 border-paper/70 text-paper hover:bg-paper hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-center sm:whitespace-nowrap py-3 text-base font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
