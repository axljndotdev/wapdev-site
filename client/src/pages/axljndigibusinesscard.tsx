import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export default function DigitalBusinessCard() {
  const blurredBg =
    "https://raw.githubusercontent.com/sharonpatriarca/assets/main/wapdev-blurred.png"; // blurred Wapdev logo as temp background
  const profileImage =
    "https://raw.githubusercontent.com/sharonpatriarca/assets/main/wapdev-logo.png"; // using Wapdev logo for now

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${blurredBg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-28 h-28 rounded-full shadow-lg border border-white/30 object-cover"
          />

          <h1 className="text-3xl font-semibold text-white mt-4 tracking-wide">
            axceljohnpatriarca
          </h1>
          <p className="text-white/80 text-sm mt-1">
            Web Developer • Software Engineer
          </p>

          <Card className="w-full mt-6 bg-white/10 border-white/20 backdrop-blur-xl">
            <CardContent className="p-5 space-y-4 text-white">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>axceljohnpatriarca@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+63 900 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <span>wapdev.xyz</span>
              </div>
            </CardContent>
          </Card>

          <motion.a
            href="https://wapdev.xyz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-block bg-[#4E4EF2] text-white px-6 py-3 rounded-xl shadow-md tracking-wide"
          >
            Visit Website
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
