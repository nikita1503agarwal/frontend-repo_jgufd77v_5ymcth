import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.9),rgba(20,20,20,1))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight"
            >
              Weniger Lärm. Mehr Wow.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-gray-200 max-w-xl"
            >
              Ein visionäres Produkt-Showcase, schneller als je zuvor, mit Fokus auf Klarheit, Performance und Barrierefreiheit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#products" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 font-medium hover:bg-gray-200 transition">Produkte ansehen</a>
              <a href="#values" className="inline-flex items-center rounded-full ring-1 ring-white/30 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">Unsere Werte</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-900 to-black overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" />
            <div className="absolute inset-x-6 bottom-6 text-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm">Neu: Vision One</span>
                <span className="text-xs opacity-70">Ultra OLED</span>
              </div>
              <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
