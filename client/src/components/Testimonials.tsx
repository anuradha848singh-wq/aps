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
  },
  {
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Manufacturing Ltd.",
    rating: 5,
    text: "Three years with APS security services and not a single incident. Their caretakers are vigilant, well-trained, and genuinely professional. Great value.",
    initials: "PS",
  },
  {
    name: "Mohammed Ali",
    role: "Event Coordinator",
    company: "Eventix Solutions",
    rating: 5,
    text: "They handled our annual conference from setup to cleanup, flawlessly. Everything was on time, nothing was out of place. Will absolutely use APS again.",
    initials: "MA",
  },
  {
    name: "Sunita Patel",
    role: "HR Director",
    company: "Global Enterprises",
    rating: 5,
    text: "Their manpower solutions helped us scale quickly without the typical hiring headaches. Proper documentation, trained staff, and excellent service delivery.",
    initials: "SP",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-6 sm:px-10">

        <ScrollAnimation direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="gold-label mb-4">Client Stories</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                What Our Clients Say
              </h2>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {[
                { value: "50+", label: "Happy clients" },
                { value: "4.9", label: "Avg. rating" },
                { value: "8+", label: "Years trusted" },
              ].map((stat) => (
                <div key={stat.label} className="text-right">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t">
          {testimonials.map((t, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.08}>
              <div className="flex flex-col border-r border-b p-6 sm:p-7 h-full hover:bg-muted/20 transition-colors">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-5">
                  <Quote className="absolute -top-1 -left-0.5 h-5 w-5 text-primary/15" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3 italic">
                    "{t.text}"
                  </p>
                </div>

                {/* Person */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-primary font-medium">{t.company}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
