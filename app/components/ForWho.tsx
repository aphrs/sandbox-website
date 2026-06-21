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
  },
];

export default function ForWho() {
  return (
    <section className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-400" />
            <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">Pour qui ?</span>
            <div className="h-px w-10 bg-terra-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-950 mb-5">
            Ce site est fait pour vous si…
          </h2>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Vous avez une expertise précieuse, mais votre présence en ligne ne le reflète pas encore. C&apos;est exactement là qu&apos;on intervient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="card-hover bg-warm-50 rounded-2xl p-8 border border-warm-200/60"
            >
              <div className="text-4xl mb-5">{a.emoji}</div>
              <h3 className="font-serif text-2xl text-warm-950 mb-1">{a.title}</h3>
              <p className="text-warm-400 text-sm mb-6">{a.desc}</p>
              <ul className="space-y-3">
                {a.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-warm-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-terra-500 mt-1.5 shrink-0" />
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
