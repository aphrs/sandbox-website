const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Site Vitrine Clé en Main",
    desc: "Pour lancer votre présence en ligne rapidement avec un site pro, efficace et sur mesure.",
    features: [
      "Design personnalisé à votre image",
      "5 pages incluses (Accueil, À propos, Services, Témoignages, Contact)",
      "Formulaire de contact + intégration email",
      "100% responsive mobile",
      "SEO de base optimisé",
      "Hébergement & domaine conseillés",
    ],
    badge: "Le plus populaire",
    badgeColor: "bg-indigo-100 text-indigo-700",
    accent: "border-indigo-200 shadow-indigo-100",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Site Premium Sur Mesure",
    desc: "Pour les professionnels qui veulent un site haut de gamme avec des fonctionnalités avancées.",
    features: [
      "Tout du pack Clé en Main",
      "Jusqu'à 10 pages",
      "Blog intégré",
      "Système de réservation en ligne",
      "Pop-up lead generation",
      "Animations & interactions avancées",
      "Suivi analytics complet",
    ],
    badge: "Recommandé",
    badgeColor: "bg-violet-100 text-violet-700",
    accent: "border-violet-200 shadow-violet-100",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Refonte & Optimisation",
    desc: "Votre site existe mais ne convertit pas ? Je le modernise et l'optimise pour obtenir des résultats.",
    features: [
      "Audit de votre site actuel",
      "Nouveau design moderne",
      "Optimisation de la vitesse",
      "Amélioration SEO",
      "Intégration des outils manquants",
      "Formation à la prise en main",
    ],
    badge: "Sur devis",
    badgeColor: "bg-amber-100 text-amber-700",
    accent: "border-amber-200 shadow-amber-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Ce que je propose
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Des services pensés pour votre croissance
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Chaque projet est unique. Je m&apos;adapte à votre budget, vos objectifs et votre calendrier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card-hover relative flex flex-col rounded-2xl border-2 ${s.accent} p-7 shadow-lg`}
            >
              <div className="inline-flex w-12 h-12 items-center justify-center bg-slate-50 rounded-xl text-slate-700 mb-5">
                {s.icon}
              </div>
              <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${s.badgeColor}`}>
                {s.badge}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2.5 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L7 8.94 5.28 7.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z" />
                    </svg>
                    {f}
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
