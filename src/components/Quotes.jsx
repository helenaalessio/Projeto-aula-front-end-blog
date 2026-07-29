import { useEffect, useState } from 'react'
import { QUOTES } from '../data'

export default function Quotes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-32 md:py-48 px-6 bg-black border-y border-cream/5">
      <div className="max-w-4xl mx-auto text-center min-h-[180px] flex items-center justify-center">
        <blockquote
          key={index}
          className="lightbox-fade"
        >
          <p className="font-display italic text-3xl md:text-5xl lg:text-6xl text-cream/90 leading-tight">
            "{QUOTES[index]}"
          </p>
        </blockquote>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {QUOTES.map((_, i) => (
          <span
            key={i}
            className={`h-1 w-8 transition-colors duration-500 ${
              i === index ? 'bg-ember-500' : 'bg-cream/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
