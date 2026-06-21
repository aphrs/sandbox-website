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
      "Formation à la prise en main",
    ],
    excluded: ["Blog", "Réservation en ligne", "Animations avancées"],
    cta: "Choisir Starter",
    popular: false,
    bg: "bg-white",
    border: "border-slate-200",
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
    bg: "bg-indigo-600",
    border: "border-indigo-600",
  },
  {
    name: "Premium",
    price: "1 490",
    desc: "Pour les professionnels qui veulent le meilleur sans compromis.",
    features: [
      "Pages illimitées",
      "Tout du pack Pro",
      "Boutique simple (vente formation/ebook)",
      "Espace membres",
      "Intégrations CRM & emailing",
      "6 mois de support prioritaire",
      "Audit SEO complet",
      "Révisions illimitées",
    ],
    excluded: [],
    cta: "Choisir Premium",
    popular: false,
    bg: "bg-white",
    border: "border-slate-200",
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Tarifs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Transparent et sans surprise
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Paiement en plusieurs fois disponible. Devis gratuit en 24h pour les projets sur mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => {
            const isPopular = p.popular;
            return (
              <div
                key={p.name}
                className={`card-hover relative rounded-2xl border-2 ${p.border} ${p.bg} p-7 ${isPopular ? "shadow-2xl shadow-indigo-200 scale-105" : "shadow-sm"}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Le plus populaire
                  </div>
                )}

                <div className={`text-sm font-semibold mb-1 ${isPopular ? "text-indigo-200" : "text-slate-500"}`}>
                  {p.name}
                </div>
                <div className={`text-4xl font-bold mb-1 ${isPopular ? "text-white" : "text-slate-900"}`}>
                  {p.price}€
                </div>
                <div className={`text-xs mb-4 ${isPopular ? "text-indigo-200" : "text-slate-400"}`}>
                  paiement unique
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${isPopular ? "text-indigo-100" : "text-slate-500"}`}>
                  {p.desc}
                </p>

                <a
                  href="#contact"
                  className={`block text-center font-semibold text-sm px-5 py-3 rounded-full transition-all mb-6 ${
                    isPopular
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? "text-indigo-200" : "text-green-500"}`} viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L7 8.94 5.28 7.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z" />
                      </svg>
                      <span className={isPopular ? "text-indigo-100" : "text-slate-700"}>{f}</span>
                    </li>
                  ))}
                  {p.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm2.47-10.53a.75.75 0 00-1.06 0L8 6.94 6.59 5.47a.75.75 0 10-1.06 1.06L6.94 8l-1.41 1.47a.75.75 0 101.06 1.06L8 9.06l1.41 1.47a.75.75 0 101.06-1.06L9.06 8l1.41-1.47a.75.75 0 000-1.06z" />
                      </svg>
                      <span className="text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          Paiement en 2 ou 3 fois sans frais disponible. Devis personnalisé gratuit.{" "}
          <a href="#contact" className="text-indigo-600 hover:underline font-medium">
            Me contacter →
          </a>
        </p>
      </div>
    </section>
  );
}
