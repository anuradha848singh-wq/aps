import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  image?: string
  onLearnMore?: () => void
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  image,
  onLearnMore 
}: ServiceCardProps) {
  return (
    <Card className="group hover-elevate transition-all duration-300 overflow-hidden">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={onLearnMore}
          data-testid={`learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}