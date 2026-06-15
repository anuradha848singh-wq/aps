import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brush, Shield, Calendar, Users, Building, Coffee, ChevronRight, X } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"
import housekeepingImage from "@assets/generated_images/Indian_APS_housekeeping_team_a0f857bb.png"
import securityImage from "@assets/generated_images/Indian_APS_security_team_bd74dba7.png"
import eventImage from "@assets/generated_images/Indian_APS_event_management_6454c28d.png"

const services = [
  {
    id: "housekeeping",
    title: "Housekeeping & Cleaning",
    shortDesc: "Spotless spaces, every day",
    description: "Comprehensive cleaning and sanitization for offices, factories, malls, and residential complexes. Our trained housekeeping staff use professional equipment and eco-friendly products.",
    icon: Brush,
    image: housekeepingImage,
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-600",
    badge: "Most Popular",
    features: ["Daily cleaning & sanitization", "Deep cleaning services", "Specialized floor care", "Waste management", "Eco-friendly products"],
  },
  {
    id: "security",
    title: "Security & Caretaker",
    shortDesc: "Vigilant protection 24/7",
    description: "Professionally trained security personnel and caretakers to protect your assets, operations, and personnel. Available round-the-clock with emergency response protocols.",
    icon: Shield,
    image: securityImage,
    color: "from-slate-500/10 to-slate-600/5",
    accent: "text-slate-600",
    badge: "24/7",
    features: ["24/7 security monitoring", "Trained security guards", "Facility caretaking", "Emergency response", "Access control"],
  },
  {
    id: "events",
    title: "Event Management",
    shortDesc: "Flawless events, every time",
    description: "End-to-end event planning and execution for corporate conferences, meetings, seminars, and private events. We handle logistics so you can focus on what matters.",
    icon: Calendar,
    image: eventImage,
    color: "from-purple-500/10 to-purple-600/5",
    accent: "text-purple-600",
    badge: "",
    features: ["Corporate event planning", "Conference setup", "AV equipment management", "Catering coordination", "Post-event cleanup"],
  },
  {
    id: "manpower",
    title: "Manpower Solutions",
    shortDesc: "Right people, right place",
    description: "Skilled and unskilled workforce deployment for diverse operational needs. We handle hiring, training, compliance, and payroll management.",
    icon: Users,
    image: "",
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-600",
    badge: "",
    features: ["Temp & permanent staffing", "Skilled workforce", "Training programs", "HR & payroll", "Legal compliance"],
  },
  {
    id: "facility",
    title: "Industrial & Residential",
    shortDesc: "Complete facility care",
    description: "Specialized maintenance and management for factories, townships, offices, and residential complexes. We ensure smooth operations at every level.",
    icon: Building,
    image: "",
    color: "from-orange-500/10 to-orange-600/5",
    accent: "text-orange-600",
    badge: "",
    features: ["Industrial maintenance", "Residential management", "M&E services", "Grounds keeping", "Facility optimization"],
  },
  {
    id: "canteen",
    title: "Canteen & Pantry",
    shortDesc: "Nourishing your workforce",
    description: "Complete food service management for corporate and institutional facilities. From menu planning to kitchen operations, we ensure hygienic and nutritious meals.",
    icon: Coffee,
    image: "",
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-600",
    badge: "",
    features: ["Menu planning", "Kitchen staff management", "Food safety & hygiene", "Inventory management", "Nutritional planning"],
  },
]

export default function Services() {
  const [active, setActive] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              What We Do
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Services Built Around <span className="text-primary">Your Needs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              From daily housekeeping to complex facility management, we deliver consistent quality across every service we offer.
            </p>
          </div>
        </ScrollAnimation>

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} delay={index * 0.07} direction="up">
              <Card
                className={`group cursor-pointer border hover-elevate transition-all duration-300 bg-gradient-to-br ${service.color} overflow-hidden`}
                onClick={() => setActive(service)}
              >
                {/* Image if available */}
                {service.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {service.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                )}
                <CardContent className={`p-5 ${!service.image && service.badge ? "pt-4" : ""}`}>
                  {!service.image && service.badge && (
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs" variant="outline">
                      {service.badge}
                    </Badge>
                  )}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-background shadow-sm ${service.accent} shrink-0`}>
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base leading-tight">{service.title}</h3>
                      <p className={`text-xs mt-0.5 font-medium ${service.accent}`}>{service.shortDesc}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {service.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs bg-background/80 border rounded-full px-2 py-0.5 text-muted-foreground">{f}</span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-muted-foreground px-1">+{service.features.length - 3} more</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Service detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              className="relative bg-background w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90svh] overflow-y-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {active.image && (
                <div className="relative h-48">
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-muted ${active.accent}`}>
                      <active.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{active.title}</h3>
                      <p className={`text-sm font-medium ${active.accent}`}>{active.shortDesc}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="shrink-0" onClick={() => setActive(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{active.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold">What's Included</p>
                  {active.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setActive(null)
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Request This Service
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
