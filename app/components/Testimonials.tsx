const testimonials = [
  {
    name: "Sophie Martin",
    role: "Coach de vie & PNL",
    avatar: "SM",
    color: "bg-rose-100 text-rose-700",
    quote:
      "J'avais peur que mon site soit générique comme tous ceux que je voyais. Au final, il ressemble exactement à mon univers. Mes clients me disent souvent qu'ils ont réservé un appel juste grâce au site. C'est de la magie !",
    stars: 5,
  },
  {
    name: "Thomas Lefebvre",
    role: "Créateur YouTube (85k abonnés)",
    avatar: "TL",
    color: "bg-orange-100 text-orange-700",
    quote:
      "Livré en 6 jours chrono, exactement ce que j'avais demandé. Le processus est super fluide, on est toujours au courant de l'avancement. J'ai recommandé à 3 créateurs de mon entourage depuis.",
    stars: 5,
  },
  {
    name: "Amélie Rousseau",
    role: "Nutritionniste & Coach bien-être",
    avatar: "AR",
    color: "bg-teal-100 text-teal-700",
    quote:
      "Depuis le lancement de mon nouveau site, j'ai multiplié par 3 mes demandes de consultation. Le SEO a été vraiment bien travaillé, j'apparais maintenant en première page Google pour ma ville.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-slate-500 text-lg">
            Leur succès est ma meilleure vitrine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover flex flex-col bg-slate-50 rounded-2xl border border-slate-100 p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#fbbf24">
                    <path d="M8 1.5l1.82 3.7 4.09.6-2.96 2.88.7 4.07L8 10.77l-3.65 1.98.7-4.07L2.09 5.8l4.09-.6L8 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className={`w-10 h-10 rounded-full ${t.color} font-bold text-sm flex items-center justify-center`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
