import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Phone, MessageCircle, ChevronDown } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"
import ScrollAnimation from "./ScrollAnimation"
import heroImage from "@assets/generated_images/Indian_APS_facility_management_team_cb58bfbb.png"

export default function EnhancedHero() {
  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImage}
          alt="Indian APS facility management team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-16 h-16 bg-chart-2/20 rounded-full blur-xl"
        animate={{ 
          x: [0, -25, 0], 
          y: [0, 15, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover-elevate">
              <Shield className="w-4 h-4 mr-2" />
              Professional Facility Management
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Assistance Protection 
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
                and Services
              </span>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            One-stop solution for protection and services. Professional facility management 
            with Indian expertise, serving <span className="text-primary font-semibold">50+ clients</span> with 
            <span className="text-chart-2 font-semibold"> 200+ trained employees</span> across India.
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 text-white border-0 shadow-2xl"
                data-testid="cta-get-quote"
              >
                Get Free Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={openWhatsApp}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 shadow-xl"
                data-testid="cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline"
                onClick={makeCall}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 shadow-xl"
                data-testid="cta-call"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors">Years Experience</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-chart-2 transition-colors">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors">Clients Served</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-chart-3 transition-colors">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors">Employees Trained</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <div className="text-white/80 group-hover:text-white transition-colors">Available</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer"
        onClick={scrollToServices}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        data-testid="scroll-indicator"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  )
}