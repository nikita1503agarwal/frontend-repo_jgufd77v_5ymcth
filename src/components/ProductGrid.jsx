const products = [
  { title: 'Vision One', tagline: 'Immersive Computing', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Mac Fusion', tagline: 'Pro Power. No Compromise.', color: 'from-sky-500 to-cyan-500' },
  { title: 'iPhone Air', tagline: 'So leicht, es verschwindet.', color: 'from-rose-500 to-orange-500' },
  { title: 'Watch Ultra 2', tagline: 'Höher. Weiter. Länger.', color: 'from-amber-500 to-yellow-500' },
  { title: 'iPad Flow', tagline: 'Create anywhere', color: 'from-emerald-500 to-teal-500' },
  { title: 'AirPods Neo', tagline: 'Stiller. Klarer. Smarter.', color: 'from-indigo-500 to-purple-500' },
]

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Produkte</h2>
        <p className="mt-2 text-gray-600">Kuratiert für Speed, Klarheit und Freude.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-gray-200 overflow-hidden bg-gradient-to-br text-white from-gray-900 to-black">
              <div className={`h-28 w-28 rounded-2xl m-6 bg-gradient-to-br ${p.color}`} />
              <div className="p-6 pt-0">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.tagline}</p>
                <div className="mt-6 flex items-center justify-between">
                  <button className="text-sm font-medium text-white/90 hover:text-white">Mehr erfahren →</button>
                  <button className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-1.5 text-sm">Kaufen</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
