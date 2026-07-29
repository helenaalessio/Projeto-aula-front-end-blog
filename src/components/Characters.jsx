import { CHARACTERS } from '../data'

export default function Characters() {
  return (
    <section id="personagens" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-ember-500 tracking-[0.3em] uppercase text-xs mb-4">Personagens</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream">Almas em cena</h2>
      </div>

      <div className="space-y-6">
        {CHARACTERS.map((char) => (
          <article
            key={char.name}
            className="glass rounded-lg overflow-hidden flex flex-col sm:flex-row reveal hover:shadow-2xl hover:border-ember-500/30 transition-all duration-500"
          >
            <div className="sm:w-56 shrink-0 overflow-hidden">
              <img
                src={char.img}
                alt={char.name}
                loading="lazy"
                className="w-full h-full object-cover aspect-square sm:aspect-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="font-display text-2xl text-cream mb-3">{char.name}</h3>
              <p className="text-cream/70 leading-relaxed">{char.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
