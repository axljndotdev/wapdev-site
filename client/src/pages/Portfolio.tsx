import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems, PortfolioProject } from "@/lib/data";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  Code2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Briefcase,
  Box,
  LayoutGrid,
} from "lucide-react";

type ProjectTypeFilter = "All" | "Client Work" | "WAPDEV Product";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<ProjectTypeFilter>("All");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const clientCount = portfolioItems.filter(
    (item) => item.projectType === "Client Work"
  ).length;
  const productCount = portfolioItems.filter(
    (item) => item.projectType === "WAPDEV Product"
  ).length;

  const filteredProjects =
    activeTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.projectType === activeTab);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-24 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#7A5CF3]/20 via-[#4f31c2]/10 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
        <div className="absolute top-96 right-[-100px] w-[500px] h-[500px] bg-purple-900/15 blur-[160px] pointer-events-none -z-10 rounded-full" />

        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-300">
                WAPDEV Portfolio & Built Products
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Client Solutions & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-primary">
                Proprietary Products.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Explore custom systems engineered for enterprise clients alongside proprietary digital products built in-house at WAPDEV.
            </motion.p>
          </div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl"
          >
            <div className="text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-white flex items-center justify-center gap-1">
                <Zap className="w-5 h-5 text-primary" />
                <span>&lt;0.8s</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                Page Load Speed
              </p>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-white flex items-center justify-center gap-1">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>100%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                Client Success
              </p>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-white flex items-center justify-center gap-1">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Enterprise</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                Quality & Security
              </p>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl md:text-3xl font-extrabold text-white flex items-center justify-center gap-1">
                <Code2 className="w-5 h-5 text-primary" />
                <span>Full-Stack</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                Custom Architecture
              </p>
            </div>
          </motion.div>

          {/* Primary Segment Switcher (Clients vs Products) */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl gap-1">
              <button
                onClick={() => setActiveTab("All")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "All"
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(122,92,243,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>All Works</span>
                <span className="text-[11px] px-2 py-0.2 rounded-full bg-black/40 text-white/80 font-mono">
                  {portfolioItems.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("Client Work")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "Client Work"
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(122,92,243,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Client Projects</span>
                <span className="text-[11px] px-2 py-0.2 rounded-full bg-black/40 text-white/80 font-mono">
                  {clientCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("WAPDEV Product")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "WAPDEV Product"
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(122,92,243,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Box className="w-4 h-4" />
                <span>WAPDEV Products</span>
                <span className="text-[11px] px-2 py-0.2 rounded-full bg-black/40 text-white/80 font-mono">
                  {productCount}
                </span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isProduct = project.projectType === "WAPDEV Product";

                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] hover:border-primary/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_35px_rgba(122,92,243,0.18)] hover:-translate-y-1.5"
                  >
                    {/* Visual Preview Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                      {/* Simulated browser bar */}
                      <div className="absolute top-0 left-0 right-0 h-7 bg-black/70 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/70" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                          <div className="w-2 h-2 rounded-full bg-green-500/70" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono tracking-wide truncate max-w-[140px]">
                          {project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.wapdev.app
                        </span>
                        <div className="w-2" />
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover pt-7 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Badges top-right */}
                      <div className="absolute top-9 right-3 z-10 flex flex-col items-end gap-1.5">
                        {isProduct ? (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-600/90 text-white border border-purple-400/40 shadow-lg backdrop-blur-md flex items-center gap-1">
                            <Box className="w-3 h-3" />
                            WAPDEV Product
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-600/90 text-white border border-blue-400/40 shadow-lg backdrop-blur-md flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            Client Work
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/75 text-gray-300 border border-white/10 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <span className="text-xs text-gray-500 font-mono mt-1 shrink-0">
                            {project.year}
                          </span>
                        </div>

                        <p className="text-xs font-medium text-primary/90 mb-2">
                          {isProduct ? "In-House Product" : `Client: ${project.client}`}
                        </p>

                        <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                          {project.tagline}
                        </p>

                        {/* Key Metric Highlights */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.metrics.slice(0, 2).map((metric, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        {/* Tech stack tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-white/5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setActiveProject(project)}
                            className="flex-1 py-2 px-3 rounded-lg bg-white/[0.06] hover:bg-primary text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Layers className="w-3.5 h-3.5" />
                            Case Study
                          </button>

                          {project.demoUrl?.startsWith("/") ? (
                            <Link
                              href={project.demoUrl}
                              className="py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                            >
                              <span>Live</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          ) : (
                            <a
                              href={project.demoUrl || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                            >
                              <span>Preview</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Call To Action Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#120e24] via-black to-[#0d0a1a] border border-primary/30 shadow-[0_0_50px_rgba(122,92,243,0.15)] text-center"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Let&apos;s Build Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Have a project in mind? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
                  Let&apos;s build something exceptional.
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
                Whether you need a bespoke client web application, an automated intelligence pipeline, or high-conversion landing page, we deliver fast, scalable results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/axceldigitalcard"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(122,92,243,0.4)] cursor-pointer"
                >
                  Contact Axcel / WAPDEV
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-all cursor-pointer"
                >
                  View Website Packages
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                      activeProject.projectType === "WAPDEV Product"
                        ? "bg-purple-600/30 text-purple-300 border border-purple-500/40"
                        : "bg-blue-600/30 text-blue-300 border border-blue-500/40"
                    }`}
                  >
                    {activeProject.projectType}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {activeProject.category} • {activeProject.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {activeProject.projectType === "WAPDEV Product" ? (
                    <span>Created by <strong className="text-white">WAPDEV In-House Labs</strong></span>
                  ) : (
                    <span>Client: <strong className="text-white">{activeProject.client}</strong></span>
                  )}
                </p>
              </div>

              {/* Project Image */}
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-video border border-white/10">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Case Study Details */}
              <div className="space-y-6 text-sm text-gray-300">
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="leading-relaxed text-gray-400">
                    {activeProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h5 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                      The Challenge
                    </h5>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h5 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                      The Solution
                    </h5>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Metrics */}
                {activeProject.metrics && (
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                      Impact & Key Results
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/25 text-white font-medium text-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Tech Stack & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.05] border border-white/10 text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  {activeProject.demoUrl?.startsWith("/") ? (
                    <Link
                      href={activeProject.demoUrl}
                      className="px-5 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Visit Live Page</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  ) : (
                    <a
                      href={activeProject.demoUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

