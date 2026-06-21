const projects = [
  {
    title: "Sophie Martin",
    niche: "Coach de vie",
    desc: "Site vitrine avec système de réservation et page programme coaching.",
    tags: ["Coaching", "Réservation", "Blog"],
    gradient: "from-rose-400 to-pink-600",
    mockBg: "bg-pink-50",
    accent: "bg-rose-100",
  },
  {
    title: "Thomas Lefebvre",
    niche: "Créateur YouTube",
    desc: "Hub centralisé pour ses vidéos, formation et lien en bio.",
    tags: ["Création de contenu", "Formation", "Merch"],
    gradient: "from-red-500 to-orange-500",
    mockBg: "bg-orange-50",
    accent: "bg-orange-100",
  },
  {
    title: "Amélie Rousseau",
    niche: "Coach nutrition",
    desc: "Site avec blog, calculateur BMI et programme personnalisé.",
    tags: ["Nutrition", "Blog", "Outil interactif"],
    gradient: "from-emerald-400 to-teal-600",
    mockBg: "bg-teal-50",
    accent: "bg-teal-100",
  },
  {
    title: "Lucas Bernard",
    niche: "Consultant marketing",
    desc: "Portfolio premium avec études de cas et page de services.",
    tags: ["Consulting", "Portfolio", "SEO"],
    gradient: "from-indigo-500 to-violet-600",
    mockBg: "bg-indigo-50",
    accent: "bg-indigo-100",
  },
  {
    title: "Camille Dubois",
    niche: "Podcasteuse",
    desc: "Site avec player podcast intégré, newsletter et boutique.",
    tags: ["Podcast", "Newsletter", "Boutique"],
    gradient: "from-violet-500 to-purple-700",
    mockBg: "bg-violet-50",
    accent: "bg-violet-100",
  },
  {
    title: "Pierre Moreau",
    niche: "Business Coach",
    desc: "Tunnel de vente, masterclass gratuite et espace membres.",
    tags: ["Business", "Masterclass", "Membres"],
    gradient: "from-amber-400 to-orange-600",
    mockBg: "bg-amber-50",
    accent: "bg-amber-100",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Réalisations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Des sites qui font la différence
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Chaque projet est pensé pour refléter l&apos;univers unique de mon client et convertir les visiteurs en prospects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group"
            >
              {/* Mock preview */}
              <div className={`h-44 bg-gradient-to-br ${p.gradient} relative overflow-hidden p-4`}>
                {/* Fake browser chrome */}
                <div className="bg-white/95 rounded-xl h-full p-3 shadow-lg">
                  <div className="flex gap-1 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className={`h-10 rounded-lg ${p.accent} mb-2 flex items-center px-2 gap-1`}>
                    <div className="w-3/4 h-1.5 bg-slate-200 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[1,2,3].map(i => (
                      <div key={i} className={`${p.accent} rounded-lg h-8`} />
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 bg-slate-100 rounded w-full" />
                  <div className="mt-1 h-1.5 bg-slate-100 rounded w-3/4" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs text-slate-500">{p.niche}</p>
                  </div>
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
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
