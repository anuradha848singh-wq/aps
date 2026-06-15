import { Badge } from "@/components/ui/badge"
import { Facebook, Twitter, Linkedin, MessageCircle, Phone, Mail, Share2 } from "lucide-react"
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
      color: "bg-green-600 hover:bg-green-700 text-white",
      external: true,
    },
    {
      icon: Phone,
      label: "Call Us",
      sub: "+91 (XXX) XXX-XXXX",
      href: "tel:+91XXXXXXXXXX",
      color: "bg-blue-600 hover:bg-blue-700 text-white",
      external: false,
    },
    {
      icon: Mail,
      label: "Email Us",
      sub: "info@apsservices.com",
      href: "mailto:info@apsservices.com?subject=Inquiry about APS Services",
      color: "bg-slate-700 hover:bg-slate-800 text-white",
      external: false,
    },
  ]

  const shareChannels = [
    {
      icon: Facebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "bg-[#1877F2]",
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "bg-[#1DA1F2]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "bg-[#0A66C2]",
    },
  ]

  return (
    <section className="py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation direction="up">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Reach Out
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Connect With <span className="text-primary">APS</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Prefer WhatsApp? A quick call? An email? We're here on every channel.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Contact */}
          <ScrollAnimation direction="left">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> Contact Us Directly
              </h3>
              <div className="space-y-2.5">
                {contactChannels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${c.color}`}
                    data-testid={`contact-${c.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <c.icon className="h-4 w-4 shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{c.label}</div>
                      <div className="text-xs opacity-80">{c.sub}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-muted-foreground bg-muted/60 border rounded-full px-3 py-1 inline-block">
                  24/7 emergency support available
                </span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Share */}
          <ScrollAnimation direction="right">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
                <Share2 className="h-4 w-4 text-primary" /> Share Our Services
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Know someone who needs professional facility management? Help them find us.
              </p>
              <div className="space-y-2.5">
                {shareChannels.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => window.open(s.href, "_blank", "width=600,height=400")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white transition-opacity hover:opacity-90 w-full text-left ${s.color}`}
                    data-testid={`share-${s.label.toLowerCase().replace(/[\s/]/g, "-")}`}
                  >
                    <s.icon className="h-4 w-4 shrink-0" />
                    <span className="font-medium text-sm">Share on {s.label}</span>
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
