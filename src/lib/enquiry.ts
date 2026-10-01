// Shared between the server action and the form UI.
export const interestOptions = [
  { value: "ielts", label: "IELTS" },
  { value: "toefl", label: "TOEFL" },
  { value: "pte", label: "PTE" },
  { value: "study-abroad", label: "Study-abroad guidance" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const formatOptions = [
  { value: "online", label: "Online" },
  { value: "in-person", label: "In person, if available" },
  { value: "no-preference", label: "No preference" },
] as const;

export type Interest = (typeof interestOptions)[number]["value"];

export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  format: string;
  message: string;
  consent: boolean;
};

export type EnquiryState =
  | { status: "idle" }
  | { status: "invalid"; errors: Partial<Record<keyof EnquiryValues | "contact", string>>; values: EnquiryValues }
  | { status: "sent"; name: string }
  | { status: "not-connected"; values: EnquiryValues }
  | { status: "failed"; values: EnquiryValues };
