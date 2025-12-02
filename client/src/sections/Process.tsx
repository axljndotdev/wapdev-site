import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-gray-400">Simple, transparent, and effective.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10 -z-0" />

          {processSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border-2 border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(122,92,243,0.1)]">
                <span className="text-3xl font-bold text-primary">{item.step}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
