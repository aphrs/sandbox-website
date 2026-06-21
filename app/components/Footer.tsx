const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Confidentialité", href: "#" },
  { label: "CGV", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-950 border-t border-warm-900/60">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-terra-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 12L8 4L13 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 9H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-semibold text-warm-50 text-lg">
                Élance<span className="text-terra-400">.</span>
              </span>
            </a>
            <p className="text-warm-600 text-sm leading-relaxed max-w-xs">
              Des sites vitrines qui convertissent, pour les coachs et créateurs qui veulent briller en ligne.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-warm-200 font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-warm-600 hover:text-warm-200 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-warm-200 font-semibold text-sm mb-4">Me contacter</h4>
            <a
              href="mailto:contact@elance-studio.fr"
              className="flex items-center gap-2 text-warm-600 hover:text-warm-200 text-sm transition-colors mb-4"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <rect x="1" y="3" width="12" height="9" rx="1.5" />
                <path d="M1 4.5l6 4 6-4" />
              </svg>
              contact@elance-studio.fr
            </a>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", href: "#", short: "in" },
                { label: "Instagram", href: "#", short: "ig" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-warm-900 hover:bg-warm-800 text-warm-500 hover:text-warm-200 rounded-lg flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-warm-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-700 text-xs">
            © {new Date().getFullYear()} Élance Studio — Tous droits réservés
          </p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-warm-700 hover:text-warm-400 text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
