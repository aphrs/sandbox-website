export default function Contact() {
  return (
    <section id="contact" className="relative bg-warm-950 py-24 px-6 overflow-hidden">
      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-terra-700/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-terra-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-terra-500/60" />
              <span className="text-terra-400 text-xs font-semibold tracking-[0.15em] uppercase">Contact</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-50 mb-5 leading-tight">
              Prêt à lancer<br />
              <em className="not-italic text-terra-400">votre site ?</em>
            </h2>
            <p className="text-warm-400 leading-relaxed mb-10">
              Répondez à quelques questions pour que je comprenne votre projet, et je vous reviens sous 24h avec une proposition personnalisée.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: "📞", title: "Appel découverte", desc: "30 min offertes pour cadrer votre projet" },
                { icon: "⚡", title: "Réponse rapide", desc: "Je réponds sous 24h, souvent bien moins" },
                { icon: "🎯", title: "Sans engagement", desc: "Devis gratuit, vous décidez ensuite" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-warm-100 font-semibold text-sm">{item.title}</div>
                    <div className="text-warm-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-warm-500 text-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <rect x="1" y="3" width="12" height="9" rx="1.5" />
                <path d="M1 4.5l6 4 6-4" />
              </svg>
              contact@elance-studio.fr
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-warm-900/50 border border-warm-800/60 rounded-2xl p-7 backdrop-blur-sm">
            <form className="space-y-4" action="#" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-warm-300 text-xs font-medium mb-1.5">Prénom</label>
                  <input
                    type="text"
                    placeholder="Sophie"
                    className="w-full bg-warm-900/60 border border-warm-700/60 rounded-xl px-4 py-2.5 text-warm-100 placeholder-warm-600 text-sm focus:outline-none focus:border-terra-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-warm-300 text-xs font-medium mb-1.5">Nom</label>
                  <input
                    type="text"
                    placeholder="Martin"
                    className="w-full bg-warm-900/60 border border-warm-700/60 rounded-xl px-4 py-2.5 text-warm-100 placeholder-warm-600 text-sm focus:outline-none focus:border-terra-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-warm-300 text-xs font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="sophie@exemple.fr"
                  className="w-full bg-warm-900/60 border border-warm-700/60 rounded-xl px-4 py-2.5 text-warm-100 placeholder-warm-600 text-sm focus:outline-none focus:border-terra-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-warm-300 text-xs font-medium mb-1.5">Votre activité</label>
                <select className="w-full bg-warm-950 border border-warm-700/60 rounded-xl px-4 py-2.5 text-warm-300 text-sm focus:outline-none focus:border-terra-500 transition-colors">
                  <option value="">Sélectionnez votre profil</option>
                  <option>Coach / Consultant</option>
                  <option>Créateur de contenu</option>
                  <option>Thérapeute / Praticien</option>
                  <option>Formateur / Speaker</option>
                  <option>Freelance / Expert</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-warm-300 text-xs font-medium mb-1.5">Budget estimé</label>
                <select className="w-full bg-warm-950 border border-warm-700/60 rounded-xl px-4 py-2.5 text-warm-300 text-sm focus:outline-none focus:border-terra-500 transition-colors">
                  <option value="">Sélectionnez votre budget</option>
                  <option>Starter — 490€</option>
                  <option>Pro — 890€</option>
                  <option>Premium — 1 490€</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </div>

              <div>
                <label className="block text-warm-300 text-xs font-medium mb-1.5">Parlez-moi de votre projet</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre activité, vos objectifs, ce que vous souhaitez sur votre site..."
                  className="w-full bg-warm-900/60 border border-warm-700/60 rounded-xl px-4 py-2.5 text-warm-100 placeholder-warm-600 text-sm focus:outline-none focus:border-terra-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-terra-500 hover:bg-terra-400 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <p className="text-center text-warm-600 text-xs">Réponse garantie sous 24h. 0 spam.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
