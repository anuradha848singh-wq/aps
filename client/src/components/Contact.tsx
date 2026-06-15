import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2 } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 (XXX) XXX-XXXX", "+91 (XXX) XXX-XXXX"],
    href: "tel:+91XXXXXXXXXX",
    linkLabel: "Call now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@apsservices.com", "support@apsservices.com"],
    href: "mailto:info@apsservices.com",
    linkLabel: "Send email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Business Address", "City, State – PIN Code"],
    href: null,
    linkLabel: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat: 9 AM – 6 PM", "Emergency support 24/7"],
    href: null,
    linkLabel: null,
  },
]

export default function Contact() {
  const { toast } = useToast()
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" })
  const [submitting, setSubmitting] = useState(false)

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
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">

        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Let's Talk About <span className="text-primary">Your Needs</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Whether you need housekeeping for a factory or security for an office park — we're here to help. Fill in the form or reach out directly.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map((c, i) => (
              <ScrollAnimation key={i} direction="left" delay={i * 0.07}>
                <div className="flex items-start gap-4 p-4 rounded-xl border bg-card hover-elevate">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm mb-1">{c.title}</p>
                    {c.lines.map((l, j) => (
                      <p key={j} className="text-xs text-muted-foreground">{l}</p>
                    ))}
                    {c.href && c.linkLabel && (
                      <a href={c.href} className="text-xs text-primary font-medium mt-1 inline-block hover:underline">
                        {c.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            ))}

            <ScrollAnimation direction="left" delay={0.28}>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello%20APS%20Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
                data-testid="whatsapp-contact"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </ScrollAnimation>
          </div>

          {/* Right: form */}
          <ScrollAnimation direction="right" className="lg:col-span-3">
            <div className="bg-card border rounded-2xl p-6 sm:p-8">
              <h3 className="font-bold text-xl mb-1">Send us a message</h3>
              <p className="text-muted-foreground text-sm mb-6">We usually respond within a few hours.</p>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm">Full Name <span className="text-destructive">*</span></Label>
                    <Input id="name" name="name" value={form.name} onChange={handle} required placeholder="Rahul Sharma" data-testid="input-name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm">Email Address <span className="text-destructive">*</span></Label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handle} required placeholder="rahul@company.com" data-testid="input-email" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                    <Input id="phone" name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" data-testid="input-phone" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-sm">Company / Organization</Label>
                    <Input id="company" name="company" value={form.company} onChange={handle} placeholder="Your company name" data-testid="input-company" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="service" className="text-sm">Service Required</Label>
                  <Input id="service" name="service" value={form.service} onChange={handle} placeholder="e.g. Housekeeping, Security, Event Management" data-testid="input-service" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm">Message <span className="text-destructive">*</span></Label>
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

                <Button type="submit" className="w-full font-semibold" disabled={submitting} data-testid="submit-contact-form">
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
