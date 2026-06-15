import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brush, Shield, Calendar, Users, Building, Coffee, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "./ScrollAnimation"
import housekeepingImage from "@assets/generated_images/Indian_APS_housekeeping_team_a0f857bb.png"
import securityImage from "@assets/generated_images/Indian_APS_security_team_bd74dba7.png"
import eventImage from "@assets/generated_images/Indian_APS_event_management_6454c28d.png"

const services = [
  {
    id: "security",
    title: "Security Services",
    desc: "Trained security personnel for all types of premises and industries.",
    icon: Shield,
    image: securityImage,
    features: ["24/7 security monitoring", "Trained security guards", "Access control", "Emergency response", "Facility caretaking"],
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    desc: "Professional cleaning and hygiene solutions for every environment.",
    icon: Brush,
    image: housekeepingImage,
    features: ["Daily cleaning & sanitization", "Deep cleaning", "Specialized floor care", "Waste management", "Eco-friendly products"],
  },
  {
    id: "facility",
    title: "Facility Management",
    desc: "End-to-end facility management services to ensure smooth operations.",
    icon: Building,
    image: "",
    features: ["Industrial maintenance", "Residential management", "M&E services", "Grounds keeping", "Facility optimization"],
  },
  {
    id: "staffing",
    title: "Staffing Solutions",
    desc: "Flexible staffing solutions tailored to your business requirements.",
    icon: Users,
    image: "",
    features: ["Temp & permanent staffing", "Skilled workforce", "Training programs", "HR & payroll", "Legal compliance"],
  },
  {
    id: "events",
    title: "Event Management",
    desc: "End-to-end event planning and execution for corporate events.",
    icon: Calendar,
    image: eventImage,
    features: ["Corporate event planning", "Conference setup", "AV management", "Catering coordination", "Post-event cleanup"],
  },
  {
    id: "canteen",
    title: "Canteen & Pantry",
    desc: "Complete food service management for corporate facilities.",
    icon: Coffee,
    image: "",
    features: ["Menu planning", "Kitchen staff", "Food safety", "Inventory management", "Nutritional planning"],
  },
]

export default function Services() {
  const [active, setActive] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-6 sm:px-10">

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
            <div className="flex-1 max-w-xs sm:max-w-sm">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Comprehensive manpower solutions designed to meet your business needs.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-primary pb-0.5 hover:opacity-80 transition-opacity group"
              >
                View All Services
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t">
          {services.map((s, i) => (
            <ScrollAnimation key={s.id} delay={i * 0.06} direction="up">
              <div
                className="border-r border-b p-6 sm:p-7 cursor-pointer group hover:bg-muted/40 transition-colors relative"
                onClick={() => setActive(s)}
              >
                {/* Icon */}
                <div className="w-11 h-11 border-2 border-border group-hover:border-primary/50 rounded-full flex items-center justify-center mb-5 transition-colors">
                  <s.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-bold text-base text-foreground mb-2 leading-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

                <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Always visible arrow at bottom */}
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6">
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Detail panel */}
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Includes</p>
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
