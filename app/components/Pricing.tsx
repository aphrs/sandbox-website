const plans = [
  {
    name: "Starter",
    price: "490",
    desc: "Pour lancer votre présence en ligne avec un site pro et efficace.",
    features: [
      "5 pages sur mesure",
      "Design responsive mobile",
      "Formulaire de contact",
      "SEO de base",
      "1 mois de support",
      "Formation prise en main",
    ],
    excluded: ["Blog", "Réservation en ligne", "Animations avancées"],
    cta: "Choisir Starter",
    popular: false,
  },
  {
    name: "Pro",
    price: "890",
    desc: "La solution complète pour attirer et convertir vos clients idéaux.",
    features: [
      "8 pages sur mesure",
      "Design premium + animations",
      "Blog intégré",
      "Système de réservation",
      "Pop-up lead generation",
      "3 mois de support",
      "Analytics avancé",
      "2 rounds de révisions",
    ],
    excluded: [],
    cta: "Choisir Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: "1 490",
    desc: "Pour les professionnels qui veulent le meilleur sans compromis.",
    features: [
      "Pages illimitées",
      "Tout du pack Pro",
      "Boutique (formation/ebook)",
      "Espace membres",
      "Intégrations CRM & emailing",
      "6 mois de support prioritaire",
      "Audit SEO complet",
      "Révisions illimitées",
    ],
    excluded: [],
    cta: "Choisir Premium",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-400" />
            <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">Tarifs</span>
            <div className="h-px w-10 bg-terra-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-950 mb-5">
            Transparent et sans surprise
          </h2>
          <p className="text-warm-600 text-lg max-w-xl mx-auto">
            Paiement en plusieurs fois disponible. Devis gratuit en 24h pour les projets sur mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => {
            const pop = p.popular;
            return (
              <div
                key={p.name}
                className={`card-hover relative rounded-2xl p-7 border-2 ${
                  pop
                    ? "bg-warm-950 border-warm-950 shadow-2xl shadow-warm-950/20 scale-105"
                    : "bg-warm-50 border-warm-200/60 shadow-sm"
                }`}
              >
                {pop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terra-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Le plus populaire
                  </div>
                )}

                <div className={`text-sm font-semibold mb-1 ${pop ? "text-warm-400" : "text-warm-500"}`}>
                  {p.name}
                </div>
                <div className={`font-serif text-4xl font-semibold mb-1 ${pop ? "text-warm-50" : "text-warm-950"}`}>
                  {p.price}€
                </div>
                <div className={`text-xs mb-5 ${pop ? "text-warm-600" : "text-warm-400"}`}>
                  paiement unique
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${pop ? "text-warm-400" : "text-warm-500"}`}>
                  {p.desc}
                </p>

                <a
                  href="#contact"
                  className={`block text-center font-semibold text-sm px-5 py-3 rounded-full transition-all mb-6 ${
                    pop
                      ? "bg-terra-500 hover:bg-terra-400 text-white"
                      : "bg-terra-500 hover:bg-terra-600 text-white"
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-terra-500" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L7 8.94 5.28 7.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z" />
                      </svg>
                      <span className={pop ? "text-warm-300" : "text-warm-700"}>{f}</span>
                    </li>
                  ))}
                  {p.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm opacity-35">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-warm-400" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm2.47-10.53a.75.75 0 00-1.06 0L8 6.94 6.59 5.47a.75.75 0 10-1.06 1.06L6.94 8l-1.41 1.47a.75.75 0 101.06 1.06L8 9.06l1.41 1.47a.75.75 0 101.06-1.06L9.06 8l1.41-1.47a.75.75 0 000-1.06z" />
                      </svg>
                      <span className="text-warm-400">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-warm-500 text-sm mt-10">
          Paiement en 2 ou 3 fois sans frais disponible.{" "}
          <a href="#contact" className="text-terra-500 hover:underline font-medium">
            Me contacter pour un devis →
          </a>
        </p>
      </div>
    </section>
  );
}
