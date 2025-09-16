import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Clock, 
  CheckCircle, 
  MessageSquare, 
  TrendingUp, 
  Shield 
} from "lucide-react"

export default function CustomerSatisfaction() {
  const satisfactionFeatures = [
    {
      icon: Heart,
      title: "Customer-First Priority",
      description: "Our customers are our top priority. We diligently reassess service quality to proactively identify and address every customer's needs."
    },
    {
      icon: Clock,
      title: "Day & Night Monitoring",
      description: "We conduct thorough day and night checks to ensure consistent service quality and immediate response to any issues."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Through proactive client engagement, we effectively manage contracts and implement robust improvement measures."
    },
    {
      icon: MessageSquare,
      title: "Client Feedback",
      description: "We actively encourage and act upon client suggestions to continuously enhance our service delivery and exceed expectations."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Proactive Assessment",
      description: "Continuous quality evaluation and needs identification"
    },
    {
      step: "2", 
      title: "Regular Monitoring",
      description: "Comprehensive day and night quality checks"
    },
    {
      step: "3",
      title: "Client Engagement", 
      description: "Active communication and feedback collection"
    },
    {
      step: "4",
      title: "Continuous Improvement",
      description: "Implementation of enhancement measures"
    }
  ]

  return (
    <section id="customer-satisfaction" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer <span className="text-primary">Satisfaction</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Assistance Protection and Services, customer satisfaction is at the heart of 
            everything we do. We continuously strive to exceed expectations.
          </p>
        </div>

        {/* Satisfaction Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {satisfactionFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate group">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
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

        {/* Process Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Our Satisfaction <span className="text-primary">Process</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20 hover-elevate">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <Shield className="h-8 w-8 text-primary" />
              Our Customer Promise
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              "Our company highly values our customers and their feedback. We expect our customers 
              to contact our dedicated customer service representatives for any inquiries or requests 
              regarding our services."
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <TrendingUp className="w-4 h-4 mr-1" />
                Continuous Improvement
              </Badge>
              <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                <MessageSquare className="w-4 h-4 mr-1" />
                Direct Communication
              </Badge>
              <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/20">
                <Clock className="w-4 h-4 mr-1" />
                Swift Response
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}