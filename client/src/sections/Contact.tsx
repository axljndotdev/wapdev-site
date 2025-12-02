import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Instagram, Facebook, MessageCircle, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9b21ba33-f65e-42c4-bc39-fff4d88c3b9f", // Replace with your actual key
          name: values.name,
          email: values.email,
          message: values.message,
          subject: `New Contact from ${values.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10",
      label: "@wapdev",
    },
    {
      name: "WhatsApp",
      icon: Phone,
      href: "https://wa.me/",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/10",
      label: "Chat on WhatsApp",
    },
    {
      name: "Messenger",
      icon: Facebook,
      href: "https://m.me/",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10",
      label: "FB Messenger",
    },
  ];

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
            Let's Build Something Great
          </motion.h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Social Links Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-card p-8 rounded-3xl border border-white/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h3>
              <p className="text-gray-400 mb-8">
                Prefer a quick chat? Reach out to us directly on your favorite
                platform.
              </p>

              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 group ${social.color} ${social.bg}`}
                  >
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <social.icon size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500 font-medium">
                        {social.name}
                      </span>
                      <span className="text-white font-semibold">
                        {social.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-white/5 border-white/20 text-white h-12 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="bg-white/5 border-white/20 text-white h-12 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          {...field}
                          className="bg-white/5 border-white/20 text-white min-h-[150px] focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
