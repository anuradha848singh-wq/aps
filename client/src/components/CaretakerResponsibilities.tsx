import { Eye, AlertTriangle, Zap, FileText, Phone, Search, Users, UserCheck, Settings, ShieldAlert } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const duties = [
  { icon: Eye, title: "Be Visible", desc: "Maintain a presence throughout the facility at all times." },
  { icon: AlertTriangle, title: "Stay Vigilant", desc: "Remain alert to security and safety risks at all times." },
  { icon: Zap, title: "Rapid Response", desc: "Act immediately during emergencies or dangerous situations." },
  { icon: FileText, title: "Observe & Report", desc: "Monitor and document incidents or irregularities promptly." },
  { icon: Phone, title: "Coordinate Help", desc: "Liaise with emergency services and management as needed." },
  { icon: Search, title: "Inspect & Monitor", desc: "Conduct regular facility and equipment inspections." },
  { icon: Users, title: "Maintain Order", desc: "Ensure orderly conduct and manage crowds professionally." },
  { icon: UserCheck, title: "Welcome Guests", desc: "Assist and guide visitors with professionalism and warmth." },
  { icon: Settings, title: "Special Duties", desc: "Execute additional tasks assigned by facility management." },
  { icon: ShieldAlert, title: "Safety Guidance", desc: "Provide safety warnings and preventive tips proactively." },
]

export default function CaretakerResponsibilities() {
  return (
    <section id="caretaker-responsibilities" className="py-16 sm:py-24 border-t bg-muted/20">
      <div className="container mx-auto px-6 sm:px-10">

        <ScrollAnimation direction="up">
          <div className="mb-12 sm:mb-16">
            <div className="gold-label mb-4">Caretaker Duties</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight max-w-xl">
              What Our Caretakers Do Every Day
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 border-l border-t mb-10">
          {duties.map((d, i) => (
            <ScrollAnimation key={i} direction="up" delay={i * 0.04}>
              <div className="border-r border-b p-5 sm:p-6 group hover:bg-background transition-colors text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center mb-3 transition-colors">
                  <d.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-xs font-bold text-primary/60 mb-1.5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-xs sm:text-sm leading-snug mb-1.5">{d.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{d.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="up" delay={0.2}>
          <div className="border p-6 sm:p-8 text-center bg-background">
            <p className="font-bold text-base mb-2">Professional Excellence, Every Shift</p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Each responsibility is carried out with precision, care, and a commitment to keeping your facility secure and running smoothly — day and night.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
