import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Facility Manager",
    company: "TechCorp India",
    rating: 5,
    text: "APS transformed our office maintenance. Their housekeeping team is professional, consistent, and always goes the extra mile. Highly recommend for any corporate facility.",
    initials: "RK",
    color: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Manufacturing Ltd.",
    rating: 5,
    text: "Three years with APS security services and not a single incident. Their caretakers are vigilant, well-trained, and genuinely professional. Great value.",
    initials: "PS",
    color: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  },
  {
    name: "Mohammed Ali",
    role: "Event Coordinator",
    company: "Eventix Solutions",
    rating: 5,
    text: "They handled our annual conference from setup to cleanup, flawlessly. Everything was on time, nothing was out of place. Will absolutely use APS again.",
    initials: "MA",
    color: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  },
  {
    name: "Sunita Patel",
    role: "HR Director",
    company: "Global Enterprises",
    rating: 5,
    text: "Their manpower solutions helped us scale quickly without the typical hiring headaches. Proper documentation, trained staff, and excellent service delivery.",
    initials: "SP",
    color: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Client Stories
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Real feedback from the organizations we serve every day across India.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="flex flex-col rounded-2xl border bg-card p-5 h-full hover-elevate">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-5">
                  <Quote className="absolute -top-1 -left-1 h-5 w-5 text-primary/15" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3 italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Person */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className={`text-xs font-bold ${t.color}`}>
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-primary font-medium">{t.company}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Summary bar */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 py-6 px-8 rounded-2xl bg-muted/50 border">
            {[
              { value: "50+", label: "Happy clients" },
              { value: "4.9/5", label: "Average rating" },
              { value: "8+", label: "Years of trust" },
              { value: "24/7", label: "Support available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
