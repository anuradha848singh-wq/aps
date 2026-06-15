import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
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
      <div className="container mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <span className="font-black text-2xl text-background tracking-tight">APS</span>
              <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-background/50 -mt-0.5">
                Manpower Services
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-background/60">
              Professional facility management for factories, offices, malls, and residences — delivering consistency, reliability, and quality across India since 2016.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" /> +91 (XXX) XXX-XXXX
              </a>
              <a href="mailto:info@apsservices.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0" /> info@apsservices.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" /> Business Address, City, State
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <button
                    onClick={() => l.action ? l.action() : scrollTo(l.id!)}
                    className="text-sm text-background/60 hover:text-background transition-colors text-left flex items-center gap-1.5 group"
                    data-testid={`footer-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/40 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s} className="text-sm text-background/60">{s}</li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/40 mb-5">Legal Info</h4>
            <div className="space-y-2 text-xs text-background/50 mb-8">
              <div><span className="font-medium text-background/60">ESIC:</span> 18000318980001099</div>
              <div><span className="font-medium text-background/60">PF:</span> MPIND1982610000</div>
              <div><span className="font-medium text-background/60">PAN:</span> EVTPS1296E</div>
              <div><span className="font-medium text-background/60">Reg:</span> INDO240410SE004049</div>
            </div>
            <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-background/40 mb-4">Follow Us</h4>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border border-background/20 text-background/50 hover:text-background hover:border-background/60 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40 text-center sm:text-left">
            © {new Date().getFullYear()} Assistance Protection and Services (APS). All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs text-background/50 hover:text-background transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
