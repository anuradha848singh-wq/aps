import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Award, CheckCircle, Building, Users, Star } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"
import teamImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Provide high-quality facility services while continuously upskilling our frontline executives through structured training programs.",
      color: "bg-blue-50 dark:bg-blue-950/30 text-blue-600",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Become India's most trusted professional manpower provider by consistently exceeding client expectations and nurturing every employee.",
      color: "bg-purple-50 dark:bg-purple-950/30 text-purple-600",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in going beyond the brief — pleasantly surprising both our clients and staff by delivering more than what was promised.",
      color: "bg-rose-50 dark:bg-rose-950/30 text-rose-600",
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

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Who We Are
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              A Company Built on <span className="text-primary">Trust & Quality</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Since 2016, APS has been helping organizations across India keep their facilities safe, clean, and running smoothly.
            </p>
          </div>
        </ScrollAnimation>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center mb-16">

          {/* Image side */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img
                  src={teamImage}
                  alt="APS facility management team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-background border rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-primary" />
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
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Assistance Protection and Services (APS)</strong> is a specialized service provider delivering housekeeping, security, event management, caretaker outsourcing, and comprehensive manpower services to clients across India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with factories, shopping malls, townships, corporate offices, and residences — bringing the same commitment to quality regardless of client size.
              </p>
              <div className="space-y-3 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <h.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{h.text}</span>
                  </div>
                ))}
              </div>

              {/* Registrations */}
              <div className="bg-muted/40 rounded-xl p-4 mt-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">Legal Registrations</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {registrations.map((r) => (
                    <div key={r.label} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
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
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {values.map((v, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.1}>
              <div className="p-6 rounded-2xl border bg-card hover-elevate transition-all">
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${v.color}`}>
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
