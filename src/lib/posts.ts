/**
 * Blog content.
 *
 * Every starter article is a DRAFT. Drafts render with a visible review
 * banner, are marked noindex and are left out of the sitemap. Before
 * publishing: check each item in `verify`, set a real author, then set
 * `draft: false`.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type Category = { slug: string; name: string; description: string };

export const categories: Category[] = [
  { slug: "ielts", name: "IELTS", description: "Planning and practice for the IELTS test." },
  { slug: "toefl", name: "TOEFL", description: "Understanding and preparing for the TOEFL." },
  { slug: "pte", name: "PTE", description: "Getting ready for the computer-based PTE." },
  { slug: "study-abroad", name: "Study abroad", description: "Planning applications and next steps." },
  { slug: "study-skills", name: "Study skills", description: "Habits that make online preparation work." },
];

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO date
  updated?: string;
  readingMinutes: number;
  draft: boolean;
  verify: string[];
  body: Block[];
};

const AUTHOR_PLACEHOLDER = "SRD Academy team";

export const posts: Post[] = [
  {
    slug: "ielts-academic-or-general-training",
    title: "IELTS Academic or General Training: how to tell which one you need",
    description:
      "The two IELTS versions share a format for some sections but serve different purposes. Here is how to find out which one your application asks for.",
    category: "ielts",
    author: AUTHOR_PLACEHOLDER,
    date: "2026-10-01",
    readingMinutes: 4,
    draft: true,
    verify: [
      "Confirm on ielts.org which sections differ between Academic and General Training.",
      "Confirm current test delivery options (paper, computer, online) in India.",
    ],
    body: [
      { type: "p", text: "One of the first questions students ask is which IELTS to book. The answer is rarely about which is easier; it is about what the organisation you are applying to has asked for." },
      { type: "h2", text: "Start with the requirement, not the test" },
      { type: "p", text: "Universities and colleges usually publish their English requirements on the course or admissions page. Look for the test name, the version, and any minimum scores per skill. If the page is unclear, contact the admissions office in writing so you have a record." },
      { type: "h2", text: "What is generally the same" },
      { type: "p", text: "Both versions assess listening, reading, writing and speaking. Some sections are shared between the two versions, while others are written for different purposes." },
      { type: "note", text: "Editor: add a short, verified summary of which sections are shared and which differ, citing ielts.org." },
      { type: "h2", text: "Questions to answer before you book" },
      { type: "ul", items: ["Which version does each of my target institutions ask for?", "Is there a minimum score for individual skills as well as overall?", "How recent does my test result need to be?", "Which test dates leave enough time before application deadlines?"] },
      { type: "p", text: "If you are unsure, bring your shortlist to a free consultation and we will go through the requirements together." },
    ],
  },
  {
    slug: "understanding-the-toefl",
    title: "Understanding the TOEFL before you start preparing",
    description:
      "A plain-language look at what the TOEFL measures and how to plan your preparation around the current version of the test.",
    category: "toefl",
    author: AUTHOR_PLACEHOLDER,
    date: "2026-10-01",
    readingMinutes: 4,
    draft: true,
    verify: [
      "ETS has revised the TOEFL iBT format; confirm the current section structure, timing and scoring on ets.org before publishing.",
      "Confirm which TOEFL products (e.g. iBT, Essentials) are relevant for students in India.",
    ],
    body: [
      { type: "p", text: "The TOEFL is designed to measure English used in academic settings: reading academic texts, following lectures, and speaking and writing about what you have learned." },
      { type: "h2", text: "Check the current format first" },
      { type: "p", text: "ETS has changed the TOEFL format more than once. Preparation material that is a few years old may describe a different test. Before you buy books or plan practice, read the current test description on ets.org." },
      { type: "note", text: "Editor: insert a verified summary of the current sections here, with a link to the official page." },
      { type: "h2", text: "Building a preparation plan" },
      { type: "ul", items: ["Take an untimed practice set to see where you are", "Choose a test date that leaves room for practice and, if needed, a retake", "Practise speaking into a microphone, since responses are recorded", "Read and listen to academic English every day, even briefly"] },
      { type: "p", text: "Our classes are mostly online, which suits a computer-based test well: you practise on the same kind of screen you will use on the day." },
    ],
  },
  {
    slug: "preparing-for-pte-academic",
    title: "Preparing for PTE Academic: getting comfortable with the format",
    description:
      "PTE questions often test more than one skill at once. Knowing the question types early makes practice far more useful.",
    category: "pte",
    author: AUTHOR_PLACEHOLDER,
    date: "2026-10-01",
    readingMinutes: 3,
    draft: true,
    verify: [
      "Confirm the current list of PTE Academic question types and timing on pearsonpte.com.",
      "Confirm acceptance information only from institutions' own pages; do not list countries or universities without a source.",
    ],
    body: [
      { type: "p", text: "PTE Academic is taken entirely on a computer. Many of its question types are integrated, meaning one task can count towards more than one skill." },
      { type: "h2", text: "Why the format matters" },
      { type: "p", text: "Because tasks are integrated, a weakness in one area can affect several parts of your result. Practising each question type helps you see where time and accuracy slip." },
      { type: "note", text: "Editor: add a verified list of current question types with a link to Pearson’s official guide." },
      { type: "h2", text: "Good habits for PTE practice" },
      { type: "ul", items: ["Practise speaking at a steady, natural pace", "Use a headset with a microphone, as on test day", "Review recordings of your own answers", "Keep a log of question types you find hardest"] },
    ],
  },
  {
    slug: "ielts-toefl-or-pte",
    title: "IELTS, TOEFL or PTE: choosing the right English test for your plans",
    description:
      "There is no single best English test. The right choice depends on what your institutions accept, your timeline and how you prefer to take a test.",
    category: "study-abroad",
    author: AUTHOR_PLACEHOLDER,
    date: "2026-10-01",
    readingMinutes: 5,
    draft: true,
    verify: [
      "Do not add country- or university-specific acceptance claims without linking the official source.",
      "Confirm current result-availability timelines from each test owner before adding them.",
    ],
    body: [
      { type: "p", text: "Students often hear that one test is easier than another. In practice, the better question is which tests your target institutions accept and which format suits you." },
      { type: "h2", text: "Step one: list what is accepted" },
      { type: "p", text: "Make a simple table of your shortlisted programmes and note which English tests each accepts and at what score. Use only the institutions’ own pages for this." },
      { type: "h2", text: "Step two: think about format" },
      { type: "ul", items: ["IELTS: available in more than one delivery format; the speaking test is a conversation with an examiner", "TOEFL: computer-based, focused on academic English", "PTE: computer-based, with integrated question types"] },
      { type: "h2", text: "Step three: work back from deadlines" },
      { type: "p", text: "Note each application deadline, then check how long results take to arrive for each test. Leave yourself time for a second attempt if you need one." },
      { type: "p", text: "Still unsure? A free consultation is a good place to talk it through." },
    ],
  },
  {
    slug: "starting-your-study-abroad-plan",
    title: "Starting your study-abroad plan: the questions to answer first",
    description:
      "Before applications, there are a few decisions that shape everything else. A simple framework for students and parents.",
    category: "study-abroad",
    author: AUTHOR_PLACEHOLDER,
    date: "2026-10-01",
    readingMinutes: 5,
    draft: true,
    verify: [
      "Do not add visa, fee or deadline information without an official, dated source.",
    ],
    body: [
      { type: "p", text: "Planning to study abroad can feel overwhelming because so many decisions depend on one another. It helps to answer a few questions in order." },
      { type: "h2", text: "What do you want to study, and why?" },
      { type: "p", text: "Your subject and career goals narrow down the programmes worth considering. Write down two or three reasons for each option; they will help when you write statements of purpose later." },
      { type: "h2", text: "What is your realistic budget?" },
      { type: "p", text: "Talk openly as a family about what is affordable, including living costs. Check tuition and cost-of-living estimates on each institution’s official site." },
      { type: "h2", text: "What are the entry requirements?" },
      { type: "ul", items: ["Academic qualifications and grades", "English test and minimum scores", "Documents such as transcripts and recommendation letters", "Application deadlines and intake dates"] },
      { type: "h2", text: "Where does an education consultant fit in?" },
      { type: "p", text: "A consultant can help you organise options, prepare applications and keep track of steps. Decisions on admission and visas are always made by the institutions and authorities themselves." },
    ],
  },
  {
    slug: "studying-online-for-an-english-test",
    title: "Making online test preparation work: setting up your study week",
    description:
      "Online classes let you learn from home. A few simple habits help you get the most from each session.",
    category: "study-skills",
    author: AUTHOR_PLACEHOLDER,
    date: "2026-10-01",
    readingMinutes: 3,
    draft: true,
    verify: ["Add details of SRD Academy’s actual class platform and schedule once confirmed."],
    body: [
      { type: "p", text: "Learning online means no travel time and the chance to join from wherever you are. It also means you are in charge of your own study space." },
      { type: "h2", text: "Set up a quiet corner" },
      { type: "p", text: "A table, a reliable connection and a headset with a microphone go a long way, especially for speaking practice." },
      { type: "h2", text: "Plan the week around class times" },
      { type: "ul", items: ["Block short daily slots for reading and listening", "Do writing practice soon after a class while feedback is fresh", "Record yourself speaking once or twice a week"] },
      { type: "h2", text: "Ask questions early" },
      { type: "p", text: "If something is unclear, ask during or straight after class. Small gaps are easier to close early." },
    ],
  },
];

// Drafts are visible locally and on preview deployments for review, but
// never on a Vercel production deployment.
export const showDrafts = process.env.VERCEL_ENV !== "production";

export const visiblePosts = posts.filter((p) => showDrafts || !p.draft);

export function getPost(slug: string) {
  return visiblePosts.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function relatedPosts(post: Post, limit = 3) {
  const same = visiblePosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = visiblePosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...rest].slice(0, limit);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
