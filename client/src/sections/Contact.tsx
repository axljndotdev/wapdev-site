import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const socialLinks = [
    {
      name: "Upwork",
      icon: Briefcase,
      href: "https://www.upwork.com/freelancers/~01a4b5c6d7e8f9g0h1",
      color: "hover:text-green-400",
      bg: "hover:bg-green-400/10",
      label: "Hire on Upwork",
      description: "Top Rated Freelancer",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/wapdev",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10",
      label: "@wapdev",
      description: "Follow us for updates",
    },
    {
      name: "WhatsApp",
      icon: Phone,
      href: "https://wa.me/",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/10",
      label: "Chat on WhatsApp",
      description: "Quick response guaranteed",
    },
    {
      name: "Messenger",
      icon: Facebook,
      href: "https://m.me/",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10",
      label: "Message us",
      description: "Available 24/7",
    },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:wapdev24@gmail.com?subject=Project Inquiry&body=Hi, I would like to discuss a project with you.";
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-900/30 border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Digital Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-card via-card to-primary/10 p-8 rounded-3xl border border-white/10 text-center shadow-2xl">
            <div className="relative inline-block mb-6">
              <img
                src="/profile.png"
                alt="WAPDEV Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-primary/50 shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-card flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">WAPDEV</h3>
            <p className="text-primary font-medium mb-2">Web & Software Developer</p>
            <p className="text-gray-400 text-sm mb-6">
              Building modern, fast, and reliable web solutions for businesses worldwide.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new projects
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reach out through your preferred platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-white/5 transition-all duration-300 group ${social.color} ${social.bg} hover:scale-105 hover:shadow-xl`}
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <social.icon size={28} />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-0.5">
                    {social.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{social.description}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-3xl border border-white/5 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Mail size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">
                  Prefer Email?
                </h3>
                <p className="text-gray-400 mb-6">
                  Click below to send us an email directly
                </p>
              </div>
              <Button
                onClick={handleEmailClick}
                className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-xl h-auto"
              >
                Send Email to wapdev24@gmail.com
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
