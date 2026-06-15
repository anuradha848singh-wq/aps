import { GraduationCap, Users, Clock, Shield, Target, CheckCircle } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const features = [
  {
    icon: GraduationCap,
    title: "Structured Training",
    description: "Every new hire completes a structured induction covering service standards, safety protocols, and client interaction guidelines.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Our staff are drilled in discipline, punctuality, and their designated service responsibilities — no shortcuts.",
  },
  {
    icon: Clock,
    title: "Regular Monitoring",
    description: "Field officers conduct periodic day and night checks, assess performance, and provide on-the-spot coaching.",
  },
  {
    icon: Shield,
    title: "Emergency Readiness",
    description: "All teams are trained for rapid-response scenarios, ensuring safety and minimal disruption during emergencies.",
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
    <section id="training" className="py-16 sm:py-24 border-t bg-muted/20">
      <div className="container mx-auto px-6 sm:px-10">

        <ScrollAnimation direction="up">
          <div className="mb-12 sm:mb-16">
            <div className="gold-label mb-4">Training & Quality</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight max-w-xl">
              People Who Take Pride in Their Work
            </h2>
          </div>
        </ScrollAnimation>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t mb-12 sm:mb-16">
          {features.map((f, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="border-r border-b p-6 sm:p-7 group hover:bg-background transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-5 transition-colors">
                  <f.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Two-col detail */}
        <div className="grid lg:grid-cols-2 gap-0 border-l border-t">
          <ScrollAnimation direction="left">
            <div className="border-r border-b p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <Target className="h-4 w-4 text-primary" />
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
              <div className="mt-5 inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-2 text-xs text-primary font-medium">
                <CheckCircle className="h-3.5 w-3.5" /> Professionally trained at every level
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="border-r border-b p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="font-bold text-lg">Quality Standards</h3>
              </div>
              <div className="space-y-3">
                {qualityPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
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
