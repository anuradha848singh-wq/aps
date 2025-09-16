import { Card, CardContent } from "@/components/ui/card"
import { 
  Eye, 
  AlertTriangle, 
  Zap, 
  FileText, 
  Phone, 
  Search, 
  Users, 
  UserCheck, 
  Settings, 
  ShieldAlert 
} from "lucide-react"

export default function CaretakerResponsibilities() {
  const responsibilities = [
    {
      id: 1,
      title: "To be visible",
      description: "Maintain visible presence throughout the facility to ensure security and assistance availability",
      icon: Eye,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      id: 2, 
      title: "To be vigilant",
      description: "Stay alert and watchful at all times to identify potential security or safety concerns",
      icon: AlertTriangle,
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      id: 3,
      title: "To respond quickly in dangerous situations", 
      description: "Provide immediate response and assistance during emergency or hazardous situations",
      icon: Zap,
      color: "bg-red-500/10 text-red-600"
    },
    {
      id: 4,
      title: "Observing and reporting",
      description: "Monitor facility activities and report incidents, irregularities, or concerns to management",
      icon: FileText,
      color: "bg-green-500/10 text-green-600"
    },
    {
      id: 5,
      title: "Getting help",
      description: "Coordinate with emergency services and management to obtain necessary assistance when required",
      icon: Phone,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      id: 6,
      title: "Checking and monitoring",
      description: "Conduct regular facility inspections and monitor security systems and equipment",
      icon: Search,
      color: "bg-indigo-500/10 text-indigo-600"
    },
    {
      id: 7,
      title: "Maintaining order among people",
      description: "Ensure orderly conduct and manage crowd control in common areas and during events",
      icon: Users,
      color: "bg-teal-500/10 text-teal-600"
    },
    {
      id: 8,
      title: "Receiving guests and taking care of them",
      description: "Provide professional assistance and guidance to visitors and guests",
      icon: UserCheck,
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      id: 9,
      title: "Performing other special duties",
      description: "Execute additional tasks and responsibilities as assigned by management",
      icon: Settings,
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      id: 10,
      title: "Offer safety warnings and tips",
      description: "Provide safety guidance and preventive measures to ensure a secure environment",
      icon: ShieldAlert,
      color: "bg-emerald-500/10 text-emerald-600"
    }
  ]

  return (
    <section id="caretaker-responsibilities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Caretaker <span className="text-primary">Responsibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our caretakers are trained professionals committed to providing comprehensive 
            security and facility management services with the highest standards.
          </p>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {responsibilities.map((responsibility, index) => (
            <Card key={responsibility.id} className="group hover-elevate transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${responsibility.color}`}>
                  <responsibility.icon className="h-6 w-6" />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                  {responsibility.id}
                </div>
                <h3 className="font-semibold mb-3 leading-tight">
                  {responsibility.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {responsibility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20 hover-elevate">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Professional <span className="text-primary">Excellence</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our caretakers embody our commitment to professional service delivery, 
              ensuring your facility operates smoothly and securely at all times. 
              Each responsibility is executed with precision and care.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}