import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Shield, Award, Users, Clock } from "lucide-react"
import teamImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"

const points = [
  { icon: Shield, title: "Trusted Protection", desc: "8+ years keeping facilities secure across India.", color: "text-blue-500" },
  { icon: Award, title: "Quality-Driven", desc: "Continuous training and quality monitoring built-in.", color: "text-emerald-500" },
  { icon: Users, title: "Expert Team", desc: "200+ trained, verified professionals on the ground.", color: "text-purple-500" },
  { icon: Clock, title: "Always Available", desc: "24/7 support and emergency response as standard.", color: "text-amber-500" },
]

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img src={teamImage} alt="" className="w-full h-full object-cover scale-110" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">Why APS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Your <span className="text-primary">Trusted Partner</span> in Facility Management
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Professional excellence, reliable delivery, and people who genuinely care about your facility.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/15 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 mb-4 ${p.color}`}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
