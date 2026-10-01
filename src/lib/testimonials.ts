/**
 * Student and parent testimonials.
 *
 * Add only real testimonials, with the person's written permission to
 * publish their words and name. Don't edit the meaning of a quote, and
 * don't attach scores, admissions or visa outcomes unless the person has
 * confirmed them and agreed to share them.
 *
 * While this list is empty, the section is hidden on the live site and
 * shows a placeholder locally and on preview deployments.
 *
 * Example:
 * {
 *   quote: "The speaking practice sessions helped me feel calmer on test day.",
 *   name: "Priya R.",
 *   context: "IELTS student, 2026",
 *   service: "ielts",
 * },
 */
export type Testimonial = {
  quote: string;
  name: string; // as the person agreed to be named, e.g. first name + initial
  context?: string; // e.g. "IELTS student, 2026" or "Parent of a study-abroad student"
  service?: "ielts" | "toefl" | "pte" | "study-abroad";
};

export const testimonials: Testimonial[] = [];
