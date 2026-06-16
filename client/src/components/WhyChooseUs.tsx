import { CheckCircle, Users, Moon, Scale, Zap, Package } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const reasons = [
  {
    icon: CheckCircle,
    title: "Fully Registered & Compliant",
    desc: "ESIC, PF, PAN and Commercial Establishment registered firm — all statutory obligations met for your peace of mind.",
  },
  {
    icon: Users,
    title: "Trained & Uniformed Staff",
    desc: "Every employee undergoes a structured induction covering service standards, safety protocols and client interaction guidelines before deployment.",
  },
  {
    icon: Moon,
    title: "Day & Night Supervision",
    desc: "Field officers conduct thorough day and night monitoring checks, assess performance, and provide on-the-spot coaching.",
  },
  {
    icon: Scale,
    title: "Government Rule Compliant",
    desc: "All charges and service terms strictly follow government-mandated labour norms and statutory requirements.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Direct communication channel with every field officer ensures rapid response for all service changes and emergency situations.",
  },
  {
    icon: Package,
    title: "One-Stop Solution",
    desc: "From housekeeping to security to event support — everything your facility needs, managed under one trusted provider.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 border-t bg-foreground text-background">
      <div className="container mx-auto px-5 sm:px-10">

        <ScrollAnimation direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase mb-3 sm:mb-4" style={{ color: "hsl(38 72% 55%)" }}>
                <span className="block w-8 h-0.5" style={{ backgroundColor: "hsl(38 72% 55%)" }} />
                Why APS
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-background tracking-tight leading-tight">
                Why Choose Us
              </h2>
            </div>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              10+ years of trust built on quality service, compliance, and putting clients first — every time.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-background/10">
          {reasons.map((r, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="border-r border-b border-background/10 p-6 sm:p-8 group hover:bg-background/5 transition-colors">
                <div className="w-11 h-11 rounded-full border-2 flex items-center justify-center mb-5 transition-colors"
                  style={{ borderColor: "hsl(38 72% 40% / 0.4)" }}>
                  <r.icon className="h-5 w-5" style={{ color: "hsl(38 72% 55%)" }} />
                </div>
                <h3 className="font-bold text-base text-background mb-2">{r.title}</h3>
                <p className="text-background/50 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Trust badges row */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              "ESIC Registered",
              "PF Compliant",
              "PAN Verified",
              "Govt. Labour Norms",
              "500+ Trained Staff",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-xs font-semibold text-background/40 border border-background/10 px-3.5 py-1.5">
                <CheckCircle className="h-3 w-3 shrink-0" style={{ color: "hsl(38 72% 55%)" }} />
                {badge}
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
