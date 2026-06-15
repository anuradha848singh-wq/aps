import { Facebook, Twitter, Linkedin, MessageCircle, Phone, Mail, Share2, ArrowRight } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

export default function SocialMediaShare() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = "APS – Professional Facility Management in India. One-stop solution for housekeeping, security, and manpower services."

  const contactChannels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      sub: "Chat with us instantly",
      href: "https://wa.me/91XXXXXXXXXX?text=Hello%20APS%20Services",
      external: true,
    },
    {
      icon: Phone,
      label: "Call Us",
      sub: "+91 (XXX) XXX-XXXX",
      href: "tel:+91XXXXXXXXXX",
      external: false,
    },
    {
      icon: Mail,
      label: "Email Us",
      sub: "info@apsservices.com",
      href: "mailto:info@apsservices.com?subject=Inquiry about APS Services",
      external: false,
    },
  ]

  const shareChannels = [
    {
      icon: Facebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ]

  return (
    <section className="py-14 sm:py-20 border-t">
      <div className="container mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-2 gap-0 border-l border-t">

          {/* Contact */}
          <ScrollAnimation direction="left">
            <div className="border-r border-b p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Phone className="h-4 w-4 text-primary" />
                <h3 className="font-bold text-sm">Contact Us Directly</h3>
              </div>
              <div className="space-y-0 border-t">
                {contactChannels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between py-4 border-b hover:text-primary transition-colors group"
                    data-testid={`contact-${c.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                        <c.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{c.label}</div>
                        <div className="text-xs text-muted-foreground">{c.sub}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">24/7 emergency support available</p>
            </div>
          </ScrollAnimation>

          {/* Share */}
          <ScrollAnimation direction="right">
            <div className="border-r border-b p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="h-4 w-4 text-primary" />
                <h3 className="font-bold text-sm">Share Our Services</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-5">
                Know someone who needs professional facility management? Help them find us.
              </p>
              <div className="space-y-0 border-t">
                {shareChannels.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => window.open(s.href, "_blank", "width=600,height=400")}
                    className="flex items-center justify-between py-4 border-b w-full text-left hover:text-primary transition-colors group"
                    data-testid={`share-${s.label.toLowerCase().replace(/[\s/]/g, "-")}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full border-2 border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                        <s.icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="font-bold text-sm">Share on {s.label}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
