const benefits = [
  {
    title: "Learn from home",
    text: "No commute to fit around school, college or work. Join class from a quiet corner with a headset.",
  },
  {
    title: "Join from wherever you are",
    text: "Live in another part of Chennai, Tamil Nadu or beyond? Online classes travel with you.",
  },
  {
    title: "Ask about schedule and format",
    text: "Tell us when you’re free and how you like to learn. We’ll share what’s currently available.",
  },
];

export function OnlineBenefits({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid gap-px overflow-hidden rounded-[var(--radius-ticket)] bg-mist sm:grid-cols-3 ${className}`}>
      {benefits.map((b) => (
        <li key={b.title} className="bg-white p-6">
          <h3 className="font-display text-xl font-bold text-ink">{b.title}</h3>
          <p className="mt-2 font-serif leading-relaxed text-muted">{b.text}</p>
        </li>
      ))}
    </ul>
  );
}
