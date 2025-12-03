import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";

// Upwork SVG Icon
const UpworkIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.4 3c-2.3 0-4.2 1.9-4.2 4.2v2.7c-.9-.7-1.8-1.7-2.5-3.2l-.4-1H7.2v6.2c0 1-.8 1.8-1.8 1.8H5v3.3h.4c2.9 0 5.3-2.3 5.4-5.2 1 .9 2.1 1.6 3.4 2v3.1h3.3V7.2c0-1 .8-1.8 1.8-1.8H20V3h-.4c-.9 0-1.7.2-2.3.6-.5-.3-1.1-.4-1.7-.4z" />
  </svg>
);

export default function DigitalBusinessCard() {
  const blurredBg =
    "https://raw.githubusercontent.com/sharonpatriarca/assets/main/wapdev-blurred.png";
  const profileImage =
    "https://raw.githubusercontent.com/sharonpatriarca/assets/main/wapdev-logo.png";

  const downloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:AxcelJohn Patriarca
TITLE:Web & Software Developer
EMAIL:ax.j.patriarca@gmail.com
TEL:+639123456789
URL:https://wapdev.xyz
END:VCARD`;
    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "axceljohnpatriarca.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${blurredBg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-black/50 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-xl border border-white/10"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-xl shadow-lg border border-white/20 object-cover bg-black p-3"
          />

          <h1 className="text-4xl font-bold text-white mt-6 leading-tight">
            AxcelJohn <br /> Patriarca
          </h1>

          <p className="text-purple-300 text-lg mt-2 font-medium">
            Web & Software Developer
          </p>

          <p className="text-white/70 mt-4 max-w-md text-[15px] leading-relaxed">
            I build modern, fast, and scalable websites and applications using
            React, Node.js, Firebase, Shopify, and WordPress. Passionate about
            creating clean UI, efficient systems, and real solutions for
            businesses.
          </p>

          <div className="w-full space-y-3 mt-8">
            <Card className="bg-white/10 border-white/10">
              <CardContent className="flex items-center gap-3 p-4 text-white text-sm">
                <Mail className="w-5 h-5 text-purple-300" />
                axljn.dev@gmail.com
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/10">
              <CardContent className="flex items-center gap-3 p-4 text-white text-sm">
                <Phone className="w-5 h-5 text-purple-300" /> +63 9568302354
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/10">
              <CardContent className="flex items-center gap-3 p-4 text-white text-sm">
                <Globe className="w-5 h-5 text-purple-300" /> wapdev.xyz
              </CardContent>
            </Card>
          </div>

          {/* Social Icons */}
          <div className="flex gap-20 mt-6 text-white/80">
            <a
              href="https://www.upwork.com/freelancers/~yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <UpworkIcon className="w-8 h-8" />
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={30} />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={30} />
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadVCard}
            className="mt-8 w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-xl text-lg font-medium shadow-md"
          >
            Save Contact
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
