import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Housekeeping & Cleaning",
    "Security Services", 
    "Caretaker Outsourcing",
    "Event Management",
    "Manpower Solutions",
    "Facility Management"
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-xl font-bold">
                <span className="text-primary">APS</span>
                <span className="text-foreground ml-1">Services</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Professional facility management services providing one-stop solutions 
              for protection and services across diverse industries.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@apsservices.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Business Address, City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold mb-4">Legal Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>ESIC: 18000318980001099</p>
              <p>PF: MPIND1982610000</p>
              <p>PAN: EVTPS1296E</p>
              <p>Registration: INDO240410SE004049</p>
            </div>
            
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover-elevate">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-elevate">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Assistance Protection and Services (APS). All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Professional facility management solutions across India
          </p>
        </div>
      </div>
    </footer>
  )
}