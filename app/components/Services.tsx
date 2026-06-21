const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Site Vitrine Clé en Main",
    desc: "Pour lancer votre présence en ligne rapidement avec un site pro, efficace et sur mesure.",
    badge: "Le plus populaire",
    features: [
      "Design personnalisé à votre image",
      "5 pages (Accueil, À propos, Services, Témoignages, Contact)",
      "Formulaire de contact intégré",
      "100% responsive mobile",
      "SEO de base optimisé",
      "Formation à la prise en main",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Site Premium Sur Mesure",
    desc: "Pour les professionnels qui veulent un site haut de gamme avec des fonctionnalités avancées.",
    badge: "Recommandé",
    features: [
      "Tout du pack Clé en Main",
      "Jusqu'à 10 pages",
      "Blog intégré",
      "Système de réservation en ligne",
      "Pop-up lead generation",
      "Animations & interactions avancées",
      "Suivi analytics complet",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Refonte & Optimisation",
    desc: "Votre site existe mais ne convertit pas ? Je le modernise et l'optimise pour obtenir des résultats.",
    badge: "Sur devis",
    features: [
      "Audit complet de votre site",
      "Nouveau design moderne",
      "Optimisation vitesse & performance",
      "Amélioration SEO",
      "Intégration des outils manquants",
      "Formation à la prise en main",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-400" />
            <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">Services</span>
            <div className="h-px w-10 bg-terra-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-950 mb-5">
            Des services pensés pour votre croissance
          </h2>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto">
            Chaque projet est unique. Je m&apos;adapte à votre budget, vos objectifs et votre calendrier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover relative flex flex-col bg-warm-50 rounded-2xl border border-warm-200/60 p-7 shadow-sm"
            >
              <div className="inline-flex w-11 h-11 items-center justify-center bg-terra-100 rounded-xl text-terra-600 mb-5">
                {s.icon}
              </div>
              <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-terra-50 text-terra-600 border border-terra-100 mb-4">
                {s.badge}
              </span>
              <h3 className="font-serif text-2xl text-warm-950 mb-2">{s.title}</h3>
              <p className="text-warm-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2.5 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-warm-700">
                    <svg className="w-4 h-4 text-terra-500 mt-0.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
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
