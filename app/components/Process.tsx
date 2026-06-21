const steps = [
  {
    n: "01",
    title: "Appel découverte gratuit",
    desc: "On discute de votre projet, vos objectifs, votre cible et votre identité de marque. 30 minutes suffisent pour tout clarifier.",
    detail: "100% gratuit & sans engagement",
    color: "bg-indigo-600",
  },
  {
    n: "02",
    title: "Proposition & Maquette",
    desc: "Je vous soumets une proposition personnalisée avec design et fonctionnalités. Vous validez avant que je commence.",
    detail: "Validation avant développement",
    color: "bg-violet-600",
  },
  {
    n: "03",
    title: "Développement & Révisions",
    desc: "Je code votre site en 5 à 7 jours. Vous suivez l'avancement et pouvez demander 2 rounds de révisions inclus.",
    detail: "2 révisions incluses",
    color: "bg-purple-600",
  },
  {
    n: "04",
    title: "Livraison & Formation",
    desc: "Votre site est en ligne ! Je vous forme à le gérer vous-même et reste disponible pour le support post-livraison.",
    detail: "Formation & support inclus",
    color: "bg-fuchsia-600",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-900/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Votre site en 4 étapes simples
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un processus clair et sans surprise. Vous savez toujours où on en est.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="card-hover relative bg-slate-900 border border-slate-800 rounded-2xl p-7 flex gap-5 group"
            >
              <div className={`w-12 h-12 rounded-xl ${s.color} text-white font-bold text-sm flex items-center justify-center shrink-0`}>
                {s.n}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-block text-xs font-medium text-indigo-400 bg-indigo-900/40 px-3 py-1 rounded-full">
                  {s.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-7 py-3.5 rounded-full transition-all"
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
