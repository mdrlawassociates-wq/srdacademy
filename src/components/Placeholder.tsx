/**
 * Marks information SRD Academy still needs to provide. Rendered visibly so
 * nobody mistakes a gap for a real detail. Remove usages as details arrive.
 */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md border border-dashed border-marigold-deep bg-marigold px-2 py-0.5 text-sm font-medium text-ink">
      {children}
    </span>
  );
}
