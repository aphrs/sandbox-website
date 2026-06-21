const stats = [
  { value: "50+", label: "Sites livrés" },
  { value: "7 jours", label: "Délai moyen de livraison" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "4.9 ★", label: "Note moyenne" },
];

export default function Stats() {
  return (
    <section className="bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-warm-200/60">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "pl-8" : ""}`}>
              <div className="font-serif text-4xl font-semibold text-terra-500 mb-1">{s.value}</div>
              <div className="text-sm text-warm-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
