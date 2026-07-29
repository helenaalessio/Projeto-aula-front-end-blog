import { TRIVIA } from '../data'

export default function Trivia() {
  return (
    <section className="py-24 md:py-32 px-6 bg-wine-900/20 border-y border-cream/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-ember-500 tracking-[0.3em] uppercase text-xs mb-4">Curiosidades</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">Saberes do filme</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRIVIA.map((item, i) => (
            <div
              key={i}
              className="glass rounded-lg p-8 reveal hover:border-ember-500/40 transition-colors duration-500"
            >
              <span className="font-display text-3xl text-ember-500/60 block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-cream/80 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
