export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full animate-fade-up">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            Livraison en 7 jours garantie
          </div>

          <div className="animate-fade-up animate-delay-100">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Votre site vitrine,{" "}
              <span className="gradient-text">conçu pour convaincre.</span>
            </h1>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-lg animate-fade-up animate-delay-200">
            Je crée des sites web professionnels sur mesure pour les{" "}
            <strong className="text-slate-200">coachs</strong>,{" "}
            <strong className="text-slate-200">consultants</strong> et{" "}
            <strong className="text-slate-200">créateurs de contenu</strong>{" "}
            qui veulent attirer leurs clients idéaux — sans se battre avec des outils complexes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              Démarrer mon projet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all"
            >
              Voir mes réalisations
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 pt-2 animate-fade-up animate-delay-300">
            {[
              { icon: "⭐", text: "4.9/5 satisfaction" },
              { icon: "🚀", text: "50+ sites livrés" },
              { icon: "🔒", text: "Satisfait ou remboursé" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-1.5 text-slate-500 text-sm">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Browser mockup */}
        <div className="hidden md:block animate-float">
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-3xl" />

            {/* Browser window */}
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900 border-b border-slate-700/60">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-3 flex-1 bg-slate-700/60 rounded-md px-3 py-1 text-xs text-slate-400">
                  www.mon-super-site.fr
                </div>
              </div>

              {/* Mock site content */}
              <div className="bg-white p-0">
                {/* Mock hero */}
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white">
                  <div className="w-16 h-2 bg-white/40 rounded mb-3" />
                  <div className="w-40 h-5 bg-white/90 rounded mb-2" />
                  <div className="w-32 h-3 bg-white/50 rounded mb-6" />
                  <div className="w-24 h-8 bg-white rounded-full" />
                </div>
                {/* Mock content cards */}
                <div className="p-6 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="w-6 h-6 bg-indigo-100 rounded-lg mb-2" />
                      <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
                      <div className="w-3/4 h-2 bg-slate-100 rounded" />
                    </div>
                  ))}
                </div>
                {/* Mock testimonial */}
                <div className="mx-6 mb-6 bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#fbbf24">
                        <path d="M5 1l1.2 2.4L9 4.1 6.9 6.1l.5 2.9L5 7.5 2.6 9l.5-2.9L1 4.1l2.8-.7L5 1z" />
                      </svg>
                    ))}
                  </div>
                  <div className="w-full h-2 bg-indigo-200/60 rounded mb-1.5" />
                  <div className="w-2/3 h-2 bg-indigo-100 rounded" />
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">✓</div>
              <div>
                <div className="text-xs font-semibold text-slate-800">Site mis en ligne !</div>
                <div className="text-xs text-slate-500">Il y a 2 minutes</div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100">
              <div className="text-xs text-slate-500 mb-0.5">Nouveaux clients ce mois</div>
              <div className="text-xl font-bold text-slate-900">+12 <span className="text-green-500 text-sm font-medium">↑ 48%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60H1440V20C1200 60 960 0 720 20C480 40 240 0 0 20V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
