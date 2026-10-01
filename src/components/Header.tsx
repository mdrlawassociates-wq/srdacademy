"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  // Remember which page the menu was opened on, so it closes after navigating.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
    setOpenedOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenedOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" aria-label="SRD Academy home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink hover:bg-mist aria-[current=page]:bg-sea-soft aria-[current=page]:text-sea"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact#enquire"
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper hover:bg-sea sm:inline-flex"
          >
            Book a free consultation
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink px-4 text-sm font-semibold text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-ink transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-ink ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-ink transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="border-t border-mist bg-paper lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <li>
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="flex min-h-12 items-center border-b border-mist font-display text-lg font-semibold text-ink aria-[current=page]:text-sea">
              Home
            </Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="flex min-h-12 items-center border-b border-mist font-display text-lg font-semibold text-ink aria-[current=page]:text-sea"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact#enquire"
              className="flex min-h-12 items-center justify-center rounded-full bg-marigold font-semibold text-ink"
            >
              Book a free consultation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
