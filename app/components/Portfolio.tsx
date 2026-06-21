const projects = [
  {
    name: "Sophie Martin",
    niche: "Coach de vie",
    desc: "Site vitrine avec réservation et page programme coaching.",
    tags: ["Coaching", "Réservation", "Blog"],
    gradient: "from-rose-300 to-terra-500",
    accent: "bg-terra-50 border-terra-100",
  },
  {
    name: "Thomas Lefebvre",
    niche: "Créateur YouTube · 85k abos",
    desc: "Hub central pour ses vidéos, formations et bio link.",
    tags: ["Contenu", "Formation", "Boutique"],
    gradient: "from-amber-400 to-orange-600",
    accent: "bg-amber-50 border-amber-100",
  },
  {
    name: "Amélie Rousseau",
    niche: "Coach nutrition",
    desc: "Blog, calculateur et programme personnalisé intégrés.",
    tags: ["Nutrition", "Blog", "Outil"],
    gradient: "from-emerald-400 to-teal-600",
    accent: "bg-teal-50 border-teal-100",
  },
  {
    name: "Lucas Bernard",
    niche: "Consultant marketing",
    desc: "Portfolio premium avec études de cas et services.",
    tags: ["Consulting", "Portfolio", "SEO"],
    gradient: "from-terra-400 to-terra-700",
    accent: "bg-terra-50 border-terra-100",
  },
  {
    name: "Camille Dubois",
    niche: "Podcasteuse",
    desc: "Player podcast intégré, newsletter et espace boutique.",
    tags: ["Podcast", "Newsletter", "Boutique"],
    gradient: "from-violet-400 to-purple-700",
    accent: "bg-violet-50 border-violet-100",
  },
  {
    name: "Pierre Moreau",
    niche: "Business Coach",
    desc: "Tunnel de vente, masterclass gratuite et espace membres.",
    tags: ["Business", "Masterclass", "Membres"],
    gradient: "from-amber-500 to-terra-600",
    accent: "bg-amber-50 border-amber-100",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-400" />
            <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">Réalisations</span>
            <div className="h-px w-10 bg-terra-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-950 mb-5">
            Des sites qui font la différence
          </h2>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto">
            Chaque projet est pensé pour refléter l&apos;univers unique de mon client et convertir les visiteurs en prospects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="card-hover bg-warm-50 rounded-2xl overflow-hidden border border-warm-200/60 group"
            >
              {/* Mock preview */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} p-4`}>
                <div className="bg-white/95 rounded-xl h-full p-3 shadow-lg">
                  <div className="flex gap-1 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className={`h-10 rounded-lg ${p.accent} mb-2 border`} />
                  <div className="grid grid-cols-3 gap-1.5">
                    {[1,2,3].map(i => (
                      <div key={i} className={`${p.accent} rounded-lg h-8 border`} />
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 bg-warm-100 rounded w-full" />
                  <div className="mt-1 h-1.5 bg-warm-100 rounded w-3/4" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-warm-950">{p.name}</h3>
                    <p className="text-xs text-warm-400">{p.niche}</p>
                  </div>
                  <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-warm-200">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#c4674a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-warm-600 mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-warm-500 bg-cream border border-warm-200 px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
