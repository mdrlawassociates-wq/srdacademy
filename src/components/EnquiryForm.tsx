"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef } from "react";
import { submitEnquiry } from "@/lib/enquiry-action";
import {
  formatOptions,
  interestOptions,
  type EnquiryState,
  type EnquiryValues,
  type Interest,
} from "@/lib/enquiry";
import { site } from "@/lib/site";

const empty: EnquiryValues = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  format: "",
  message: "",
  consent: false,
};

const fieldClass =
  "mt-2 block w-full min-h-12 rounded-xl border-2 border-mist bg-white px-4 py-3 text-base text-text placeholder:text-muted/70 focus:border-sea focus:outline-none aria-[invalid=true]:border-danger";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-danger">
      {message}
    </p>
  );
}

export function EnquiryForm({
  defaultInterest,
  heading = "Book a free consultation",
  tone = "light",
}: {
  defaultInterest?: Interest;
  heading?: string;
  tone?: "light" | "card";
}) {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const values = "values" in state ? state.values : { ...empty, interest: defaultInterest ?? "" };
  const errors = state.status === "invalid" ? state.errors : {};

  useEffect(() => {
    if (state.status === "invalid") {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
    } else if (state.status !== "idle") {
      statusRef.current?.focus();
    }
  }, [state]);

  const wrapper =
    tone === "card"
      ? "rounded-[var(--radius-ticket)] bg-white p-5 shadow-[0_1px_0_0_var(--color-mist),0_20px_40px_-24px_rgba(14,42,54,0.35)] sm:p-8"
      : "";

  if (state.status === "sent") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className={`${wrapper} outline-none`}>
        <h2 className="font-display text-2xl font-bold text-ink">
          Thank you{state.name ? `, ${state.name}` : ""}. Your enquiry has been sent.
        </h2>
        <p className="mt-3 font-serif leading-relaxed text-muted">
          Someone from SRD Academy will get back to you using the details you shared. Meanwhile, you might find our{" "}
          <Link href="/blog" className="text-sea underline underline-offset-4">guides</Link> useful.
        </p>
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
      <p className="mt-2 font-serif text-muted">
        Tell us a little about what you need. It takes about a minute.
      </p>

      {(state.status === "not-connected" || state.status === "failed") && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 rounded-xl border-2 border-marigold-deep bg-marigold/15 p-4 text-ink outline-none"
        >
          <p className="font-semibold">
            {state.status === "not-connected"
              ? "Online enquiries aren’t switched on yet, so this message was not sent."
              : "Your enquiry couldn’t be sent just now. Please try again in a few minutes."}
          </p>
          <p className="mt-1 text-sm">
            {site.phone ? (
              <>Please call us on <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="underline">{site.phone}</a>{site.email && <> or email <a href={`mailto:${site.email}`} className="underline">{site.email}</a></>}.</>
            ) : site.email ? (
              <>Please email us at <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.</>
            ) : (
              <>Please contact SRD Academy directly. Your details are still filled in below.</>
            )}
          </p>
        </div>
      )}

      <form ref={formRef} action={action} noValidate className="mt-6 space-y-5">
        {/* Honeypot for bots. Hidden from people and assistive tech. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div>
          <label htmlFor={id("name")} className="font-semibold text-ink">Your name</label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? id("name-err") : undefined}
            className={fieldClass}
          />
          <FieldError id={id("name-err")} message={errors.name} />
        </div>

        <fieldset aria-describedby={`${id("contact-hint")}${errors.contact ? ` ${id("contact-err")}` : ""}`}>
          <legend className="font-semibold text-ink">How can we reach you?</legend>
          <p id={id("contact-hint")} className="text-sm text-muted">Phone or email. One is enough.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={id("phone")} className="mt-3 block text-sm font-medium text-ink">Phone or WhatsApp</label>
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                defaultValue={values.phone}
                aria-invalid={errors.phone || errors.contact ? true : undefined}
                aria-describedby={errors.phone ? id("phone-err") : undefined}
                className={fieldClass}
              />
              <FieldError id={id("phone-err")} message={errors.phone} />
            </div>
            <div>
              <label htmlFor={id("email")} className="mt-3 block text-sm font-medium text-ink">Email</label>
              <input
                id={id("email")}
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                defaultValue={values.email}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? id("email-err") : undefined}
                className={fieldClass}
              />
              <FieldError id={id("email-err")} message={errors.email} />
            </div>
          </div>
          <FieldError id={id("contact-err")} message={errors.contact} />
        </fieldset>

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
                  defaultChecked={values.interest === o.value}
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
                <input type="radio" name="format" value={o.value} defaultChecked={values.format === o.value} className="sr-only" />
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
            maxLength={1500}
            defaultValue={values.message}
            placeholder="For example, your target test date or the course you are considering"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? id("message-err") : undefined}
            className={`${fieldClass} resize-y`}
          />
          <FieldError id={id("message-err")} message={errors.message} />
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-text">
            <input
              type="checkbox"
              name="consent"
              required
              defaultChecked={values.consent}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? id("consent-err") : undefined}
              className="mt-0.5 size-5 shrink-0 accent-sea"
            />
            <span>
              SRD Academy may contact me by phone, WhatsApp or email about this enquiry. I have read the{" "}
              <Link href="/privacy" className="text-sea underline underline-offset-2">privacy notice</Link>.
            </span>
          </label>
          <FieldError id={id("consent-err")} message={errors.consent} />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-marigold px-6 font-semibold text-ink shadow-[0_2px_0_0_var(--color-marigold-deep)] hover:bg-marigold-deep disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-xs leading-relaxed text-muted">
          Sending an enquiry doesn’t commit you to anything, and it isn’t a guarantee of a place, score, admission or visa.
        </p>
      </form>
    </div>
  );
}
