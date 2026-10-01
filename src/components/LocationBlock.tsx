import { fullAddress, mapsUrl, site } from "@/lib/site";
import { Placeholder } from "./Placeholder";

export function LocationBlock() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <address className="not-italic font-serif text-lg leading-relaxed text-text">
          <strong className="block font-display text-xl text-ink">{site.name}</strong>
          {fullAddress.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </address>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-12 items-center rounded-full border-2 border-ink px-5 font-semibold text-ink hover:bg-ink hover:text-paper"
        >
          Get directions in Google Maps<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="rounded-[var(--radius-ticket)] bg-sea-soft p-6">
        <h3 className="font-display text-lg font-bold text-ink">Planning to visit?</h3>
        <p className="mt-2 font-serif leading-relaxed text-muted">
          Most of our classes and conversations happen online.{" "}
          {site.inPersonConfirmed
            ? "In-person consultations are available; please book ahead."
            : "If you’d like to meet in person, contact us first so we can confirm what’s possible."}
        </p>
        <p className="mt-4 text-sm text-muted">
          Opening hours: {site.openingHours ?? <Placeholder>To be confirmed</Placeholder>}
        </p>
      </div>
    </div>
  );
}
