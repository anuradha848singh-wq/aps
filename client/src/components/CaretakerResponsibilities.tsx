import { Badge } from "@/components/ui/badge"
import { Eye, AlertTriangle, Zap, FileText, Phone, Search, Users, UserCheck, Settings, ShieldAlert } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const duties = [
  { icon: Eye, title: "Be Visible", desc: "Maintain a presence throughout the facility at all times.", color: "text-blue-600 bg-blue-50 dark:bg-blue-950/40" },
  { icon: AlertTriangle, title: "Stay Vigilant", desc: "Remain alert to security and safety risks at all times.", color: "text-orange-600 bg-orange-50 dark:bg-orange-950/40" },
  { icon: Zap, title: "Rapid Response", desc: "Act immediately during emergencies or dangerous situations.", color: "text-red-600 bg-red-50 dark:bg-red-950/40" },
  { icon: FileText, title: "Observe & Report", desc: "Monitor and document incidents or irregularities promptly.", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40" },
  { icon: Phone, title: "Coordinate Help", desc: "Liaise with emergency services and management as needed.", color: "text-purple-600 bg-purple-50 dark:bg-purple-950/40" },
  { icon: Search, title: "Inspect & Monitor", desc: "Conduct regular facility and equipment inspections.", color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40" },
  { icon: Users, title: "Maintain Order", desc: "Ensure orderly conduct and manage crowds professionally.", color: "text-teal-600 bg-teal-50 dark:bg-teal-950/40" },
  { icon: UserCheck, title: "Welcome Guests", desc: "Assist and guide visitors with professionalism and warmth.", color: "text-pink-600 bg-pink-50 dark:bg-pink-950/40" },
  { icon: Settings, title: "Special Duties", desc: "Execute additional tasks assigned by facility management.", color: "text-yellow-600 bg-yellow-50 dark:bg-yellow-950/40" },
  { icon: ShieldAlert, title: "Safety Guidance", desc: "Provide safety warnings and preventive tips proactively.", color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40" },
]

export default function CaretakerResponsibilities() {
  return (
    <section id="caretaker-responsibilities" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">

        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Caretaker Duties
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Caretakers Do Every Day</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Our caretakers are trained to a clear set of responsibilities — so you always know exactly what to expect.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {duties.map((d, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.05}>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl border bg-card hover-elevate">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${d.color}`}>
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-muted-foreground mb-1.5">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-semibold text-xs sm:text-sm leading-snug mb-1.5">{d.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{d.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="rounded-2xl bg-card border p-6 text-center">
            <p className="font-semibold text-base mb-2">Professional Excellence, Every Shift</p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Each responsibility is carried out with precision, care, and a commitment to keeping your facility secure and running smoothly — day and night.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
