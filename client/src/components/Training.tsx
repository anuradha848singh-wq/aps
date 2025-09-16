import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Users, 
  CheckCircle, 
  Clock, 
  Shield, 
  Target 
} from "lucide-react"

export default function Training() {
  const trainingFeatures = [
    {
      icon: GraduationCap,
      title: "Comprehensive Training",
      description: "Every employee receives thorough training to ensure proficiency in maintaining a secure environment and delivering diverse services."
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Our team members are well-versed in maintaining discipline and adhering to their designated schedules with professional excellence."
    },
    {
      icon: Clock,
      title: "Regular Monitoring",
      description: "We regularly assess and monitor our staff to guarantee impeccable customer service and fulfill requests to the best of our abilities."
    },
    {
      icon: Shield,
      title: "Advanced Preparation",
      description: "We confidently undertake all facilities and training, taking swift action for advanced preparation and exceptional assistance."
    }
  ]

  const qualityPoints = [
    "Professional training for all security and service personnel",
    "Discipline and schedule adherence protocols",
    "Regular performance assessment and monitoring",
    "Direct communication links with all field officers",
    "Comprehensive supervision and professional development",
    "Swift response and advanced preparation systems"
  ]

  return (
    <section id="training" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training & <span className="text-primary">Quality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to providing comprehensive training to every employee and 
            maintaining the highest standards of service quality through continuous monitoring.
          </p>
        </div>

        {/* Training Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trainingFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Training Information */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Our Training Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We are fully committed to delivering a professionally trained and highly 
                motivated task force to safeguard clients' assets, operations, and personnel 
                under any and all contingencies.
              </p>
              <p className="text-muted-foreground">
                Our communication is directly linked with all employees and field officers. 
                The field officers deliver comprehensive training to every employee, ensuring 
                consistent service quality across all operations.
              </p>
              <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                Professionally Trained Workforce
              </Badge>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-chart-2" />
                Quality Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Supervision Philosophy:</strong> We believe that exceptional supervision 
                  seamlessly integrates elements of support, guidance, and professional development 
                  for continuous improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}