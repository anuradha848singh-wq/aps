import { Badge } from "@/components/ui/badge"
import { Heart, Clock, CheckCircle, MessageSquare, TrendingUp, Shield } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const features = [
  {
    icon: Heart,
    title: "Client-First Always",
    description: "We proactively reassess service quality and identify each client's evolving needs before they have to ask.",
    color: "bg-rose-50 dark:bg-rose-950/40 text-rose-600",
  },
  {
    icon: Clock,
    title: "Day & Night Checks",
    description: "Supervisors conduct scheduled and surprise audits across all shifts to ensure consistent delivery.",
    color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Proactive contract management and robust improvement measures keep our standards high.",
    color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600",
  },
  {
    icon: MessageSquare,
    title: "Open Feedback Loop",
    description: "We actively invite client suggestions and act on them — every piece of feedback makes us better.",
    color: "bg-purple-50 dark:bg-purple-950/40 text-purple-600",
  },
]

const steps = [
  { n: "01", title: "Assess", desc: "Identify client needs proactively" },
  { n: "02", title: "Monitor", desc: "Day & night quality checks" },
  { n: "03", title: "Engage", desc: "Collect and review feedback" },
  { n: "04", title: "Improve", desc: "Implement enhancements swiftly" },
]

export default function CustomerSatisfaction() {
  return (
    <section id="customer-satisfaction" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Customer Focus
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Satisfaction Is Not a <span className="text-primary">Metric — It's a Habit</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              At APS, exceeding client expectations is baked into our daily operations — not just a promise on paper.
            </p>
          </div>
        </ScrollAnimation>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {features.map((f, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="p-5 rounded-2xl border bg-card hover-elevate h-full">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${f.color}`}>
                  <f.icon className="h-4.5 w-4.5 h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Process flow */}
        <ScrollAnimation direction="up" delay={0.15}>
          <div className="rounded-2xl border bg-muted/30 p-6 sm:p-8 mb-8">
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-8">Our Satisfaction Process</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-3 shadow-sm">
                    {s.n}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-6 left-[calc(50%+24px)] right-0 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Promise quote */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-6 sm:p-8 text-center">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <blockquote className="text-base sm:text-lg italic text-muted-foreground max-w-2xl mx-auto mb-5">
              "Our company highly values customers and their feedback. We expect our customers to contact our dedicated service representatives for any inquiries — and we commit to acting, not just listening."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1.5">
                <TrendingUp className="h-3 w-3" /> Continuous Improvement
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full px-3 py-1.5">
                <MessageSquare className="h-3 w-3" /> Direct Communication
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-full px-3 py-1.5">
                <Clock className="h-3 w-3" /> Swift Response
              </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
