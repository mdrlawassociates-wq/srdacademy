/**
 * Single source of truth for institute details.
 *
 * Anything set to `null` has not been confirmed by SRD Academy yet. The UI
 * renders a visible placeholder for null values and structured data omits
 * them, so nothing unverified is published as fact. Fill these in before
 * launch.
 */
export const site = {
  name: "SRD Academy",
  // Canonical domain. NEXT_PUBLIC_SITE_URL can override it (used for
  // canonical URLs, sitemap and Open Graph).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://srdacademy.in").replace(/\/$/, ""),
  tagline: "Online English test preparation and study-abroad guidance",
  description:
    "SRD Academy offers online coaching for IELTS, TOEFL and PTE, and guidance for students planning to study abroad. Based in Anna Nagar West, Chennai.",

  address: {
    lines: [
      "No. 1/1, Fourth Floor, Fifth Square",
      "10th Main Road Extension, TAS Enclave",
      "Shanthi Colony, Anna Nagar West",
    ],
    street:
      "No. 1/1, Fourth Floor, Fifth Square, 10th Main Road Extension, TAS Enclave, Shanthi Colony",
    locality: "Anna Nagar West",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600040",
    country: "India",
    countryCode: "IN",
  },

  // --- To be provided by SRD Academy ---
  phone: "+91 90942 24474" as string | null,
  whatsapp: "919094224474" as string | null, // digits only, with country code
  email: "ask.srdacademy@gmail.com" as string | null,
  inPersonConfirmed: false, // set true only once in-person classes/consultations are confirmed
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
    linkedin: "https://www.linkedin.com/company/srd-academy" as string | null,
  },
} as const;

export const fullAddress = [
  ...site.address.lines,
  `${site.address.city} – ${site.address.postalCode.slice(0, 3)} ${site.address.postalCode.slice(3)}`,
  `${site.address.region}, ${site.address.country}`,
];

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.locality}, ${site.address.city} ${site.address.postalCode}`,
)}`;

export const nav = [
  { href: "/test-preparation", label: "Test preparation" },
  { href: "/study-abroad", label: "Study abroad" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
