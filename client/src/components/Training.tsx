import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Clock, Shield, Target, CheckCircle } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const features = [
  {
    icon: GraduationCap,
    title: "Structured Training",
    description: "Every new hire completes a structured induction covering service standards, safety protocols, and client interaction guidelines.",
    color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Our staff are drilled in discipline, punctuality, and their designated service responsibilities — no shortcuts.",
    color: "bg-purple-50 dark:bg-purple-950/40 text-purple-600",
  },
  {
    icon: Clock,
    title: "Regular Monitoring",
    description: "Field officers conduct periodic day and night checks, assess performance, and provide on-the-spot coaching.",
    color: "bg-amber-50 dark:bg-amber-950/40 text-amber-600",
  },
  {
    icon: Shield,
    title: "Emergency Readiness",
    description: "All teams are trained for rapid-response scenarios, ensuring safety and minimal disruption during emergencies.",
    color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600",
  },
]

const qualityPoints = [
  "Background-verified staff across all service categories",
  "Direct communication line with every field officer",
  "Comprehensive supervision and mentoring framework",
  "Client feedback loops to continuously raise the bar",
  "Swift deployment and onboarding for urgent requirements",
  "Regular refresher training and skill upgradation",
]

export default function Training() {
  return (
    <section id="training" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">

        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Training & Quality
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              People Who Take <span className="text-primary">Pride in Their Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Every APS employee goes through rigorous training before deployment. Quality isn't a checkbox — it's our culture.
            </p>
          </div>
        </ScrollAnimation>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {features.map((f, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="rounded-2xl border bg-card p-5 hover-elevate transition-all">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${f.color}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Two-col detail */}
        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollAnimation direction="left">
            <div className="rounded-2xl border bg-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Training Commitment</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  We deploy a <strong className="text-foreground">professionally trained and motivated task force</strong> to safeguard your assets, operations, and personnel under any circumstance.
                </p>
                <p>
                  Field officers maintain direct communication with every team member, delivering on-ground coaching and ensuring service consistency across every shift.
                </p>
                <p>
                  Our supervision philosophy integrates support, guidance, and professional development — not just compliance.
                </p>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 text-xs text-primary font-medium">
                <CheckCircle className="h-3.5 w-3.5" /> Professionally trained at every level
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="rounded-2xl border bg-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg">Quality Standards</h3>
              </div>
              <div className="space-y-3">
                {qualityPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
