import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, MapPin, Clock } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"
import heroImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"

const stats = [
  { icon: Users, value: 200, suffix: "+", label: "Trained Employees" },
  { icon: Building2, value: 50, suffix: "+", label: "Corporate Clients" },
  { icon: MapPin, value: 8, suffix: "+", label: "Years in Service" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Services" },
]

export default function EnhancedHero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Split layout */}
      <div className="grid lg:grid-cols-[55%_45%] min-h-[calc(100svh-4.5rem)]">

        {/* Left: Content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-14 lg:py-0 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="gold-label mb-5 sm:mb-6">
              Trusted Manpower Solutions
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Building Workforce.
            <br />
            <span className="text-foreground/90">Delivering</span>{" "}
            <span className="text-primary">Excellence.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            APS Manpower Services is a leading provider of integrated manpower solutions across Security, Housekeeping, Facility Management and Staffing Services.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-3 bg-foreground text-background font-semibold text-sm px-6 py-3.5 hover:bg-foreground/90 transition-colors group"
              data-testid="cta-our-services"
            >
              Our Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-3 text-foreground font-semibold text-sm border-b-2 border-foreground pb-0.5 hover:border-primary hover:text-primary transition-colors group"
              data-testid="cta-contact"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="relative order-1 lg:order-2 h-60 sm:h-80 lg:h-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImage}
            alt="APS professional team"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle vertical dots accent */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="border-t bg-muted/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-5 sm:py-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0">
                <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-foreground tabular-nums">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
