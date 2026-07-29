import { useState } from 'react'
import { GALLERY_IMAGES } from '../data'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="galeria" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 reveal">
        <p className="text-ember-500 tracking-[0.3em] uppercase text-xs mb-4">Galeria</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream">Imagens do filme</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(src)}
            className="reveal group relative overflow-hidden rounded-lg shadow-xl border border-cream/10 aspect-[3/4]"
          >
            <img
              src={src}
              alt={`Imagem ${i + 1} de Buffalo 66`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-cream text-xs uppercase tracking-widest border border-cream/40 px-4 py-2">
                Ver
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 lightbox-fade"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-cream text-2xl"
            onClick={() => setActive(null)}
            aria-label="Fechar"
          >
            &times;
          </button>
          <img
            src={active}
            alt="Imagem ampliada"
            className="max-h-[85vh] max-w-full rounded-lg shadow-2xl border border-cream/10"
          />
        </div>
      )}
    </section>
  )
}
