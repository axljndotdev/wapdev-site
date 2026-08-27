import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";

// Upwork Logo Component
const UpworkIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    {...props}
    src="https://companieslogo.com/img/orig/UPWK.D-ed9fd73c.png?t=1741444949"
    alt="Upwork Logo"
    className="w-8 h-8 object-contain"
  />
);

export default function DigitalBusinessCard() {
  const blurredBg =
    "https://images.unsplash.com/photo-1574790335676-2a2bb9d70d08?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const profileImage = "/profile.png";

  const downloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Axcel John Patriarca
TITLE:Web & Software Developer
EMAIL:axljn.dev@gmail.com
TEL:+639568302354
URL:https://wapdev.xyz
END:VCARD`;

    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "AxcelJohnPatriarca.vcf";
    a.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-2 bg-cover bg-center"
      style={{ backgroundImage: `url(${blurredBg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-black/60 backdrop-blur-xl p-2.5 sm:p-10 rounded-3xl shadow-2xl w-full max-w-sm border border-white/10"
      >
        <div className="flex flex-col items-center text-center relative">
          {/* Cover strip behind profile image */}
          <div className="absolute -top-1 w-full h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-3xl"></div>

          {/* Profile Image */}
          <div className="relative z-10">
            <img
              src={profileImage}
              alt="Axcel John Patriarca - Web & Software Developer"
              referrerPolicy="no-referrer"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-2xl border-4 border-purple-400/50 object-cover bg-black"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 sm:mt-6 leading-tight z-10 relative">
            Axcel John <br /> Patriarca
          </h1>

          <p className="text-purple-300 text-lg mt-1 font-medium z-10 relative">
            Web & Software Developer
          </p>

          <p className="text-white/80 mt-3 max-w-xs text-[14px] sm:text-[15px] leading-relaxed z-10 relative">
            I build fast, modern websites and apps with React, Node.js,
            Firebase, Shopify, and WordPress, creating clean UI and efficient
            solutions for businesses and freelancers.
          </p>

          <div className="w-full space-y-2 sm:space-y-3 mt-6 z-10 relative">
            <Card className="bg-white/10 border-white/10">
              <CardContent className="flex items-center gap-3 p-3 sm:p-4 text-white text-sm">
                <Mail className="w-5 h-5 text-purple-300" />
                axljn.dev@gmail.com
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/10">
              <CardContent className="flex items-center gap-3 p-3 sm:p-4 text-white text-sm">
                <Phone className="w-5 h-5 text-purple-300" /> +63 9568302354
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/10">
              <CardContent className="flex items-center gap-3 p-3 sm:p-4 text-white text-sm">
                <Globe className="w-5 h-5 text-purple-300" /> wapdev.xyz
              </CardContent>
            </Card>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-5 text-white/80 z-10 relative">
            <a
              href="https://www.upwork.com/freelancers/~0124700b3494b57f36?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <UpworkIcon />
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Github size={30} />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              className="hover:opacity-80 transition"
            >
              <Linkedin size={30} />
            </a>

            <a
              href="https://m.me/axcel101"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/068/655/565/non_2x/messenger-icon-white-logo-editable-transparent-background-premium-free-png.png"
                alt="Messenger"
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadVCard}
            className="mt-6 w-full bg-purple-500 hover:bg-purple-600 text-white py-3 sm:py-4 rounded-xl text-lg font-medium shadow-md z-10 relative"
          >
            Save Contact (.vcf)
          </motion.button>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-base mt-8 font-medium z-10 relative transition-colors"
          >
            <img src="/wapdev-logo.png" alt="WAPDEV Logo" className="w-5 h-5 object-contain" />
            TapLink by WAPDEV
          </a>
        </div>
      </motion.div>
    </div>
  );
}
