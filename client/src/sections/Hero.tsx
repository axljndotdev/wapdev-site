import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Zap, Shield, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Dynamic Ambient Gradient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-primary/30 via-purple-600/20 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-900/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge with gradient border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-white/[0.08] border border-white/15 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(122,92,243,0.2)]"
          >
            <img src="/wapdev-logo.png" alt="WAPDEV Logo" className="w-5 h-5 object-contain" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5">
              <span className="text-primary font-bold">WAPDEV</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-200">High-Performance Web & Software Development</span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          </motion.div>

          {/* Headline with Multi-Tone Gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.08]">
            We Build Custom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#D8CEFD] to-[#7A5CF3]">
              Digital Experiences
            </span>{" "}
            <br />
            <span className="text-gray-300 font-extrabold">That Drive Growth.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Fast, reliable, and scalable web applications, modern e-commerce architectures, and bespoke software solutions crafted for forward-thinking brands.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-base hover:bg-primary/90 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(122,92,243,0.45)] hover:shadow-[0_0_40px_rgba(122,92,243,0.65)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-white rounded-full font-semibold text-base transition-all hover:border-white/30 backdrop-blur-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Trust & Architecture Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Ultra-Fast</p>
                <p className="text-[11px] text-gray-400">&lt;0.8s load times</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Clean Code</p>
                <p className="text-[11px] text-gray-400">Modern TypeScript</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Secure</p>
                <p className="text-[11px] text-gray-400">Enterprise grade</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Conversion</p>
                <p className="text-[11px] text-gray-400">Built to scale</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
