import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Facility Manager",
      company: "TechCorp India",
      rating: 5,
      testimonial: "APS has transformed our office maintenance. Their housekeeping team is professional, reliable, and always maintains high standards. Highly recommended for corporate facilities.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Operations Head",
      company: "Manufacturing Ltd",
      rating: 5,
      testimonial: "We've been using APS security services for 3 years. Their caretakers are vigilant, well-trained, and provide excellent facility protection. Great value for money.",
      avatar: "PS"
    },
    {
      name: "Mohammed Ali",
      position: "Event Coordinator",
      company: "Eventix Solutions",
      rating: 5,
      testimonial: "APS event management team handled our annual conference flawlessly. From setup to cleanup, everything was perfectly organized. Will definitely use their services again.",
      avatar: "MA"
    },
    {
      name: "Sunita Patel",
      position: "HR Director",
      company: "Global Enterprises",
      rating: 5,
      testimonial: "Their manpower solutions have helped us scale our operations efficiently. Professional staff, proper documentation, and excellent service delivery. Very satisfied.",
      avatar: "SP"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why businesses across India trust APS for their facility management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}