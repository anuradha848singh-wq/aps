import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { FileText, X, Send, Loader2 } from "lucide-react"

export default function FloatingQuoteButton() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", facility: "", message: "",
  })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSelect = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast({ title: "Quote request sent!", description: "We'll send you a quote within 24 hours." })
        setForm({ name: "", email: "", phone: "", company: "", service: "", facility: "", message: "" })
        setOpen(false)
      } else {
        throw new Error(data.message || "Failed")
      }
    } catch {
      toast({ title: "Couldn't send request", description: "Please call us directly or try again.", variant: "destructive" })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-3 rounded-full shadow-xl shadow-primary/30 hover:bg-primary/90 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 2, damping: 15 }}
        data-testid="floating-quote-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText className="h-4 w-4" />
        Get Quote
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              className="relative bg-background w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92svh] overflow-y-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-background border-b px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base">Request a Quote</h2>
                    <p className="text-xs text-muted-foreground">Free, no obligation</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost" onClick={() => setOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form onSubmit={submit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="q-name" className="text-xs">Name <span className="text-destructive">*</span></Label>
                    <Input id="q-name" name="name" value={form.name} onChange={handle} required placeholder="Your name" data-testid="quote-input-name" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-email" className="text-xs">Email <span className="text-destructive">*</span></Label>
                    <Input id="q-email" name="email" type="email" value={form.email} onChange={handle} required placeholder="Email address" data-testid="quote-input-email" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="q-phone" className="text-xs">Phone</Label>
                    <Input id="q-phone" name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" data-testid="quote-input-phone" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-company" className="text-xs">Company</Label>
                    <Input id="q-company" name="company" value={form.company} onChange={handle} placeholder="Company name" data-testid="quote-input-company" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Service <span className="text-destructive">*</span></Label>
                    <Select onValueChange={(v) => handleSelect("service", v)} required>
                      <SelectTrigger data-testid="quote-select-service">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="housekeeping">Housekeeping</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="events">Event Management</SelectItem>
                        <SelectItem value="manpower">Manpower</SelectItem>
                        <SelectItem value="facility">Facility Mgmt</SelectItem>
                        <SelectItem value="canteen">Canteen & Pantry</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Facility Type</Label>
                    <Select onValueChange={(v) => handleSelect("facility", v)}>
                      <SelectTrigger data-testid="quote-select-facility">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Corporate Office</SelectItem>
                        <SelectItem value="factory">Factory</SelectItem>
                        <SelectItem value="mall">Shopping Mall</SelectItem>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="hospital">Healthcare</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="q-message" className="text-xs">Requirements <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="q-message"
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={3}
                    placeholder="Facility size, number of staff needed, duration, any specific requirements..."
                    data-testid="quote-input-message"
                  />
                </div>

                <Button type="submit" className="w-full font-semibold" disabled={submitting} data-testid="submit-quote-form">
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-4 w-4 mr-2" /> Send Quote Request</>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
