const items = [
  "Sites qui convertissent",
  "Livraison en 7 jours",
  "Design premium",
  "50+ clients satisfaits",
  "Coachs & Créateurs",
  "Visibilité garantie",
  "Mobile-first",
  "SEO optimisé",
  "Formulaires & réservation",
  "Support inclus",
];

const Dot = () => (
  <span className="w-1.5 h-1.5 rounded-full bg-terra-500 mx-5 shrink-0 inline-block align-middle" />
);

export default function Marquee() {
  return (
    <div className="bg-warm-950 py-5 overflow-hidden select-none border-y border-warm-900/60">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render twice for seamless infinite loop */}
        {[0, 1].map((copy) => (
          <span key={copy} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-warm-200 text-sm font-medium tracking-wide">{item}</span>
                <Dot />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
