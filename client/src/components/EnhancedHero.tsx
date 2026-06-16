import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Users, Building2, MapPin, Clock } from "lucide-react"
import { useRef } from "react"
import AnimatedCounter from "./AnimatedCounter"
import heroImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"
import { useSiteContent } from "@/hooks/useSiteContent"

const iconMap = [Users, Building2, MapPin, Clock]

// Component to split text into words for staggered animation
const StaggeredText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className="inline-block mr-[0.25em]"
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function EnhancedHero() {
  const { content } = useSiteContent()
  const { hero } = content
  const targetRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section ref={targetRef} className="relative bg-background overflow-hidden">
      {/* Split layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%] min-h-[calc(100svh-4.5rem)] relative z-10">

        {/* Left: Content */}
        <motion.div 
          style={{ y: textY }}
          className="flex flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-0 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="gold-label mb-4 sm:mb-5">
              {hero.badge}
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-foreground leading-[1.05] tracking-tight mb-4 sm:mb-5 flex flex-col">
            <StaggeredText text={hero.title1} />
            <span className="mt-2">
              <StaggeredText text={hero.title2.split(' ').slice(0, -1).join(' ')} className="text-foreground/90" />
              <StaggeredText text={hero.title2.split(' ').at(-1) || ''} className="text-primary" />
            </span>
          </h1>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7 sm:mb-9 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
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
        </motion.div>

        {/* Right: Image */}
        <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          className="relative order-1 lg:order-2 h-52 sm:h-72 lg:h-auto min-h-[200px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImage}
            alt="APS professional team"
            className="w-full h-full object-cover object-center rounded-bl-[100px] shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="border-t bg-muted/30 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
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
