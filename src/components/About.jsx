import { HERO_IMAGE } from '../data'

const INFO = [
  { label: 'Lançamento', value: '1998' },
  { label: 'Direção', value: 'Vincent Gallo' },
  { label: 'Roteiro', value: 'Vincent Gallo & Alison Bagnold' },
  { label: 'Elenco', value: 'Vincent Gallo, Christina Ricci, Anjelica Huston, Mickey Rourke' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="reveal">
          <div className="relative">
            <img
              src={HERO_IMAGE}
              alt="Cartaz de Buffalo 66"
              loading="lazy"
              className="w-full rounded-lg shadow-2xl border border-cream/10"
            />
            <div className="absolute -inset-2 border border-ember-500/20 rounded-lg -z-10" />
          </div>
        </div>

        <div className="reveal">
          <p className="text-ember-500 tracking-[0.3em] uppercase text-xs mb-4">Sobre o Filme</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-8 leading-tight">
            Uma carta de amor ao desespero
          </h2>

          <dl className="space-y-3 mb-8">
            {INFO.map((item) => (
              <div key={item.label} className="flex gap-4 border-b border-cream/10 pb-3">
                <dt className="text-cream/50 text-sm uppercase tracking-wider w-32 shrink-0">
                  {item.label}
                </dt>
                <dd className="text-cream/90 text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-5 text-cream/75 leading-relaxed">
            <p>
              <span className="text-cream font-medium">Sinopse — </span>
              Billy Brown sai da prisão disposto a se vingar do jogador de futebol que ele culpa por sua condenação. No caminho, sequestra uma jovem bailarina e a obriga a fingir ser sua esposa diante da família. O que começa como violência transforma-se, silenciosamente, em algo próximo do amor.
            </p>
            <p>
              <span className="text-cream font-medium">Recepção crítica — </span>
              Estreou em Cannes dividindo plateias. Alguns repudiaram seu narcisismo; outros reconheceram a singularidade de uma voz autoral rara. Com o tempo, o filme consolidou-se como objeto de devoção.
            </p>
            <p>
              <span className="text-cream font-medium">Legado — </span>
              Mais de duas décadas depois, Buffalo 66 permanece como um dos filmes cult mais influentes dos anos 90, referência estética e emocional para gerações de cineastas e espectadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
