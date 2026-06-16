import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"
import fieldOfficersImg from "@assets/aps_field_officers.jpg"
import securityTeamImg from "@assets/aps_security_team.jpg"
import ladyUniformImg from "@assets/cropped/c_lady_uniform.jpg"
import teamGroupImg from "@assets/cropped/c_team_group.jpg"

const GOLD = "hsl(38 72% 52%)"

const stats = [
  { value: "500+", label: "Trained Staff" },
  { value: "8",    label: "Service Types" },
  { value: "Indore, MP", label: "Service Area" },
  { value: "24/7", label: "Supervision" },
]

interface TileProps {
  src: string
  alt: string
  category: string
  label: string
  objectPos?: string
  delay?: number
  className?: string
}

function PhotoTile({ src, alt, category, label, objectPos = "object-center", delay = 0, className = "" }: TileProps) {
  return (
    <ScrollAnimation direction="up" delay={delay} className={`relative overflow-hidden rounded-sm group ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${objectPos} transition-transform duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <span
          className="block text-[10px] font-bold uppercase tracking-[0.16em] mb-1"
          style={{ color: GOLD }}
        >
          {category}
        </span>
        <span className="text-sm sm:text-base font-bold text-white leading-tight">{label}</span>
      </div>
    </ScrollAnimation>
  )
}

export default function TeamPhotos() {
  return (
    <section id="team-photos" className="py-16 sm:py-24 border-t bg-[#f8f6f1] dark:bg-background">
      <div className="container mx-auto px-5 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <ScrollAnimation direction="up">
            <div>
              <div className="gold-label mb-3">Real People. Real Work.</div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                Our People in Action
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px] sm:text-right">
              500+ trained APS professionals across Indore and MP
            </p>
          </ScrollAnimation>
        </div>

        {/* Bento grid — 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3"
             style={{ gridTemplateRows: "240px 240px" }}>

          {/* LEFT — spans both rows */}
          <PhotoTile
            src={fieldOfficersImg}
            alt="APS field supervisors on active duty"
            category="Field"
            label="Field Supervisors"
            objectPos="object-top"
            delay={0}
            className="sm:[grid-row:1/3] h-[260px] sm:h-full"
          />

          {/* TOP-RIGHT — spans columns 2 & 3 */}
          <PhotoTile
            src={securityTeamImg}
            alt="APS security team group photo"
            category="Security"
            label="Security Team"
            objectPos="object-center"
            delay={0.06}
            className="sm:[grid-column:2/4] h-[220px] sm:h-full"
          />

          {/* BOTTOM-CENTER */}
          <PhotoTile
            src={ladyUniformImg}
            alt="APS hospital attendant in uniform"
            category="Healthcare"
            label="Hospital Staff"
            objectPos="object-top"
            delay={0.12}
            className="h-[220px] sm:h-full"
          />

          {/* BOTTOM-RIGHT */}
          <PhotoTile
            src={teamGroupImg}
            alt="APS trained manpower team"
            category="Manpower"
            label="Trained Manpower"
            objectPos="object-top"
            delay={0.18}
            className="h-[220px] sm:h-full"
          />
        </div>

        {/* Stats strip */}
        <ScrollAnimation direction="up" delay={0.22}>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-8 sm:gap-12 border-t border-[#e5e0d5] dark:border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-black text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

      </div>
    </section>
  )
}
