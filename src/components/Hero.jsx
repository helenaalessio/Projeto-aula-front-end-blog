import { HERO_IMAGE } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 text-center px-6 reveal">
        <p className="font-body text-cream/60 tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
          Vincent Gallo · 1998
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-none mb-6">
          Buffalo <span className="text-ember-500 italic">'66</span>
        </h1>
        <p className="font-body text-cream/75 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Um clássico cult dirigido por Vincent Gallo.
        </p>
        <a
          href="#sobre"
          className="inline-block border border-cream/30 px-8 py-3 text-cream text-sm tracking-widest uppercase hover:bg-cream hover:text-ink transition-all duration-500"
        >
          Explorar
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" stroke="currentColor" className="text-cream/50">
          <path d="M10 2v28M2 22l8 8 8-8" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
