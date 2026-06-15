import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"
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
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg"><span className="text-primary">APS</span> Services</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Professional facility management for factories, offices, malls, and residences — delivering consistency, reliability, and quality across India since 2016.
            </p>
            <div className="space-y-2">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" /> +91 (XXX) XXX-XXXX
              </a>
              <a href="mailto:info@apsservices.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0" /> info@apsservices.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" /> Business Address, City, State
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <button
                    onClick={() => l.action ? l.action() : scrollTo(l.id!)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`footer-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceList.map((s) => (
                <li key={s} className="text-sm text-muted-foreground">{s}</li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal Info</h4>
            <div className="space-y-1.5 text-xs text-muted-foreground mb-6">
              <div><span className="font-medium text-foreground/70">ESIC:</span> 18000318980001099</div>
              <div><span className="font-medium text-foreground/70">PF:</span> MPIND1982610000</div>
              <div><span className="font-medium text-foreground/70">PAN:</span> EVTPS1296E</div>
              <div><span className="font-medium text-foreground/70">Reg:</span> INDO240410SE004049</div>
            </div>
            <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Button key={i} variant="outline" size="icon" className="hover-elevate">
                  <Icon className="h-3.5 w-3.5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Assistance Protection and Services (APS). All rights reserved.
          </p>
          <Button variant="outline" size="sm" onClick={scrollTop} className="shrink-0">
            <ArrowUp className="h-3.5 w-3.5 mr-1.5" /> Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
