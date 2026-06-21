const steps = [
  {
    n: "01",
    title: "Appel découverte gratuit",
    desc: "On discute de votre projet, vos objectifs, votre cible et votre identité de marque. 30 minutes suffisent pour tout clarifier.",
    detail: "100% gratuit & sans engagement",
  },
  {
    n: "02",
    title: "Proposition & Maquette",
    desc: "Je vous soumets une proposition personnalisée avec design et fonctionnalités. Vous validez avant que je commence à coder.",
    detail: "Validation avant développement",
  },
  {
    n: "03",
    title: "Développement & Révisions",
    desc: "Je code votre site en 5 à 7 jours. Vous suivez l'avancement et pouvez demander 2 rounds de révisions inclus.",
    detail: "2 révisions incluses",
  },
  {
    n: "04",
    title: "Livraison & Formation",
    desc: "Votre site est en ligne ! Je vous forme à le gérer vous-même et reste disponible pour le support post-livraison.",
    detail: "Formation & support inclus",
  },
];

export default function Process() {
  return (
    <section className="bg-warm-950 py-24 px-6 relative overflow-hidden">
      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-terra-700/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-500/60" />
            <span className="text-terra-400 text-xs font-semibold tracking-[0.15em] uppercase">Comment ça marche</span>
            <div className="h-px w-10 bg-terra-500/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-50 mb-5">
            Votre site en 4 étapes simples
          </h2>
          <p className="text-warm-400 text-lg max-w-2xl mx-auto">
            Un processus clair et sans surprise. Vous savez toujours où on en est.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="card-hover bg-warm-900/40 border border-warm-800/60 rounded-2xl p-7 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-terra-500 text-white font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                {s.n}
              </div>
              <div>
                <h3 className="font-serif text-xl text-warm-50 mb-2">{s.title}</h3>
                <p className="text-warm-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-block text-xs font-medium text-terra-400 bg-terra-500/10 border border-terra-500/20 px-3 py-1 rounded-full">
                  {s.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-terra-500/20"
          >
            Réserver mon appel gratuit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
