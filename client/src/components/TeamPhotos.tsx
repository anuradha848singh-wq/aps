import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"
import fieldOfficersImg from "@assets/aps_field_officers.jpg"
import securityTeamImg from "@assets/aps_security_team.jpg"
import hospitalStaffImg from "@assets/aps_hospital_staff.jpg"

const photos = [
  {
    src: fieldOfficersImg,
    label: "Field Supervisors",
    caption: "Uniformed APS supervisors on active duty — verified, trained, and deployment-ready.",
    position: "object-top",
    tall: false,
  },
  {
    src: securityTeamImg,
    label: "Security Team",
    caption: "Our security and bouncer squad ready for deployment across Indore venues and facilities.",
    position: "object-center",
    tall: false,
  },
  {
    src: hospitalStaffImg,
    label: "Hospital & Healthcare Staff",
    caption: "APS-deployed healthcare support staff and ward attendants across Indore hospitals.",
    position: "object-top",
    tall: true,
  },
]

export default function TeamPhotos() {
  return (
    <section id="team-photos" className="py-16 sm:py-24 border-t bg-muted/20">
      <div className="container mx-auto px-5 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <ScrollAnimation direction="up">
            <div>
              <div className="gold-label mb-3 sm:mb-4">Real People. Real Work.</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                Our People in Action
              </h2>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              500+ trained APS professionals deployed across factories, hospitals, malls and offices in Indore and Madhya Pradesh.
            </p>
          </ScrollAnimation>
        </div>

        {/* Photo grid — left: large stacked collage, right: two portraits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">

          {/* Left: Hospital staff collage — takes 5 cols on large, full width on mobile */}
          <ScrollAnimation direction="left" className="lg:col-span-5">
            <div className="relative overflow-hidden h-[280px] sm:h-[360px] lg:h-[520px] group">
              <img
                src={photos[2].src}
                alt="APS hospital and healthcare support staff"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "hsl(38 72% 60%)" }}>
                  {photos[2].label}
                </span>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{photos[2].caption}</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: two portrait photos stacked */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">

            {/* Top: Security team — wide landscape */}
            <ScrollAnimation direction="right" delay={0.05}>
              <div className="relative overflow-hidden h-[200px] sm:h-[240px] lg:h-[248px] group">
                <img
                  src={photos[1].src}
                  alt="APS security team group photo"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "hsl(38 72% 60%)" }}>
                    {photos[1].label}
                  </span>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed">{photos[1].caption}</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Bottom: Field supervisors — wide landscape */}
            <ScrollAnimation direction="right" delay={0.12}>
              <div className="relative overflow-hidden h-[200px] sm:h-[240px] lg:h-[256px] group">
                <img
                  src={photos[0].src}
                  alt="APS field supervisors on duty"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "hsl(38 72% 60%)" }}>
                    {photos[0].label}
                  </span>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed">{photos[0].caption}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Bottom strip stat */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-6 sm:gap-10 justify-center sm:justify-start border-t pt-6">
            {[
              { value: "500+", label: "Trained staff deployed" },
              { value: "8", label: "Service categories" },
              { value: "Indore, MP", label: "Primary service area" },
              { value: "24/7", label: "Field supervision" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
