import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, ArrowRight } from "lucide-react"
import { useSiteContent } from "@/hooks/useSiteContent"
import logoImage from "@assets/image_1781530760930.webp"

export default function Footer() {
  const { content } = useSiteContent()
  const { contact, company } = content

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const navLinks = [
    { name: "Home", action: scrollTop },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Training", id: "training" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ]

  const serviceList = [
    "Housekeeping & Cleaning",
    "Security Services",
    "Caretaker Outsourcing",
    "Event Management",
    "Manpower Solutions",
    "Facility Management",
  ]

  return (
    <footer className="border-t bg-foreground text-background/80">
      <div className="container mx-auto px-5 sm:px-10 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Inverted logo (white filter for dark bg) */}
            <div className="mb-4">
              <img
                src={logoImage}
                alt="APS Manpower Services"
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5 text-background/55">
              {company.description} Since {company.founded}.
            </p>
            <div className="space-y-2">
              <a href={`tel:${contact.phone1.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-background/55 hover:text-background transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" /> {contact.phone1}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-background/55 hover:text-background transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0" /> {contact.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-background/55">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" /> {contact.address}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/35 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <button
                    onClick={() => l.action ? l.action() : scrollTo(l.id!)}
                    className="text-sm text-background/55 hover:text-background transition-colors text-left flex items-center gap-1.5 group"
                    data-testid={`footer-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0" />
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/35 mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-sm text-background/55">{s}</li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/35 mb-4">Legal Info</h4>
            <div className="space-y-1.5 text-xs text-background/45 mb-6">
              <div><span className="font-medium text-background/55">ESIC:</span> {company.esic}</div>
              <div><span className="font-medium text-background/55">PF:</span> {company.pf}</div>
              <div><span className="font-medium text-background/55">PAN:</span> {company.pan}</div>
              <div><span className="font-medium text-background/55">Reg:</span> {company.reg}</div>
            </div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/35 mb-3">Follow Us</h4>
            <div className="flex gap-2 flex-wrap">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border border-background/15 text-background/45 hover:text-background hover:border-background/50 transition-colors rounded-sm"
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/35 text-center sm:text-left">
            © {new Date().getFullYear()} Assistance Protection and Services (APS). All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs text-background/45 hover:text-background transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
