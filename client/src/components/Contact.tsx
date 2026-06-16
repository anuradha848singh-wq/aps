import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Loader2, ArrowRight, CheckCircle } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"
import { useSiteContent } from "@/hooks/useSiteContent"

const SERVICE_OPTIONS = [
  "Housekeeping & Cleaning",
  "Industrial Facility Management",
  "Security Guard / Bouncer",
  "Supervisor / Gunman Services",
  "Canteen & Pantry Management",
  "Event Management Support",
  "Hospital & Healthcare Support",
  "Caretaker Outsourcing",
  "Other",
]

interface FormState {
  name: string
  company: string
  phone: string
  email: string
  city: string
  service: string
  staffCount: string
  message: string
}

const emptyForm: FormState = {
  name: "", company: "", phone: "", email: "",
  city: "", service: "", staffCount: "", message: "",
}

export default function Contact() {
  const { toast } = useToast()
  const { content } = useSiteContent()
  const { contact } = content
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
      // Compose a detailed message including extra fields
      const fullMessage = [
        form.city ? `City / Location: ${form.city}` : "",
        form.staffCount ? `Staff Required: ${form.staffCount}` : "",
        form.message ? `\nRequirements:\n${form.message}` : "",
      ].filter(Boolean).join("\n")

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email || "noemail@provided.com",
          phone: form.phone,
          company: form.company,
          service: form.service,
          message: fullMessage || "No additional message provided.",
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
        setForm(emptyForm)
      } else {
        throw new Error(data.message || "Failed to send")
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call us directly at +91 93400 65775.",
        variant: "destructive",
      })
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
                Whether you need housekeeping for a factory or security for an office park — we're ready to help anywhere in Indore and Madhya Pradesh.
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
                href={`https://wa.me/${contact.whatsapp}?text=Hello%20APS%20Services%2C%20I%20need%20manpower%20services`}
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
              {submitted ? (
                <div className="py-10 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-black text-xl text-foreground">Thank You!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                    We've received your enquiry. Our team will contact you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-black text-xl mb-1">Request a Callback / Get a Quote</h3>
                  <p className="text-muted-foreground text-sm mb-6">Fill in the details and we'll get back to you within 24 hours.</p>

                  <form onSubmit={submit} className="space-y-4">
                    {/* Row 1: Name + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide">Full Name <span className="text-destructive">*</span></Label>
                        <Input id="name" name="name" value={form.name} onChange={handle} required placeholder="Rahul Sharma" data-testid="input-name" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide">Company / Organisation</Label>
                        <Input id="company" name="company" value={form.company} onChange={handle} placeholder="Your company name" data-testid="input-company" />
                      </div>
                    </div>

                    {/* Row 2: Phone + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide">Phone Number <span className="text-destructive">*</span></Label>
                        <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} required placeholder="+91 93400 65775" data-testid="input-phone" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide">Email Address</Label>
                        <Input id="email" name="email" type="email" value={form.email} onChange={handle} placeholder="rahul@company.com" data-testid="input-email" />
                      </div>
                    </div>

                    {/* Row 3: City + Service dropdown */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="city" className="text-xs font-semibold uppercase tracking-wide">City / Location</Label>
                        <Input id="city" name="city" value={form.city} onChange={handle} placeholder="Indore, MP" data-testid="input-city" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs font-semibold uppercase tracking-wide">Service Required <span className="text-destructive">*</span></Label>
                        <Select value={form.service} onValueChange={(v) => setForm(p => ({ ...p, service: v }))} required>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Select service…" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICE_OPTIONS.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Staff count */}
                    <div className="space-y-1.5">
                      <Label htmlFor="staffCount" className="text-xs font-semibold uppercase tracking-wide">Number of Staff Required</Label>
                      <Input id="staffCount" name="staffCount" type="number" min="1" value={form.staffCount} onChange={handle} placeholder="e.g. 5" data-testid="input-staff-count" />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide">Message / Additional Requirements</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handle}
                        rows={3}
                        placeholder="Describe your facility type, shift timings, specific needs..."
                        data-testid="input-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full font-semibold"
                      size="lg"
                      disabled={submitting || !form.name || !form.phone || !form.service}
                      data-testid="submit-contact-form"
                    >
                      {submitting ? (
                        <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="h-4 w-4 mr-2" /> Send Enquiry</>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Or call us directly: <a href={`tel:${contact.phone1.replace(/\s/g, "")}`} className="text-primary font-semibold hover:underline">{contact.phone1}</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
