import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { ExternalLink, ArrowRight, Sparkles, Briefcase, Box, LayoutGrid } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Client Work" | "WAPDEV Product">("All");

  const displayedProjects =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.projectType === filter);

  return (
    <section id="portfolio" className="py-28 bg-[#070707] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-800/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Case Studies & Products
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Selected Works
            </h2>
            <p className="text-gray-400 text-base md:text-lg mt-2 max-w-xl">
              High-impact solutions for enterprise clients and in-house proprietary digital products.
            </p>
          </div>

          {/* Type Switcher */}
          <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "All"
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(122,92,243,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All ({portfolioItems.length})
            </button>
            <button
              onClick={() => setFilter("Client Work")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "Client Work"
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(122,92,243,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Clients (3)
            </button>
            <button
              onClick={() => setFilter("WAPDEV Product")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "WAPDEV Product"
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(122,92,243,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Products (2)
            </button>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((item, index) => {
              const isProduct = item.projectType === "WAPDEV Product";

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(122,92,243,0.18)] flex flex-col"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-1">
                      {isProduct ? (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-600/90 text-white border border-purple-400/30 backdrop-blur-md flex items-center gap-1 shadow-md">
                          <Box className="w-3 h-3" />
                          WAPDEV Product
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-600/90 text-white border border-blue-400/30 backdrop-blur-md flex items-center gap-1 shadow-md">
                          <Briefcase className="w-3 h-3" />
                          Client Work
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/75 text-gray-300 border border-white/10 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Meta */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-primary/80 mb-2.5">
                        {isProduct ? "Proprietary Product" : `Client: ${item.client}`}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/portfolio"
                        className="p-2.5 bg-white/5 hover:bg-primary rounded-full text-white transition-colors cursor-pointer"
                        title="View Full Case Study"
                      >
                        <ExternalLink size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all shadow-[0_0_25px_rgba(122,92,243,0.2)] cursor-pointer"
          >
            <span>Explore All Projects & In-Depth Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

