import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Shield, Award, Users, Clock } from "lucide-react"
import teamImage from "@assets/generated_images/Indian_APS_security_team_bd74dba7.png"

const points = [
  { icon: Shield, title: "Trusted Protection", desc: "8+ years keeping facilities secure across India." },
  { icon: Award, title: "Quality-Driven", desc: "Continuous training and quality monitoring built-in." },
  { icon: Users, title: "Expert Team", desc: "200+ trained, verified professionals on the ground." },
  { icon: Clock, title: "Always Available", desc: "24/7 support and emergency response as standard." },
]

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img src={teamImage} alt="" className="w-full h-full object-cover scale-110" aria-hidden />
        <div className="absolute inset-0 bg-foreground/80" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10">
        <motion.div
          className="mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">Why APS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight max-w-xl">
            Your Trusted Partner in Facility Management
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-white/10">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="border-r border-b border-white/10 p-6 sm:p-7 group hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-11 h-11 rounded-full border-2 border-white/20 group-hover:border-primary/60 flex items-center justify-center mb-5 transition-colors">
                <p.icon className="h-5 w-5 text-white/60 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold text-white mb-2">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
