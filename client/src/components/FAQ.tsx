import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "What types of facilities do you service?",
      answer: "We provide services for corporate offices, manufacturing facilities, shopping malls, residential complexes, healthcare facilities, educational institutions, and government buildings across India."
    },
    {
      question: "Are your employees trained and verified?",
      answer: "Yes, all our employees undergo comprehensive training and background verification. We provide professional development, discipline training, and regular performance monitoring to ensure quality service delivery."
    },
    {
      question: "Do you provide 24/7 services?",
      answer: "Yes, we offer 24/7 security and caretaker services. Our facility management and housekeeping services can be scheduled according to your requirements, including after-hours and weekend services."
    },
    {
      question: "What is your coverage area?",
      answer: "We operate across India with our trained workforce. Our services are available in major cities and we can deploy teams to various locations as per client requirements."
    },
    {
      question: "How do you ensure quality control?",
      answer: "We have a robust quality assurance system with regular day and night checks, direct communication with field officers, client feedback mechanisms, and continuous improvement processes."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer competitive pricing based on service type, facility size, duration, and specific requirements. Contact us for a customized quote that fits your budget and needs."
    },
    {
      question: "How quickly can you start services?",
      answer: "Depending on your requirements, we can typically deploy our team within 48-72 hours. For complex or large-scale projects, we may need 1-2 weeks for proper planning and team preparation."
    },
    {
      question: "Do you have insurance and legal compliance?",
      answer: "Yes, we are fully compliant with all legal requirements including ESIC, PF, PAN registrations. We maintain comprehensive insurance coverage for our operations and employee welfare."
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about our facility management services and how we can help your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-primary" />
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger 
                      className="text-left hover:text-primary transition-colors"
                      data-testid={`faq-question-${index}`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent 
                      className="text-muted-foreground leading-relaxed"
                      data-testid={`faq-answer-${index}`}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}