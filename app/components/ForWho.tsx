const audiences = [
  {
    emoji: "🎯",
    title: "Coachs & Consultants",
    desc: "Business coach, coach de vie, nutritionniste, thérapeute...",
    points: [
      "Présentez votre méthode avec clarté",
      "Collectez des leads qualifiés 24h/24",
      "Intégration agenda & prise de RDV",
      "Crédibilisez votre expertise",
    ],
    color: "from-indigo-50 to-indigo-100/50",
    border: "border-indigo-100",
    accent: "text-indigo-600",
    dot: "bg-indigo-500",
  },
  {
    emoji: "🎬",
    title: "Créateurs de contenu",
    desc: "YouTubeur, podcasteur, auteur, influenceur...",
    points: [
      "Centralisez tous vos contenus",
      "Monétisez : formations, ebooks, merch",
      "Page liens (bio link) sur mesure",
      "Développez votre communauté",
    ],
    color: "from-violet-50 to-violet-100/50",
    border: "border-violet-100",
    accent: "text-violet-600",
    dot: "bg-violet-500",
  },
  {
    emoji: "💡",
    title: "Freelances & Experts",
    desc: "Rédacteur, graphiste, formateur, speaker...",
    points: [
      "Portfolio qui impressionne",
      "Formulaire de contact optimisé",
      "Témoignages & preuves sociales",
      "Référencement local & national",
    ],
    color: "from-amber-50 to-amber-100/50",
    border: "border-amber-100",
    accent: "text-amber-600",
    dot: "bg-amber-500",
  },
];

export default function ForWho() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Pour qui ?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ce site est fait pour vous si…
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Vous avez une expertise précieuse, mais votre présence en ligne ne le reflète pas encore. C'est exactement là qu'on intervient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className={`card-hover bg-gradient-to-br ${a.color} rounded-2xl p-7 border ${a.border}`}
            >
              <div className="text-4xl mb-4">{a.emoji}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{a.title}</h3>
              <p className="text-slate-500 text-sm mb-5">{a.desc}</p>
              <ul className="space-y-2.5">
                {a.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className={`w-1.5 h-1.5 rounded-full ${a.dot} mt-1.5 shrink-0`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
