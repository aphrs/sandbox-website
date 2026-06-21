const testimonials = [
  {
    name: "Sophie Martin",
    role: "Coach de vie & PNL",
    avatar: "SM",
    quote:
      "J'avais peur que mon site soit générique. Au final, il ressemble exactement à mon univers. Mes clients me disent souvent qu'ils ont réservé un appel juste grâce au site — c'est de la magie !",
    stars: 5,
  },
  {
    name: "Thomas Lefebvre",
    role: "Créateur YouTube · 85k abonnés",
    avatar: "TL",
    quote:
      "Livré en 6 jours chrono, exactement ce que j'avais demandé. Le processus est super fluide, on est toujours au courant de l'avancement. J'ai recommandé à 3 créateurs depuis.",
    stars: 5,
  },
  {
    name: "Amélie Rousseau",
    role: "Nutritionniste & Coach bien-être",
    avatar: "AR",
    quote:
      "Depuis le lancement, j'ai multiplié par 3 mes demandes de consultation. Le SEO a été vraiment bien travaillé, j'apparais maintenant en première page Google pour ma ville.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-400" />
            <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">Témoignages</span>
            <div className="h-px w-10 bg-terra-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-950 mb-3">
            Ce que disent mes clients
          </h2>
          <p className="text-warm-500 text-lg">Leur succès est ma meilleure vitrine.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover flex flex-col bg-warm-50 rounded-2xl border border-warm-200/60 p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#c4674a">
                    <path d="M8 1.5l1.82 3.7 4.09.6-2.96 2.88.7 4.07L8 10.77l-3.65 1.98.7-4.07L2.09 5.8l4.09-.6L8 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Large decorative quote mark */}
              <div className="font-serif text-6xl text-terra-200 leading-none -mb-4 select-none">&ldquo;</div>

              <blockquote className="text-warm-700 text-sm leading-relaxed flex-1 mb-6 mt-2">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-warm-200/60 pt-5">
                <div className="w-10 h-10 rounded-full bg-terra-100 text-terra-600 font-bold text-sm flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-warm-950 text-sm">{t.name}</div>
                  <div className="text-warm-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
