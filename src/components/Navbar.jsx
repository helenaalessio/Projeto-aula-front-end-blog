import { useState } from 'react'
import { NAV_LINKS } from '../data'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Navbar() {
  const scrolled = useScrollPosition()
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-md border-b border-cream/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display text-xl tracking-wide text-cream"
          onClick={() => setOpen(false)}
        >
          Buffalo <span className="text-ember-500">'66</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cream/70 hover:text-cream transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6 bg-ink/98 border-t border-cream/10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-cream/80 hover:text-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
