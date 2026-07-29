import { NAV_LINKS } from '../data'

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 border-t border-cream/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h3 className="font-display text-3xl text-cream mb-6">
            Buffalo <span className="text-ember-500 italic">'66</span>
          </h3>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 mb-10">
            {['Instagram', 'Twitter', 'Letterboxd'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="text-cream/40 hover:text-ember-500 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <p className="text-cream/35 text-xs text-center max-w-2xl mx-auto leading-relaxed">
          Site desenvolvido como homenagem ao filme Buffalo '66. Todas as imagens pertencem aos seus respectivos proprietários e são utilizadas apenas para fins informativos.
        </p>
      </div>
    </footer>
  )
}
