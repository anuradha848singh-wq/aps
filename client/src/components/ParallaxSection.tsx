import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock } from "lucide-react"

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3])

  const achievements = [
    {
      icon: Shield,
      title: "Trusted Protection",
      description: "8+ years of reliable facility management and security services across India",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "ISO compliant services with continuous training and quality monitoring",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "200+ trained professionals dedicated to exceptional service delivery",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and emergency response for all client needs",
      color: "text-orange-600"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            Why Choose APS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-primary">Trusted Partner</span> in Facility Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with APS - where professional excellence meets reliable service delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover-elevate group transition-all duration-300">
                <CardContent className="p-8">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-lg mb-6 group-hover:scale-110 transition-transform ${achievement.color}`}
                    whileHover={{ rotate: 5 }}
                  >
                    <achievement.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-chart-2/5 rounded-full blur-2xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 30, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  )
}