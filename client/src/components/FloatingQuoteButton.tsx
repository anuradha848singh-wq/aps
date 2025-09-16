import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { FileText, Send } from "lucide-react"

export default function FloatingQuoteButton() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    facility: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setQuoteData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setQuoteData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request:", quoteData)
    toast({
      title: "Quote Request Sent!",
      description: "We'll send you a detailed quote within 24 hours.",
    })
    setQuoteData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      facility: "",
      message: ""
    })
    setIsOpen(false)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 z-50 shadow-2xl h-14 px-6 bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 border-0 rounded-full group animate-pulse hover:animate-none transition-all duration-300"
            data-testid="floating-quote-button"
          >
            <FileText className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">Get Quote</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Request a Quote
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quote-name">Name *</Label>
                <Input
                  id="quote-name"
                  name="name"
                  value={quoteData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  data-testid="quote-input-name"
                />
              </div>
              <div>
                <Label htmlFor="quote-email">Email *</Label>
                <Input
                  id="quote-email"
                  name="email"
                  type="email"
                  value={quoteData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email address"
                  data-testid="quote-input-email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quote-phone">Phone</Label>
                <Input
                  id="quote-phone"
                  name="phone"
                  value={quoteData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  data-testid="quote-input-phone"
                />
              </div>
              <div>
                <Label htmlFor="quote-company">Company</Label>
                <Input
                  id="quote-company"
                  name="company"
                  value={quoteData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  data-testid="quote-input-company"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="quote-service">Service Required *</Label>
              <Select onValueChange={(value) => handleSelectChange("service", value)} required>
                <SelectTrigger data-testid="quote-select-service">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="housekeeping">Housekeeping & Cleaning</SelectItem>
                  <SelectItem value="security">Security & Caretaker</SelectItem>
                  <SelectItem value="events">Event Management</SelectItem>
                  <SelectItem value="manpower">Manpower Solutions</SelectItem>
                  <SelectItem value="facility">Facility Management</SelectItem>
                  <SelectItem value="canteen">Canteen & Pantry</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="quote-facility">Facility Type</Label>
              <Select onValueChange={(value) => handleSelectChange("facility", value)}>
                <SelectTrigger data-testid="quote-select-facility">
                  <SelectValue placeholder="Select facility type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Corporate Office</SelectItem>
                  <SelectItem value="factory">Manufacturing Facility</SelectItem>
                  <SelectItem value="mall">Shopping Mall</SelectItem>
                  <SelectItem value="residential">Residential Complex</SelectItem>
                  <SelectItem value="hospital">Healthcare Facility</SelectItem>
                  <SelectItem value="educational">Educational Institution</SelectItem>
                  <SelectItem value="government">Government Building</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="quote-message">Requirements *</Label>
              <Textarea
                id="quote-message"
                name="message"
                value={quoteData.message}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Please describe your requirements, facility size, duration, etc."
                data-testid="quote-input-message"
              />
            </div>
            
            <Button type="submit" className="w-full" data-testid="submit-quote-form">
              <Send className="w-4 h-4 mr-2" />
              Send Quote Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}