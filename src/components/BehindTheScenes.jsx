import { TIMELINE } from '../data'

export default function BehindTheScenes() {
  return (
    <section id="bastidores" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20 reveal">
        <p className="text-ember-500 tracking-[0.3em] uppercase text-xs mb-4">Bastidores</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream">Linha do tempo</h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream/15 md:-translate-x-1/2" />

        {TIMELINE.map((item, i) => (
          <div
            key={i}
            className={`relative flex items-center mb-16 reveal ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-ember-500 -translate-x-1/2 ring-4 ring-ink z-10" />

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:[&]:text-right">
              <div className={`glass rounded-lg overflow-hidden ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} md:max-w-sm`}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
                  <p className="text-cream/65 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
