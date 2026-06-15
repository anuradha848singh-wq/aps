import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2, ArrowRight } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"
import { useSiteContent } from "@/hooks/useSiteContent"

export default function Contact() {
  const { toast } = useToast()
  const { content } = useSiteContent()
  const { contact } = content
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" })
  const [submitting, setSubmitting] = useState(false)

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      lines: [contact.phone1, contact.phone2],
      href: `tel:${contact.phone1.replace(/\s/g, "")}`,
      linkLabel: "Call now",
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [contact.email],
      href: `mailto:${contact.email}`,
      linkLabel: "Send email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      lines: [contact.address],
      href: null,
      linkLabel: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: [contact.hours, "Emergency support 24/7"],
      href: null,
      linkLabel: null,
    },
  ]

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." })
        setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" })
      } else {
        throw new Error(data.message || "Failed to send")
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 border-t">
      <div className="container mx-auto px-5 sm:px-10">

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left: info */}
          <div className="lg:col-span-2">
            <ScrollAnimation direction="left">
              <div className="gold-label mb-4">Get In Touch</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-4">
                Let's Talk About Your Needs
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                Whether you need housekeeping for a factory or security for an office park — we're here to help.
              </p>
            </ScrollAnimation>

            <div className="space-y-0 border-t">
              {contactDetails.map((c, i) => (
                <ScrollAnimation key={i} direction="left" delay={i * 0.07}>
                  <div className="flex items-start gap-4 py-4 border-b">
                    <div className="w-9 h-9 rounded-full border-2 border-border flex items-center justify-center shrink-0 mt-0.5">
                      <c.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm mb-1">{c.title}</p>
                      {c.lines.map((l, j) => (
                        <p key={j} className="text-xs text-muted-foreground break-words">{l}</p>
                      ))}
                      {c.href && c.linkLabel && (
                        <a href={c.href} className="inline-flex items-center gap-1 text-xs text-primary font-semibold mt-1 hover:underline">
                          {c.linkLabel} <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation direction="left" delay={0.28}>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hello%20APS%20Services`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-6 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-3.5 transition-colors"
                data-testid="whatsapp-contact"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </ScrollAnimation>
          </div>

          {/* Right: form */}
          <ScrollAnimation direction="right" className="lg:col-span-3">
            <div className="border p-5 sm:p-8">
              <h3 className="font-black text-xl mb-1">Send us a message</h3>
              <p className="text-muted-foreground text-sm mb-6">We usually respond within a few hours.</p>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide">Full Name <span className="text-destructive">*</span></Label>
                    <Input id="name" name="name" value={form.name} onChange={handle} required placeholder="Rahul Sharma" data-testid="input-name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide">Email <span className="text-destructive">*</span></Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handle} required placeholder="rahul@company.com" data-testid="input-email" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide">Phone</Label>
                    <Input id="phone" name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" data-testid="input-phone" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide">Company</Label>
                    <Input id="company" name="company" value={form.company} onChange={handle} placeholder="Your company name" data-testid="input-company" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="service" className="text-xs font-semibold uppercase tracking-wide">Service Required</Label>
                  <Input id="service" name="service" value={form.service} onChange={handle} placeholder="e.g. Housekeeping, Security, Event Management" data-testid="input-service" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide">Message <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={4}
                    placeholder="Describe your requirements — facility type, size, specific needs..."
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full font-semibold" size="lg" disabled={submitting} data-testid="submit-contact-form">
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-4 w-4 mr-2" /> Send Message</>
                  )}
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
