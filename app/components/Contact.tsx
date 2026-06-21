export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-indigo-700/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-violet-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Prêt à lancer votre site ?<br />
              <span className="gradient-text">Parlons-en.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Répondez à quelques questions pour que je comprenne votre projet, et je vous reviens sous 24h avec une proposition personnalisée.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: "📞", title: "Appel découverte", desc: "30 min offertes pour cadrer votre projet" },
                { icon: "⚡", title: "Réponse rapide", desc: "Je réponds sous 24h, souvent bien moins" },
                { icon: "🎯", title: "Sans engagement", desc: "Devis gratuit, vous décidez ensuite" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-indigo-400 shrink-0">
                <path d="M2.5 4A1.5 1.5 0 014 2.5h8A1.5 1.5 0 0113.5 4v.5h-11V4zm-1 2.5v5A1.5 1.5 0 003 13h10a1.5 1.5 0 001.5-1.5v-5h-13z" />
              </svg>
              contact@elance-studio.fr
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
            <form className="space-y-4" action="#" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1.5">Prénom</label>
                  <input
                    type="text"
                    placeholder="Sophie"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-xs font-medium mb-1.5">Nom</label>
                  <input
                    type="text"
                    placeholder="Martin"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="sophie@exemple.fr"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-medium mb-1.5">Votre activité</label>
                <select className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-indigo-500 transition-colors">
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
                <label className="block text-slate-300 text-xs font-medium mb-1.5">Budget estimé</label>
                <select className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-indigo-500 transition-colors">
                  <option value="">Sélectionnez votre budget</option>
                  <option>Starter — 490€</option>
                  <option>Pro — 890€</option>
                  <option>Premium — 1 490€</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-medium mb-1.5">Parlez-moi de votre projet</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre activité, vos objectifs, ce que vous souhaitez sur votre site..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <p className="text-center text-slate-600 text-xs">
                Réponse garantie sous 24h. 0 spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
