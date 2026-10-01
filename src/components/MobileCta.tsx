import Link from "next/link";
import { site } from "@/lib/site";

/** Persistent enquiry bar for phones, where most enquiries start. */
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        {site.phone && (
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-ink font-semibold text-ink"
          >
            Call us
          </a>
        )}
        <Link
          href="/contact#enquire"
          className="inline-flex min-h-12 flex-[2] items-center justify-center rounded-full bg-marigold font-semibold text-ink"
        >
          Book a free consultation
        </Link>
      </div>
    </div>
  );
}
