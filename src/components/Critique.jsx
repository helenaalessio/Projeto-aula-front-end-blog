import { CRITIQUE_SECTIONS, GALLERY_IMAGES } from '../data'

export default function Critique() {
  return (
    <section id="critica" className="py-24 md:py-32 px-6 bg-wine-900/15 border-y border-cream/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-ember-500 tracking-[0.3em] uppercase text-xs mb-4">Crítica</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">Leitura editorial</h2>
          <p className="text-cream/50 mt-4 text-sm">Um olhar aprofundado sobre a obra de Vincent Gallo</p>
        </div>

        {CRITIQUE_SECTIONS.map((sec, i) => (
          <div key={sec.title} className="reveal">
            <article className="mb-14">
              <h3 className="font-display text-2xl md:text-3xl text-ember-500 mb-4">{sec.title}</h3>
              <p className="text-cream/75 leading-relaxed text-lg">{sec.text}</p>
            </article>

            {i < CRITIQUE_SECTIONS.length - 1 && i % 2 === 1 && (
              <figure className="my-14 reveal">
                <img
                  src={GALLERY_IMAGES[i % GALLERY_IMAGES.length]}
                  alt="Cena de Buffalo 66"
                  loading="lazy"
                  className="w-full rounded-lg shadow-xl border border-cream/10"
                />
              </figure>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
