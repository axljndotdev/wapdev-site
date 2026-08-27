import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Starter",
    price: "₱7,500",
    description: "Perfect for freelancers and personal websites.",
    features: ["3 Pages", "Mobile Responsive", "Basic SEO", "Contact Form"],
  },
  {
    name: "Business",
    price: "₱12,000",
    description: "Ideal for small businesses and local shops.",
    features: [
      "5 Pages",
      "Mobile Responsive",
      "Basic SEO",
      "Contact Form",
      "Google Maps",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₱18,000",
    description: "For growing businesses needing custom layouts.",
    features: ["7 Pages", "Custom Layout", "SEO Setup", "Forms & Maps"],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Website Pricing
              </h2>
              <p className="text-gray-400">
                Flexible packages designed for Philippine small businesses.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative rounded-2xl border ${
                    plan.highlighted
                      ? "border-primary shadow-[0_0_40px_rgba(122,92,243,0.15)]"
                      : "border-white/10"
                  } bg-background p-8 text-center`}
                >
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <p className="text-4xl font-bold text-primary mb-4">
                    {plan.price}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/axceldigitalcard"
                    className={`block w-full py-3 rounded-xl font-semibold transition ${
                      plan.highlighted
                        ? "bg-primary text-white hover:opacity-90"
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Get In Touch
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-20 max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Optional Add-Ons
              </h3>
              <p className="text-gray-400 mb-6">
                Customize your website based on your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Extra Page – ₱1,500",
                  "Fast Delivery – ₱1,000 to ₱1,500",
                  "Basic SEO Setup – ₱2,000",
                  "Monthly Maintenance – ₱1,500",
                ].map((addon, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-xl p-4 bg-background text-gray-300"
                  >
                    {addon}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
