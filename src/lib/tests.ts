/**
 * Test-preparation content. Descriptions are deliberately general: test
 * formats, timings and fees change, so the pages point students to the
 * official test owner for current details instead of repeating them here.
 */
export type TestSlug = "ielts" | "toefl" | "pte";

export type TestPrep = {
  slug: TestSlug;
  name: string;
  fullName: string;
  owner: string;
  officialUrl: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  whoFor: string[];
  skills: { name: string; detail: string }[];
  howWeHelp: string[];
  faqs: { q: string; a: string }[];
};

export const tests: TestPrep[] = [
  {
    slug: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    owner: "the IELTS partners (British Council, IDP and Cambridge English)",
    officialUrl: "https://ielts.org",
    seoTitle: "IELTS Coaching Online – Anna Nagar, Chennai",
    seoDescription:
      "Online IELTS preparation from SRD Academy, Anna Nagar West, Chennai. Structured practice in listening, reading, writing and speaking. Enquire about schedules.",
    summary:
      "IELTS is widely used by universities, employers and immigration bodies to check English ability. It comes in Academic and General Training versions, so the first step is confirming which one you need.",
    whoFor: [
      "Students applying to universities or colleges that accept IELTS",
      "Applicants who have been asked for IELTS Academic or General Training",
      "Anyone who wants a structured plan before booking a test date",
    ],
    skills: [
      { name: "Listening", detail: "Following conversations and talks, and answering as you listen." },
      { name: "Reading", detail: "Working through longer passages accurately within the time allowed." },
      { name: "Writing", detail: "Planning and writing clear responses to set tasks." },
      { name: "Speaking", detail: "A face-to-face style conversation with an examiner." },
    ],
    howWeHelp: [
      "An initial conversation to understand your goal and the version of the test you need",
      "Online classes with practice across all four skills",
      "Feedback on writing and speaking practice",
      "Timed practice so test conditions feel familiar",
    ],
    faqs: [
      {
        q: "Should I take IELTS Academic or General Training?",
        a: "It depends on what the institution or authority you are applying to asks for. Check their published requirements, and we can talk it through with you.",
      },
      {
        q: "Are IELTS classes online?",
        a: "Yes. Our classes are mostly online, so you can join from home. Ask us about the current schedule and format when you enquire.",
      },
    ],
  },
  {
    slug: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    owner: "ETS",
    officialUrl: "https://www.ets.org/toefl.html",
    seoTitle: "TOEFL Preparation Online – Chennai",
    seoDescription:
      "Online TOEFL preparation from SRD Academy in Chennai. Practise reading, listening, speaking and writing for an academic English test. Enquire about schedules.",
    summary:
      "TOEFL is an academic English test run by ETS and accepted by many universities. It is taken on a computer and focuses on English used in academic settings.",
    whoFor: [
      "Students applying to programmes that accept TOEFL",
      "Learners who are comfortable with, or want practice in, computer-based testing",
      "Anyone wanting to build academic English for lectures and reading",
    ],
    skills: [
      { name: "Reading", detail: "Understanding academic-style texts and answering questions on them." },
      { name: "Listening", detail: "Following lectures and campus conversations." },
      { name: "Speaking", detail: "Giving spoken responses that are recorded for scoring." },
      { name: "Writing", detail: "Writing clear, organised responses in English." },
    ],
    howWeHelp: [
      "A starting conversation about your target programmes and timeline",
      "Online classes covering all four skills",
      "Practice with computer-based question styles",
      "Feedback on spoken and written responses",
    ],
    faqs: [
      {
        q: "Has the TOEFL format changed recently?",
        a: "ETS has updated the TOEFL more than once. Always check ets.org for the current structure before you book, and we will plan practice around the version you will take.",
      },
      {
        q: "Can I prepare for TOEFL online?",
        a: "Yes. Our classes are mostly online. Ask us about the schedule and format that is currently available.",
      },
    ],
  },
  {
    slug: "pte",
    name: "PTE",
    fullName: "Pearson Test of English",
    owner: "Pearson",
    officialUrl: "https://www.pearsonpte.com",
    seoTitle: "PTE Preparation Online – Chennai",
    seoDescription:
      "Online PTE preparation from SRD Academy in Chennai. Practise the integrated, computer-based question types across speaking, writing, reading and listening.",
    summary:
      "PTE is a computer-based English test from Pearson. Several question types test more than one skill at a time, so practising with the format matters.",
    whoFor: [
      "Students and applicants whose chosen institution accepts PTE",
      "Learners who prefer a fully computer-based test",
      "Anyone wanting to get used to integrated question types",
    ],
    skills: [
      { name: "Speaking and writing", detail: "Responding aloud and in writing to on-screen prompts." },
      { name: "Reading", detail: "Working with short texts and on-screen question formats." },
      { name: "Listening", detail: "Responding to audio clips, sometimes in writing or speech." },
    ],
    howWeHelp: [
      "A first conversation to confirm PTE is accepted for your plans",
      "Online practice with each question type",
      "Feedback on speaking clarity and written responses",
      "Timed sessions to build pace and confidence",
    ],
    faqs: [
      {
        q: "Is PTE accepted everywhere?",
        a: "No single test is accepted everywhere. Check your institution’s requirements first; we are happy to help you look.",
      },
      {
        q: "Are PTE classes online?",
        a: "Yes, mostly online. Enquire to hear about the current schedule.",
      },
    ],
  },
];

export function getTest(slug: string) {
  return tests.find((t) => t.slug === slug);
}
