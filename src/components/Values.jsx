export default function Values(){
  const values = [
    { title: 'Zugänglichkeit zuerst', text: 'Kontraste, Keyboard-Navigation, Screenreader – standardmäßig durchdacht.' },
    { title: 'Privatsphäre by Design', text: 'Lokale Verarbeitung, klare Opt-ins, keine Dark Patterns.' },
    { title: 'Schnelligkeit', text: 'Edge-optimiert, bildleicht, nur das Nötigste – für blitzschnelle Ladezeiten.' },
    { title: 'Nachhaltigkeit', text: 'Effizienz im Code und in der Lieferkette, langlebige Produkte.' },
  ]

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unsere Prinzipien</h2>
        <p className="mt-2 text-gray-600">Woran wir jede Entscheidung messen.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(v => (
            <div key={v.title} className="rounded-2xl bg-white p-6 border border-gray-200 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">{v.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
