"use client";

import { useId, useRef, useState } from "react";
import { formatOptions, interestOptions, type Interest } from "@/lib/enquiry";
import { site } from "@/lib/site";

const fieldClass =
  "mt-2 block w-full min-h-12 rounded-xl border-2 border-mist bg-white px-4 py-3 text-base text-text placeholder:text-muted/70 focus:border-sea focus:outline-none aria-[invalid=true]:border-danger";

type Errors = Partial<Record<"name" | "interest", string>>;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-danger">
      {message}
    </p>
  );
}

function labelFor<T extends readonly { value: string; label: string }[]>(opts: T, value: string) {
  return opts.find((o) => o.value === value)?.label;
}

function buildMessage(name: string, interest: string, format: string, message: string) {
  return [
    "Hello SRD Academy, I’d like to book a free consultation.",
    "",
    `Name: ${name}`,
    `Interested in: ${labelFor(interestOptions, interest)}`,
    ...(format ? [`Preferred class format: ${labelFor(formatOptions, format)}`] : []),
    ...(message ? ["", message] : []),
  ].join("\n");
}

/**
 * Enquiry form that hands off to WhatsApp. Nothing is sent to or stored by
 * the website: the visitor's own WhatsApp opens with the message ready, and
 * they choose whether to send it.
 */
export function EnquiryForm({
  defaultInterest,
  heading = "Book a free consultation",
  tone = "light",
}: {
  defaultInterest?: Interest;
  heading?: string;
  tone?: "light" | "card";
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  if (!site.whatsapp) return null;
  const whatsapp = site.whatsapp;
  const tel = site.phone?.replace(/\s/g, "");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const interest = String(data.get("interest") ?? "");
    const format = String(data.get("format") ?? "");
    const message = String(data.get("message") ?? "").trim().slice(0, 1000);

    const next: Errors = {};
    if (name.length < 2) next.name = "Enter your name.";
    if (!interestOptions.some((o) => o.value === interest)) next.interest = "Choose what you would like help with.";
    setErrors(next);
    if (Object.keys(next).length) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus());
      return;
    }

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(buildMessage(name, interest, format, message))}`;
    setWaUrl(url);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    // Pop-up blocked (some in-app browsers): go there directly instead.
    if (!win) window.location.href = url;
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const wrapper =
    tone === "card"
      ? "rounded-[var(--radius-ticket)] bg-white p-5 shadow-[0_1px_0_0_var(--color-mist),0_20px_40px_-24px_rgba(14,42,54,0.35)] sm:p-8"
      : "";

  return (
    <div className={wrapper}>
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
      <p className="mt-2 font-serif text-muted">
        Fill this in and we’ll open WhatsApp with your message ready to send.
      </p>

      {waUrl && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className="mt-5 rounded-xl border-2 border-sea bg-sea-soft p-4 text-ink outline-none"
        >
          <p className="font-semibold">WhatsApp should now be open with your message. Press send there to reach us.</p>
          <p className="mt-1 text-sm">
            Didn’t open?{" "}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
              Open WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
            {tel && (
              <>
                , or call <a href={`tel:${tel}`} className="whitespace-nowrap font-semibold underline underline-offset-2">{site.phone}</a>
              </>
            )}
            .
          </p>
        </div>
      )}

      <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
        <div>
          <label htmlFor={id("name")} className="font-semibold text-ink">Your name</label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? id("name-err") : undefined}
            className={fieldClass}
          />
          <FieldError id={id("name-err")} message={errors.name} />
        </div>

        <fieldset aria-describedby={errors.interest ? id("interest-err") : undefined}>
          <legend className="font-semibold text-ink">What would you like help with?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {interestOptions.map((o, i) => (
              <label
                key={o.value}
                className="relative inline-flex min-h-11 cursor-pointer items-center rounded-full border-2 border-mist bg-white px-4 text-[0.95rem] font-medium text-ink has-[:checked]:border-sea has-[:checked]:bg-sea has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold"
              >
                <input
                  type="radio"
                  name="interest"
                  value={o.value}
                  required
                  defaultChecked={defaultInterest === o.value}
                  aria-invalid={errors.interest && i === 0 ? true : undefined}
                  className="sr-only"
                />
                {o.label}
              </label>
            ))}
          </div>
          <FieldError id={id("interest-err")} message={errors.interest} />
        </fieldset>

        <fieldset>
          <legend className="font-semibold text-ink">
            Preferred class format <span className="font-normal text-muted">(optional)</span>
          </legend>
          <p className="text-sm text-muted">Our classes are mostly online. Ask us about anything else.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {formatOptions.map((o) => (
              <label
                key={o.value}
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full border-2 border-mist bg-white px-4 text-[0.95rem] font-medium text-ink has-[:checked]:border-ink has-[:checked]:bg-sea-soft has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold"
              >
                <input type="radio" name="format" value={o.value} className="sr-only" />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={id("message")} className="font-semibold text-ink">
            Anything else? <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={3}
            maxLength={1000}
            placeholder="For example, your target test date or the course you are considering"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-marigold px-6 font-semibold text-ink shadow-[0_2px_0_0_var(--color-marigold-deep)] hover:bg-marigold-deep sm:w-auto"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
          </svg>
          Continue in WhatsApp
        </button>

        <p className="text-xs leading-relaxed text-muted">
          Nothing is sent until you press send in WhatsApp. WhatsApp is run by Meta and its own privacy policy applies.
          Prefer not to use WhatsApp?{" "}
          {tel && (
            <>
              Call <a href={`tel:${tel}`} className="whitespace-nowrap text-sea underline underline-offset-2">{site.phone}</a>
            </>
          )}
          {site.email && (
            <>
              {tel ? " or email " : "Email "}
              <a href={`mailto:${site.email}`} className="text-sea underline underline-offset-2">{site.email}</a>
            </>
          )}
          . Enquiring doesn’t commit you to anything, and it isn’t a guarantee of a place, score, admission or visa.
        </p>
      </form>
    </div>
  );
}
