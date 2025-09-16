import ServiceCard from "./ServiceCard"
import ScrollAnimation from "./ScrollAnimation"
import { 
  Brush, 
  Shield, 
  Calendar, 
  Users, 
  Building, 
  Coffee 
} from "lucide-react"
import housekeepingImage from "@assets/generated_images/Indian_APS_housekeeping_team_a0f857bb.png"
import securityImage from "@assets/generated_images/Indian_APS_security_team_bd74dba7.png"
import eventImage from "@assets/generated_images/Indian_APS_event_management_6454c28d.png"

export default function Services() {
  const services = [
    {
      title: "Housekeeping & Cleaning",
      description: "Comprehensive cleaning and maintenance services for all types of facilities",
      icon: Brush,
      image: housekeepingImage,
      features: [
        "Daily office cleaning and sanitization",
        "Deep cleaning and maintenance",
        "Specialized equipment cleaning",
        "Eco-friendly cleaning solutions",
        "Quality assurance and monitoring"
      ]
    },
    {
      title: "Security & Caretaker Outsourcing",
      description: "Professional security and caretaker services to protect your assets and personnel",
      icon: Shield,
      image: securityImage,
      features: [
        "24/7 security monitoring",
        "Trained security personnel",
        "Facility caretaking services",
        "Emergency response protocols",
        "Asset protection and surveillance"
      ]
    },
    {
      title: "Event Management",
      description: "Complete event planning and execution services for corporate and private events",
      icon: Calendar,
      image: eventImage,
      features: [
        "Corporate event planning",
        "Conference and meeting setup",
        "Audio-visual equipment management",
        "Catering coordination",
        "Event logistics and support"
      ]
    },
    {
      title: "Manpower Solutions",
      description: "Skilled workforce deployment for various operational requirements",
      icon: Users,
      features: [
        "Temporary and permanent staffing",
        "Skilled and unskilled workforce",
        "Training and skill development",
        "HR management and payroll",
        "Compliance and documentation"
      ]
    },
    {
      title: "Industrial & Residential Facilities",
      description: "Specialized maintenance and management for industrial and residential complexes",
      icon: Building,
      features: [
        "Industrial facility maintenance",
        "Residential complex management",
        "Mechanical and electrical services",
        "Grounds keeping and landscaping",
        "Facility optimization and planning"
      ]
    },
    {
      title: "Canteen & Pantry Management",
      description: "Complete food service management for corporate and institutional facilities",
      icon: Coffee,
      features: [
        "Menu planning and preparation",
        "Kitchen staff management",
        "Food safety and hygiene",
        "Inventory and supply management",
        "Nutritional meal planning"
      ]
    }
  ]

  const handleLearnMore = (serviceName: string) => {
    console.log(`Learn more about ${serviceName} clicked`)
    // TODO: Implement service detail modal or navigation
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of facility management services designed to meet 
            the diverse needs of government and private organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction="up">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                image={service.image}
                onLearnMore={() => handleLearnMore(service.title)}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}