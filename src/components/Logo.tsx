export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ink = tone === "dark" ? "var(--color-ink)" : "var(--color-paper)";
  return (
    <span className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect x="1" y="5" width="32" height="24" rx="5" fill="var(--color-marigold)" />
        <circle cx="1" cy="17" r="4" fill={tone === "dark" ? "var(--color-paper)" : "var(--color-ink)"} />
        <circle cx="33" cy="17" r="4" fill={tone === "dark" ? "var(--color-paper)" : "var(--color-ink)"} />
        <path d="M9 21c4-8 12-9 16-8" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="2 3" />
        <circle cx="25" cy="13" r="2.2" fill="var(--color-ink)" />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight" style={{ color: ink }}>
        SRD Academy
      </span>
    </span>
  );
}
