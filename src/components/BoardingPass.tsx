/**
 * The hero's signature element: a boarding pass that frames test
 * preparation as the first leg of a student's journey. Purely illustrative;
 * it names no destination or institution.
 */
export function BoardingPass() {
  return (
    <figure
      aria-label="Illustration: a boarding pass from Anna Nagar West, Chennai to your next campus, via IELTS, TOEFL or PTE, online"
      className="pass-enter relative mx-auto w-full max-w-md -rotate-[1.5deg]"
      style={{ ["--notch-bg" as string]: "var(--color-ink)" }}
    >
      <div className="overflow-hidden rounded-[var(--radius-ticket)] bg-paper text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between bg-marigold px-6 py-3">
          <span className="font-display text-sm font-bold">SRD Academy</span>
          <span className="font-display text-sm font-semibold">Student pass</span>
        </div>

        <div className="px-6 pb-6 pt-5">
          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
            <div>
              <p className="text-xs text-muted">From</p>
              <p className="font-display text-3xl font-extrabold leading-none tracking-tight">MAA</p>
              <p className="mt-1 text-sm leading-snug">Anna Nagar West, Chennai</p>
            </div>
            <svg width="86" height="40" viewBox="0 0 86 40" aria-hidden="true" className="mb-5 text-sea">
              <path className="route-line" d="M4 34 C 26 2, 60 2, 82 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="4" cy="34" r="3.5" fill="currentColor" />
              <path d="M76 22 l9 9 -12 1z" fill="var(--color-marigold-deep)" />
            </svg>
            <div className="text-right">
              <p className="text-xs text-muted">To</p>
              <p className="font-display text-3xl font-extrabold leading-none tracking-tight">You</p>
              <p className="mt-1 text-sm leading-snug">Your next campus</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-mist pt-4">
            <div>
              <p className="text-xs text-muted">Via</p>
              <p className="font-display font-bold">IELTS, TOEFL or PTE</p>
            </div>
            <div>
              <p className="text-xs text-muted">Class</p>
              <p className="font-display font-bold">Online, from home</p>
            </div>
          </div>
        </div>

        <div className="perforation mx-0" />

        <div className="flex items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-xs text-muted">Boarding</p>
            <p className="font-display font-bold">When you’re ready</p>
          </div>
          {/* Decorative barcode */}
          <svg width="96" height="34" viewBox="0 0 96 34" aria-hidden="true">
            {[2,1,3,1,2,2,1,3,1,1,2,3,1,2,1,1,3,2,1,2,1,3,2,1].reduce<{ x: number; els: React.ReactNode[] }>(
              (acc, w, i) => {
                if (i % 2 === 0) acc.els.push(<rect key={i} x={acc.x} y="0" width={w * 1.6} height="34" fill="var(--color-ink)" />);
                acc.x += w * 2;
                return acc;
              },
              { x: 0, els: [] },
            ).els}
          </svg>
        </div>
      </div>
    </figure>
  );
}
