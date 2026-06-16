import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brush, Shield, Calendar, Users, Building, Coffee, Heart, UserCheck, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "./ScrollAnimation"
import housekeepingImage from "@assets/generated_images/Indian_APS_housekeeping_team_a0f857bb.png"
import securityImage from "@assets/generated_images/Indian_APS_security_team_bd74dba7.png"
import eventImage from "@assets/generated_images/Indian_APS_event_management_6454c28d.png"

const services = [
  {
    id: "housekeeping",
    title: "Housekeeping & Cleaning",
    desc: "Professional cleaning and hygiene solutions for offices, hospitals, malls, factories and residences.",
    icon: Brush,
    image: housekeepingImage,
    features: ["Daily cleaning & sanitisation", "Deep cleaning services", "Specialised floor care", "Waste management", "Eco-friendly products"],
  },
  {
    id: "industrial",
    title: "Industrial Facility Management",
    desc: "End-to-end facility services for factories, commercial establishments and large-scale operations.",
    icon: Building,
    image: "",
    features: ["Industrial maintenance", "Grounds keeping", "M&E services", "Facility optimisation", "Compliance management"],
  },
  {
    id: "security",
    title: "Security Guard / Bouncer",
    desc: "Trained, uniformed security personnel for premises protection and event crowd management.",
    icon: Shield,
    image: securityImage,
    features: ["24/7 security monitoring", "Trained & verified guards", "Access control", "Emergency response", "Event security"],
  },
  {
    id: "supervisor",
    title: "Supervisor & Gunman",
    desc: "Experienced supervisors and licensed armed guards deployed as per your specific requirement.",
    icon: UserCheck,
    image: "",
    features: ["Licensed gunmen", "Supervisory staff", "Shift management", "Incident reporting", "Team leadership"],
  },
  {
    id: "canteen",
    title: "Canteen & Pantry",
    desc: "Fully managed canteen and pantry services for corporate clients and industrial facilities.",
    icon: Coffee,
    image: "",
    features: ["Menu planning", "Kitchen staff supply", "Food safety compliance", "Inventory management", "Nutritional catering"],
  },
  {
    id: "events",
    title: "Event Management Support",
    desc: "Reliable manpower support for corporate events, conferences, exhibitions and public gatherings.",
    icon: Calendar,
    image: eventImage,
    features: ["Setup & breakdown crew", "Ushering & coordination", "AV & logistics support", "Catering coordination", "Post-event cleanup"],
  },
  {
    id: "hospital",
    title: "Hospital & Healthcare",
    desc: "Trained hospital attendants, patient support staff and biohazard waste handling professionals.",
    icon: Heart,
    image: "",
    features: ["Ward attendants", "Patient assistance", "Biohazard waste handling", "OT support staff", "Hygiene compliance"],
  },
  {
    id: "caretaker",
    title: "Caretaker Outsourcing",
    desc: "Dedicated, trained caretakers for townships, residential complexes and commercial premises.",
    icon: Users,
    image: "",
    features: ["Residential caretaking", "Township management", "Common area upkeep", "Tenant coordination", "24/7 availability"],
  },
]

export default function Services() {
  const [active, setActive] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-5 sm:px-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <ScrollAnimation direction="up">
            <div>
              <div className="gold-label mb-3 sm:mb-4">What We Do</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                Our Services
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="flex-1 max-w-sm">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Comprehensive facility management and manpower solutions — designed for factories, malls, offices, hospitals and residences across Indore and MP.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-primary pb-0.5 hover:opacity-80 transition-opacity group"
              >
                Request a Service
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* 8-card grid: 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t">
          {services.map((s, i) => (
            <ScrollAnimation key={s.id} delay={i * 0.05} direction="up">
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
                className="border-r border-b p-4 sm:p-6 lg:p-7 cursor-pointer group bg-background relative min-h-[160px] sm:min-h-[200px] transition-colors"
                onClick={() => setActive(s)}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 border-2 border-border group-hover:border-primary/50 rounded-full flex items-center justify-center mb-3 sm:mb-5 transition-colors"
                >
                  <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
                <h3 className="font-bold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2 leading-tight">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed hidden sm:block">{s.desc}</p>
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5">
                  <motion.div whileHover={{ x: 5 }}>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Tap any service card for details
        </p>
      </div>

      {/* Detail sheet */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              className="relative bg-background w-full sm:max-w-md rounded-t-2xl sm:rounded-xl shadow-2xl overflow-hidden max-h-[88svh] overflow-y-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              {active.image && (
                <div className="h-44 overflow-hidden">
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border-2 border-primary/30 rounded-full flex items-center justify-center">
                      <active.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-black text-lg">{active.title}</h3>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => setActive(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{active.desc}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What's Included</p>
                  {active.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={() => { setActive(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}
                >
                  Request This Service <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
