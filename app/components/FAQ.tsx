const faqs = [
  {
    q: "Combien de temps faut-il pour livrer mon site ?",
    a: "En général, je livre un site vitrine en 5 à 7 jours ouvrés après validation de la maquette. Pour les projets plus complexes (boutique, espace membres), comptez 2 à 3 semaines.",
  },
  {
    q: "Est-ce que je pourrai modifier mon site moi-même ?",
    a: "Oui ! Je vous forme à gérer votre contenu (textes, images, articles de blog) sans avoir besoin de toucher au code. Une documentation est également fournie à la livraison.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le support post-livraison ?",
    a: "Le support inclut les corrections de bugs, les petites modifications de texte et les questions techniques. Les nouvelles fonctionnalités et pages supplémentaires font l'objet d'un devis séparé.",
  },
  {
    q: "Proposez-vous des paiements en plusieurs fois ?",
    a: "Oui, je propose le paiement en 2 fois (50% au démarrage, 50% à la livraison) ou en 3 fois pour les projets Premium. Sans frais supplémentaires.",
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "J'intègre les bases du SEO technique dans chaque projet (balises meta, structure sémantique, vitesse, mobile-first). Pour un SEO avancé avec stratégie de contenu, c'est disponible en option.",
  },
  {
    q: "Est-ce que vous proposez l'hébergement ?",
    a: "Je ne vends pas d'hébergement directement, mais je vous guide vers les meilleures options selon votre budget et je m'occupe entièrement de la mise en ligne.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-terra-400" />
            <span className="text-terra-500 text-xs font-semibold tracking-[0.15em] uppercase">FAQ</span>
            <div className="h-px w-10 bg-terra-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-950 mb-4">
            Les questions fréquentes
          </h2>
          <p className="text-warm-500 text-lg">
            Pas encore convaincu ? Voici les réponses aux questions les plus posées.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-warm-50 border border-warm-200/60 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-cream transition-colors">
                <span className="font-semibold text-warm-900 text-sm leading-snug">{f.q}</span>
                <span className="faq-icon w-7 h-7 rounded-full bg-terra-100 text-terra-500 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-warm-600 text-sm leading-relaxed border-t border-warm-200/60 pt-4">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center text-warm-500 text-sm">
          Vous avez une autre question ?{" "}
          <a href="#contact" className="text-terra-500 hover:underline font-medium">
            Écrivez-moi directement →
          </a>
        </div>
      </div>
    </section>
  );
}
