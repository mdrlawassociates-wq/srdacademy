// Options for the WhatsApp enquiry form.
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
