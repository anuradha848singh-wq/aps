import { Target, Eye, Heart, Award, CheckCircle, Building, Users, Star } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"
import teamImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Provide high-quality facility services while continuously upskilling our frontline executives through structured training programs.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "Become India's most trusted professional manpower provider by consistently exceeding client expectations and nurturing every employee.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We believe in going beyond the brief — pleasantly surprising both our clients and staff by delivering more than what was promised.",
  },
]

const registrations = [
  { label: "ESIC Registration", value: "18000318980001099" },
  { label: "PF Registration", value: "MPIND1982610000" },
  { label: "PAN Number", value: "EVTPS1296E" },
  { label: "Trade Registration", value: "INDO240410SE004049" },
]

const highlights = [
  { icon: Building, text: "Serving factories, malls & residential complexes" },
  { icon: Users, text: "200+ trained, background-verified professionals" },
  { icon: Star, text: "One-stop shop for all facility needs" },
  { icon: Award, text: "Fully registered & legally compliant" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-20">

          {/* Image side */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={teamImage}
                  alt="APS facility management team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-background border shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-sm">Fully Compliant</div>
                  <div className="text-xs text-muted-foreground">Govt. Registered</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Text side */}
          <ScrollAnimation direction="right">
            <div>
              <div className="gold-label mb-4 sm:mb-5">Who We Are</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-5">
                A Company Built on<br />Trust & Quality
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                <strong className="text-foreground">Assistance Protection and Services (APS)</strong> is a specialized service provider delivering housekeeping, security, event management, caretaker outsourcing, and comprehensive manpower services to clients across India.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                We work with factories, shopping malls, townships, corporate offices, and residences — bringing the same commitment to quality regardless of client size.
              </p>
              <div className="space-y-3 mb-6">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full border-2 border-border flex items-center justify-center shrink-0">
                      <h.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{h.text}</span>
                  </div>
                ))}
              </div>

              <div className="border bg-muted/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">Legal Registrations</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {registrations.map((r) => (
                    <div key={r.label} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-medium">{r.label}</div>
                        <div className="text-xs text-muted-foreground font-mono">{r.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid sm:grid-cols-3 gap-0 border-l border-t">
          {values.map((v, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.1}>
              <div className="p-6 sm:p-8 border-r border-b hover:bg-muted/30 transition-colors group">
                <div className="w-11 h-11 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-5 transition-colors">
                  <v.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-base mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
