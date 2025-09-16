import ServiceCard from '../ServiceCard'
import { Brush } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Service Card Example</h2>
      <div className="max-w-sm">
        <ServiceCard
          title="Housekeeping & Cleaning"
          description="Comprehensive cleaning and maintenance services for all types of facilities"
          icon={Brush}
          features={[
            "Daily office cleaning and sanitization",
            "Deep cleaning and maintenance", 
            "Specialized equipment cleaning",
            "Eco-friendly cleaning solutions"
          ]}
          onLearnMore={() => console.log('Learn more clicked')}
        />
      </div>
    </div>
  )
}