import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Mail,
  ArrowUpRight,
  Sparkles,
  Phone,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { portfolioItems } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Inherit client names directly from portfolio
  const clientNames = Array.from(
    new Set(
      portfolioItems
        .filter((item) => item.projectType === "Client Work")
        .map((item) => item.client)
    )
  );

  const copyEmail = () => {
    navigator.clipboard.writeText("axljn.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:axljn.dev@gmail.com?subject=Project Inquiry&body=Hi Axcel / WAPDEV, I would like to discuss a project with you.";
  };

  const pillars = [
    {
      number: "#01",
      title: "Web Applications",
      desc: "High-performance React & full-stack platforms built for scale.",
    },
    {
      number: "#02",
      title: "Custom Software & SaaS",
      desc: "Tailored dashboards, automations & business management tools.",
    },
    {
      number: "#03",
      title: "E-Commerce Systems",
      desc: "Conversion-optimized checkout pipelines & inventory engines.",
    },
    {
      number: "#04",
      title: "Creative Direction & UI/UX",
      desc: "Brand identity, immersive design systems & sleek aesthetics.",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#030303] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Main Master Card Matching the Inspiration with Purple Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl md:rounded-[40px] overflow-hidden border border-primary/20 shadow-[0_20px_70px_rgba(122,92,243,0.18)] bg-gradient-to-br from-[#120c29] via-[#0a0618] to-[#05030d]"
        >
          {/* Vibrant Theme Violet Glowing Gradient Lights */}
          <div className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-primary via-[#6366F1] to-transparent opacity-70 blur-[130px] pointer-events-none -z-0" />
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-l from-primary/30 via-purple-600/20 to-transparent blur-[140px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-purple-900/30 blur-[120px] pointer-events-none -z-0" />

          {/* Card Top & Middle Layout */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Greeting & Huge Bold Title */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/80 text-lg sm:text-xl font-medium tracking-tight mb-3"
                >
                  Hey, I&apos;m a
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-[0.95] mb-6"
                >
                  Creative <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-primary">
                    Developer
                  </span>
                </motion.h2>

                {/* Sub-tag status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 pt-2"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-xs text-white/90">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-semibold text-emerald-400">Available</span>
                    <span className="text-white/40"></span>
                    <span></span>
                  </div>

                  <Link
                    href="/axceldigitalcard"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs text-primary transition-colors cursor-pointer"
                  >
                    <span>Digital Card</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>

              {/* Center Portrait with Violet/Indigo Studio Glow */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative">
                <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
                  {/* Silhouette Glow Atmosphere */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-[#6366F1] to-[#818CF8] blur-2xl opacity-60 scale-95" />
                  
                  {/* Portrait Ring & Image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/40 shadow-[0_0_35px_rgba(122,92,243,0.3)] bg-[#0a0614] backdrop-blur-sm">
                    <img
                      src="/profile.png"
                      alt="Axcel John Patriarca / WAPDEV"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top contrast-[1.08] brightness-[1.02] transition-all duration-700 hover:scale-105"
                    />
                    {/* Subtle Theme Rim Lighting Cast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-primary/20 pointer-events-none" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-3 -right-3 bg-black/85 backdrop-blur-xl border border-primary/40 rounded-2xl px-4 py-2 text-xs font-semibold text-white shadow-xl flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Axcel John • Lead Dev</span>
                  </div>
                </div>

                {/* Right Side Philosophy Quote */}
                <div className="mt-8 text-center lg:text-right max-w-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    Great software should feel invisible.
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    From concept to deployment, I build web solutions and digital brands that connect, scale, and convert.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom 4 Pillars with Theme Numbering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/10">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="space-y-1.5"
                >
                  <span className="text-primary font-mono text-sm font-bold tracking-wider">
                    {pillar.number}
                  </span>
                  <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sub-Bar: Trusted by Brands / Partners */}
          <div className="bg-[#080512]/95 backdrop-blur-xl border-t border-white/10 px-8 py-7 sm:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <span className="text-xs uppercase tracking-widest text-white/50 font-semibold whitespace-nowrap">
                Trusted by Clients
              </span>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8">
                {clientNames.map((clientName, i) => (
                  <div
                    key={i}
                    className="flex items-center text-white/75 hover:text-white transition-colors cursor-default"
                  >
                    <span className="text-sm sm:text-base font-semibold tracking-tight text-white/85 hover:text-primary transition-colors">
                      {clientName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact & Action Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {/* Send Email Action */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={copyEmail}
                className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Direct Email</h4>
              <p className="text-xs text-white/50 mb-4 truncate">axljn.dev@gmail.com</p>
              <button
                onClick={handleEmailClick}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-primary text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Upwork Profile */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Upwork Freelance</h4>
              <p className="text-xs text-white/50 mb-4">Top Rated Web Developer</p>
              <a
                href="https://www.upwork.com/freelancers/~0124700b3494b57f36"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hire on Upwork</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Digital Business Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                TapLink NFC
              </span>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">Digital Card &amp; vCard</h4>
              <p className="text-xs text-white/50 mb-4">1-Tap contact download</p>
              <Link
                href="/axceldigitalcard"
                className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(122,92,243,0.3)]"
              >
                <span>Open Digital Card</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

