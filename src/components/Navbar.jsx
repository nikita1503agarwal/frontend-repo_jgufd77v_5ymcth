import { useEffect, useState } from 'react'
import { Search, ShoppingBag, Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories']

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-lg bg-white/70 shadow-sm' : 'bg-transparent'} `}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 font-semibold text-gray-900">
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-black to-gray-700 inline-block" />
            <span>Flame</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {links.map((l) => (
              <a key={l} href="#" className="hover:text-gray-900 transition-colors">{l}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100"><Search size={18} /></button>
            <button className="p-2 rounded-full hover:bg-gray-100"><ShoppingBag size={18} /></button>
          </div>

          <button className="md:hidden p-2 rounded-full hover:bg-gray-100" onClick={() => setOpen(v => !v)}><Menu /></button>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-200 py-3 grid grid-cols-2 gap-3 text-sm">
            {links.map((l) => (
              <a key={l} href="#" className="px-2 py-1 rounded hover:bg-gray-50">{l}</a>
            ))}
            <div className="col-span-2 flex items-center gap-3 pt-2">
              <div className="flex-1 relative">
                <input placeholder="Suchen" className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300" />
                <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100"><ShoppingBag size={18} /></button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
