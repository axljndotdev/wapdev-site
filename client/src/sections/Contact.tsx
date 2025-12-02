
import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/wapdev",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10",
      label: "@wapdev",
      description: "Follow us for updates and portfolio",
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
      name: "Facebook Messenger",
      icon: Facebook,
      href: "https://m.me/",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10",
      label: "Message us on Messenger",
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
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reach out through your preferred platform. We're active on social media and respond quickly to all inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-4 p-8 rounded-3xl bg-card border border-white/5 transition-all duration-300 group ${social.color} ${social.bg} hover:scale-105 hover:shadow-2xl`}
              >
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                  <social.icon size={32} />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {social.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{social.label}</p>
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
                  Click below to send us an email directly from your email app
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
