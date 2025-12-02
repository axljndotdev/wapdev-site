import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-gray-400 text-lg">A showcase of our recent projects.</p>
          </div>
          <button className="hidden md:block text-primary font-semibold hover:text-white transition-colors">
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-medium mb-2">{item.category}</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm text-white hover:bg-primary transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <button className="text-primary font-semibold hover:text-white transition-colors">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
