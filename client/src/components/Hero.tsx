import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, MessageCircle } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"
import heroImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.webp"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    // TODO: Replace with actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank")
  }

  const makeCall = () => {
    // TODO: Replace with actual phone number
    window.location.href = "tel:+1234567890"
  }

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Indian APS facility management team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Shield className="w-4 h-4 mr-2" />
            Professional Facility Management
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Assistance Protection 
            <span className="block text-primary">and Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            One-stop solution for protection and services. Professional facility management 
            including housekeeping, security, caretaker outsourcing, and event management.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white border-primary"
              data-testid="cta-get-quote"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={openWhatsApp}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="cta-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={makeCall}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="cta-call"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-white/80">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-white/80">Employees Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <div className="text-white/80">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}