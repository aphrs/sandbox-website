const stats = [
  { value: "50+", label: "Sites livrés" },
  { value: "7j", label: "Délai moyen" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "4.9★", label: "Note moyenne" },
];

export default function Stats() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
