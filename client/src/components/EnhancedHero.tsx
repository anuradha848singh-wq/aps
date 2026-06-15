import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, MessageCircle, ChevronDown, Star, CheckCircle } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"
import heroImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"

export default function EnhancedHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Happy Clients" },
    { value: 200, suffix: "+", label: "Trained Staff" },
    { value: 24, suffix: "/7", label: "Support" },
  ]

  const highlights = [
    "Housekeeping & Cleaning",
    "Security Services",
    "Event Management",
    "Manpower Solutions",
  ]

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImage}
          alt="APS team of professionals"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Subtle animated orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 bg-primary"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-8 pb-20">
        <div className="max-w-3xl">

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-white/90 text-xs font-medium">Trusted Facility Management — Since 2016</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            One-Stop Solution
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              for Protection &amp;
            </span>
            <br />
            <span className="text-white/95">Services</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg text-white/80 mb-6 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            APS delivers professional facility management across India — from housekeeping and security to event management and manpower.
          </motion.p>

          {/* Service pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5 text-xs text-white/80 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1">
                <CheckCircle className="h-3 w-3 text-emerald-400 shrink-0" /> {h}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 border-0 font-semibold"
              data-testid="cta-get-quote"
            >
              Get Free Quote
            </Button>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors shadow-lg"
              data-testid="cta-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
              data-testid="cta-call"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 text-center hover:bg-white/15 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/60 hover:text-white/90 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        data-testid="scroll-indicator"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.button>
    </section>
  )
}
