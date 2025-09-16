import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide high-quality services to our clients and enhance the professional capabilities of our frontline executives through continuous training."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To become the leading professional manpower provider by surpassing customers' expectations and fostering strong client-agency partnerships while valuing each employee."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Exceeding expectations of both internal and external customers to pleasantly surprise them while providing the best possible service and assistance."
    }
  ]

  const achievements = [
    "ESIC Registered: 18000318980001099",
    "PF Registration: MPIND1982610000", 
    "PAN Number: EVTPS1296E",
    "Commercial Establishment: INDO240410SE004049"
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">APS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a highly specialized service provider known for our "beyond in brief" approach, 
            keeping customer satisfaction at the core of our organizational agenda.
          </p>
        </div>

        {/* Company Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Organization</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Assistance Protection and Services offers a wide range of services including 
                housekeeping, cleaning, event management, caretaker outsourcing, and all types 
                of manpower services. We serve a diverse range of facilities including factories, 
                malls, townships, offices, and residences.
              </p>
              <p>
                Our success lies in providing a one-stop shop for all types of facility services, 
                including general housekeeping, canteen, and pantry maintenance for both government 
                and private organizations.
              </p>
              <p>
                Our dedicated team not only enables us to deliver the desired services but also 
                helps us achieve maximum customer satisfaction by providing better services within 
                the agreed timeframe.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Legal Compliance</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-chart-2 mt-0.5 flex-shrink-0" />
                  <Badge variant="outline" className="text-sm">
                    {achievement}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h4 className="font-semibold">Fully Compliant & Registered</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                All our operations are fully compliant with government regulations, 
                ensuring transparency and legal adherence in all our service deliveries.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}