import { Heart, Clock, CheckCircle, MessageSquare, TrendingUp, Shield } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const features = [
  {
    icon: Heart,
    title: "Client-First Always",
    description: "We proactively reassess service quality and identify each client's evolving needs before they have to ask.",
  },
  {
    icon: Clock,
    title: "Day & Night Checks",
    description: "Supervisors conduct scheduled and surprise audits across all shifts to ensure consistent delivery.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Proactive contract management and robust improvement measures keep our standards high.",
  },
  {
    icon: MessageSquare,
    title: "Open Feedback Loop",
    description: "We actively invite client suggestions and act on them — every piece of feedback makes us better.",
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
    <section id="customer-satisfaction" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-6 sm:px-10">

        <ScrollAnimation direction="up">
          <div className="mb-12 sm:mb-16">
            <div className="gold-label mb-4">Customer Focus</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight max-w-xl">
              Satisfaction Is Not a Metric — It's a Habit
            </h2>
          </div>
        </ScrollAnimation>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t mb-12">
          {features.map((f, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="border-r border-b p-6 sm:p-7 group hover:bg-muted/30 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-5 transition-colors">
                  <f.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Process flow */}
        <ScrollAnimation direction="up" delay={0.15}>
          <div className="border bg-muted/20 p-6 sm:p-10 mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-8 text-center">Our Satisfaction Process</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-3">
                    {s.n}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{s.title}</h4>
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
          <div className="border border-primary/20 bg-primary/5 p-6 sm:p-10 text-center">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <blockquote className="text-base sm:text-lg italic text-muted-foreground max-w-2xl mx-auto mb-5">
              "Our company highly values customers and their feedback. We expect our customers to contact our dedicated service representatives for any inquiries — and we commit to acting, not just listening."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { icon: TrendingUp, label: "Continuous Improvement" },
                { icon: MessageSquare, label: "Direct Communication" },
                { icon: Clock, label: "Swift Response" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/30 px-3 py-1.5">
                  <Icon className="h-3 w-3" /> {label}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
