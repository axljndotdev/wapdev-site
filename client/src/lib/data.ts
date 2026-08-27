import { Code, ShoppingBag, Layers, Monitor, Wrench } from "lucide-react";

export const services = [
  {
    title: "Custom Website Development",
    description:
      "High-performance websites built with React, Next.js, and modern technologies.",
    icon: Monitor,
  },
  {
    title: "Shopify & E-commerce",
    description:
      "Scalable online stores designed to convert visitors into customers.",
    icon: ShoppingBag,
  },
  {
    title: "WordPress CMS Sites",
    description: "Easy-to-manage websites with custom themes and plugins.",
    icon: Layers,
  },
  {
    title: "Web Apps & SaaS",
    description:
      "Complex web applications with robust functionality and user experience.",
    icon: Code,
  },
  {
    title: "Bug Fixing & Maintenance",
    description:
      "Ongoing support to keep your digital presence secure and smooth.",
    icon: Wrench,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Plan",
    description: "We analyze your needs and create a strategic roadmap.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Our developers craft your solution with clean, efficient code.",
  },
  {
    step: "03",
    title: "Launch",
    description: "We deploy your project and ensure everything runs perfectly.",
  },
];

export interface PortfolioProject {
  id: number;
  title: string;
  projectType: "Client Work" | "WAPDEV Product";
  category: "Web Applications" | "AI & Automation" | "Landing Pages & Fintech" | "E-Commerce & SaaS" | "Digital Platforms";
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics: string[];
  featured?: boolean;
  year: string;
  client: string;
}

export const portfolioItems: PortfolioProject[] = [
  {
    id: 1,
    title: "Bethesda Community Church — Church OS",
    projectType: "Client Work",
    category: "Web Applications",
    tagline: "All-in-one Church OS powering church landing page, sermon media archive & administrative backend",
    description:
      "A complete Church Operating System custom-engineered for Bethesda Community Church. The platform features an engaging public landing experience, event management, integrated sermon video archives, sermon notes, digital giving, and a powerful administrative backend for staff.",
    challenge:
      "Bethesda Community Church needed to replace disconnected third-party tools with a unified, modern platform that non-technical staff could easily maintain while providing a seamless mobile experience for members.",
    solution:
      "Architected a custom Church OS with tailored CMS capabilities, mobile-first donation workflows, real-time announcements, and an administrative backend for managing content, events, and media.",
    image:
      "/bethesda-preview.jpg",
    demoUrl: "https://bcckab.org",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Church OS"],
    metrics: ["Unified Church OS", "Custom Admin Backend", "<0.8s Page Speed"],
    featured: true,
    year: "2024",
    client: "Bethesda Community Church",
  },
  {
    id: 2,
    title: "Zekacorp — Email Intelligence System",
    projectType: "Client Work",
    category: "AI & Automation",
    tagline: "Automated email intelligence system to fetch, analyze, and classify Zoho business emails",
    description:
      "An intelligent email processing and classification pipeline developed for Zekacorp, a traffic engineering company. The system connects to Zoho Mail via APIs and webhooks to fetch incoming traffic engineering RFPs, bid notices, and municipal client dispatches, automatically analyzing and classifying each email for rapid action.",
    challenge:
      "Zekacorp's traffic engineering team handled hundreds of daily incoming inquiries and bids in Zoho Mail, creating severe bottlenecks in identifying high-priority project opportunities.",
    solution:
      "Built a secure background pipeline that automatically fetches Zoho emails, runs NLP and rule-based text analysis to classify topics, extracts key project parameters, and tags high-priority engineering bids in real time.",
    image:
      "/zekacorp-preview.jpg",
    demoUrl: "https://zekacorp-ai-intel.ai.studio/demo",
    tags: ["Node.js", "Zoho Mail API", "NLP / AI", "TypeScript", "Express", "Automation Pipeline"],
    metrics: ["Automated Zoho Sync", "Instant Email Classification", "Zero Missed Bids"],
    featured: true,
    year: "2024",
    client: "Zekacorp (Traffic Engineering)",
  },
  {
    id: 3,
    title: "CryptoConfidant — Landing Page & Booking Engine",
    projectType: "Client Work",
    category: "Landing Pages & Fintech",
    tagline: "High-converting web landing page with integrated consultation booking & automated payments",
    description:
      "A conversion-optimized web platform engineered for CryptoConfidant. Combines modern dark fintech design aesthetics with an interactive consultation booking calendar, client scheduling workflows, and secure payment processing.",
    challenge:
      "CryptoConfidant required a trusted, premium digital storefront to attract crypto consulting clients and automate the scheduling and upfront payment collection without manual friction.",
    solution:
      "Engineered an ultra-fast responsive landing page featuring interactive consultation tiers, dynamic calendar booking integrations, secure payment gateway checkout, and automatic confirmation triggers.",
    image:
      "/cryptoconfidant-preview.jpg",
    demoUrl: "https://crypto-confidant.vercel.app",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe Checkout", "Booking Flow", "Fintech UX"],
    metrics: ["Integrated Booking Flow", "Automated Payments", "<0.7s Fast Load"],
    featured: true,
    year: "2024",
    client: "CryptoConfidant",
  },
  {
    id: 4,
    title: "TapLink — NFC & Digital Business Card",
    projectType: "WAPDEV Product",
    category: "Digital Platforms",
    tagline: "WAPDEV product for NFC-enabled digital business cards with instant .vcf sync & custom hubs",
    description:
      "WAPDEV's proprietary digital business card product enabling modern professionals, founders, and teams to share contact details, portfolio links, and booking schedules with a single tap or QR scan.",
    challenge:
      "Paper business cards are quickly discarded, costly to reprint, and lack interactive digital capabilities or real-time contact synchronization.",
    solution:
      "Created an always-up-to-date mobile-first digital card engine with 1-tap direct .vcf contact saving, dynamic QR generation, customizable themes, and integrated social hubs.",
    image:
      "/taplink-preview.jpg",
    demoUrl: "/axceldigitalcard",
    tags: ["React", "vCard Engine", "Tailwind CSS", "QR Sync", "WAPDEV Product"],
    metrics: ["Zero App Required", "1-Tap Direct vCard Save", "100% Mobile Optimized"],
    featured: true,
    year: "2025",
    client: "WAPDEV In-House Product",
  },
  {
    id: 5,
    title: "ChatCart — Conversational E-Commerce",
    projectType: "WAPDEV Product",
    category: "E-Commerce & SaaS",
    tagline: "WAPDEV product for chat-driven ordering flows & high-converting conversational checkout",
    description:
      "A high-converting conversational commerce product engineered by WAPDEV, turning conventional online store browsing into an interactive chat-based ordering flow with live inventory tracking and instant payments.",
    challenge:
      "Traditional multi-step checkout funnels create high friction and cart abandonment rates on mobile devices for modern retail brands.",
    solution:
      "Built a single-screen conversational purchasing pipeline with variant selection, automated calculation of shipping/discounts, and one-tap payment processing.",
    image:
      "/chatcart-preview.jpg",
    demoUrl: "https://chatcart-home.wapdev.xyz/",
    tags: ["Next.js / React", "Stripe API", "Tailwind CSS", "WebSockets", "WAPDEV Product"],
    metrics: ["+180% Faster Checkout", "3.2x Mobile Conversion", "Interactive Chat Flow"],
    featured: true,
    year: "2024",
    client: "WAPDEV In-House Product",
  },
];
