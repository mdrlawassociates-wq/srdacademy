export function ShareLinks({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { name: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { name: "X", href: `https://x.com/intent/post?url=${u}&text=${t}` },
    { name: "Email", href: `mailto:?subject=${t}&body=${u}` },
  ];
  return (
    <div>
      <h2 className="font-display text-base font-bold text-ink">Share this article</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              target={l.name === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-mist bg-white px-4 text-sm font-semibold text-ink hover:border-ink"
            >
              {l.name}
              {l.name !== "Email" && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
