export default function Footer(){
  return (
    <footer className="bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold">Flame</h4>
            <p className="mt-2 text-sm">Besser als nur schön: schnell, bewusst, inklusiv.</p>
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold">Shop</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Store</a></li>
              <li><a href="#" className="hover:text-white">iPhone</a></li>
              <li><a href="#" className="hover:text-white">Mac</a></li>
              <li><a href="#" className="hover:text-white">iPad</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold">Support</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Hilfe</a></li>
              <li><a href="#" className="hover:text-white">Reparatur</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold">Rechtliches</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Flame Inc. Alle Rechte vorbehalten.</p>
          <p>Deutschland</p>
        </div>
      </div>
    </footer>
  )
}
