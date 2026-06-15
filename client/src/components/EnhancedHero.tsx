import { motion } from "framer-motion"
import { ArrowRight, Users, Building2, MapPin, Clock } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"
import heroImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"
import { useSiteContent } from "@/hooks/useSiteContent"

const iconMap = [Users, Building2, MapPin, Clock]

export default function EnhancedHero() {
  const { content } = useSiteContent()
  const { hero } = content

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Split layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%] min-h-[calc(100svh-4.5rem)]">

        {/* Left: Content */}
        <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-0 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="gold-label mb-4 sm:mb-5">
              {hero.badge}
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {hero.title1}
            <br />
            <span className="text-foreground/90">{hero.title2.split(' ').slice(0, -1).join(' ')}</span>{" "}
            <span className="text-primary">{hero.title2.split(' ').at(-1)}</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7 sm:mb-9 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-2.5 bg-foreground text-background font-semibold text-sm px-5 py-3 sm:px-6 sm:py-3.5 hover:bg-foreground/90 transition-colors group"
              data-testid="cta-our-services"
            >
              Our Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2.5 text-foreground font-semibold text-sm border-b-2 border-foreground pb-0.5 hover:border-primary hover:text-primary transition-colors group"
              data-testid="cta-contact"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="relative order-1 lg:order-2 h-52 sm:h-72 lg:h-auto min-h-[200px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImage}
            alt="APS professional team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {hero.stats.map((stat, i) => {
            const Icon = iconMap[i] ?? Users
            return (
              <div key={i} className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-foreground tabular-nums leading-none">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
