export default function Hero() {
  return (
    <section className="relative bg-cream min-h-screen flex items-center overflow-hidden">
      {/* Subtle warm radial background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-terra-100/50 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cream-dark/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-36 md:py-0 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT: Content */}
        <div className="space-y-8">
          {/* Category label */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-terra-500" />
              <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">
                Agence Web · Coachs &amp; Créateurs
              </span>
            </div>
          </div>

          {/* Headline — serif for premium feel */}
          <div className="animate-fade-up animate-delay-100">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-warm-950 leading-[1.05] tracking-tight">
              Des sites qui{" "}
              <em className="not-italic text-terra-500">parlent</em>{" "}
              à vos clients.
            </h1>
          </div>

          <p className="text-warm-600 text-lg leading-relaxed max-w-md animate-fade-up animate-delay-200">
            Je conçois des sites vitrines sur mesure pour les{" "}
            <strong className="text-warm-900 font-semibold">coachs</strong>,{" "}
            <strong className="text-warm-900 font-semibold">consultants</strong> et{" "}
            <strong className="text-warm-900 font-semibold">créateurs de contenu</strong>{" "}
            qui veulent attirer leurs clients idéaux — livrés en 7 jours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-terra-500 hover:bg-terra-600 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-terra-500/25"
            >
              Démarrer mon projet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-warm-200 hover:border-terra-400 text-warm-700 hover:text-terra-600 font-semibold px-8 py-4 rounded-full transition-all"
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
              <div key={b.text} className="flex items-center gap-1.5 text-warm-400 text-sm">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Browser mockup */}
        <div className="hidden md:flex justify-end animate-float">
          <div className="relative w-full max-w-md">
            {/* Soft shadow/glow behind */}
            <div className="absolute inset-0 bg-terra-500/10 blur-3xl rounded-3xl scale-90 translate-y-4" />

            {/* Browser shell */}
            <div className="relative bg-warm-50 rounded-2xl overflow-hidden border border-warm-200 shadow-2xl shadow-warm-950/10">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-warm-100 border-b border-warm-200">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 bg-warm-200/60 rounded-md px-3 py-1 text-xs text-warm-400 truncate">
                  www.sophie-coaching.fr
                </div>
              </div>

              {/* Mock site content */}
              <div>
                {/* Mock hero */}
                <div className="bg-gradient-to-br from-terra-500 to-terra-700 p-8 text-white">
                  <div className="text-xs text-terra-100/70 mb-2 font-medium">Sophie Martin · Coach de vie</div>
                  <div className="text-xl font-bold mb-1 leading-tight">Révèle ta meilleure version</div>
                  <div className="text-sm text-white/60 mb-5">Coaching individuel & programme en ligne</div>
                  <div className="inline-block bg-white text-terra-600 text-xs font-semibold px-4 py-2 rounded-full">
                    Réserver un appel gratuit →
                  </div>
                </div>

                {/* Mock 3 cards */}
                <div className="p-5 grid grid-cols-3 gap-3 bg-cream">
                  {["Clarté", "Confiance", "Résultats"].map((label) => (
                    <div key={label} className="bg-white rounded-xl p-3 border border-warm-100 text-center shadow-sm">
                      <div className="w-6 h-6 bg-terra-100 rounded-lg mx-auto mb-1.5" />
                      <div className="text-xs font-semibold text-warm-800">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Mock testimonial */}
                <div className="mx-5 mb-5 bg-terra-50 rounded-xl p-4 border border-terra-100">
                  <div className="flex gap-0.5 mb-1.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#c4674a">
                        <path d="M5 1l1.2 2.4L9 4.1 6.9 6.1l.5 2.9L5 7.5 2.6 9l.5-2.9L1 4.1l2.8-.7L5 1z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-warm-700 leading-relaxed">
                    &ldquo;Sophie a changé ma vie en 3 mois de coaching.&rdquo;
                  </div>
                  <div className="text-xs text-warm-400 mt-1">— Marie L., Paris</div>
                </div>
              </div>
            </div>

            {/* Floating notification: site en ligne */}
            <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-warm-100">
              <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-sm">✓</div>
              <div>
                <div className="text-xs font-semibold text-warm-900">Site mis en ligne !</div>
                <div className="text-xs text-warm-400">Livré en 6 jours</div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 border border-warm-100">
              <div className="text-xs text-warm-400 mb-0.5">Nouveaux clients / mois</div>
              <div className="text-xl font-bold text-warm-950">+9 <span className="text-green-500 text-sm font-medium">↑ 52%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 50H1440V18C1200 50 960 0 720 18C480 36 240 0 0 18V50Z" fill="#f0e8db" />
        </svg>
      </div>
    </section>
  );
}
