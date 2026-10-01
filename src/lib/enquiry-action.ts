"use server";

import {
  formatOptions,
  interestOptions,
  type EnquiryState,
  type EnquiryValues,
} from "./enquiry";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{8,18}$/;

function read(formData: FormData): EnquiryValues {
  const s = (k: string) => String(formData.get(k) ?? "").trim();
  return {
    name: s("name").slice(0, 100),
    phone: s("phone").slice(0, 30),
    email: s("email").slice(0, 160),
    interest: s("interest"),
    format: s("format"),
    message: s("message").slice(0, 2000),
    consent: formData.get("consent") === "on",
  };
}

function validate(v: EnquiryValues) {
  const errors: Partial<Record<keyof EnquiryValues | "contact", string>> = {};
  if (v.name.length < 2) errors.name = "Enter your name.";
  if (!v.phone && !v.email) errors.contact = "Add a phone number or an email address so we can reply.";
  if (v.phone && !PHONE.test(v.phone)) errors.phone = "Enter a phone number using digits, e.g. +91 98xxx xxxxx.";
  if (v.email && !EMAIL.test(v.email)) errors.email = "Enter an email address like name@example.com.";
  if (!interestOptions.some((o) => o.value === v.interest)) errors.interest = "Choose what you would like help with.";
  if (v.format && !formatOptions.some((o) => o.value === v.format)) errors.format = "Choose a class format, or leave it blank.";
  if (v.message.length > 1500) errors.message = "Keep your message under 1,500 characters.";
  if (!v.consent) errors.consent = "Tick the box so we can contact you about your enquiry.";
  return errors;
}

function label<T extends readonly { value: string; label: string }[]>(opts: T, value: string) {
  return opts.find((o) => o.value === value)?.label ?? "Not given";
}

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("company") ?? "") !== "") return { status: "sent", name: "" };

  const values = read(formData);
  const errors = validate(values);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "SRD Academy website <onboarding@resend.dev>";

  // Delivery is not configured: be honest with the visitor rather than
  // pretending the enquiry was received.
  if (!apiKey || !to) {
    console.warn("[enquiry] RESEND_API_KEY or ENQUIRY_TO_EMAIL is not set; enquiry not delivered.");
    return { status: "not-connected", values };
  }

  const text = [
    "New website enquiry",
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone || "Not given"}`,
    `Email: ${values.email || "Not given"}`,
    `Interested in: ${label(interestOptions, values.interest)}`,
    `Preferred class format: ${values.format ? label(formatOptions, values.format) : "Not given"}`,
    "",
    "Message:",
    values.message || "(none)",
    "",
    `Consent to be contacted: yes (${new Date().toISOString()})`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        subject: `Enquiry: ${label(interestOptions, values.interest)} from ${values.name}`,
        text,
        ...(values.email ? { reply_to: values.email } : {}),
      }),
    });
    if (!res.ok) {
      console.error("[enquiry] Resend responded", res.status, await res.text());
      return { status: "failed", values };
    }
  } catch (err) {
    console.error("[enquiry] delivery error", err);
    return { status: "failed", values };
  }

  return { status: "sent", name: values.name.split(" ")[0] };
}
