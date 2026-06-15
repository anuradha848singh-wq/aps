import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

const faqs = [
  {
    q: "What types of facilities do you service?",
    a: "We work with corporate offices, manufacturing plants, shopping malls, residential complexes, healthcare facilities, educational institutions, and government buildings across India.",
  },
  {
    q: "Are your employees trained and background-verified?",
    a: "Yes — every employee goes through structured training and thorough background verification before deployment. We also run regular refresher sessions and performance reviews.",
  },
  {
    q: "Do you provide 24/7 services?",
    a: "Our security and caretaker services are available round the clock. Housekeeping and facility management services can be scheduled to match your operational hours, including weekends.",
  },
  {
    q: "What is your coverage area?",
    a: "We operate across major cities in India and can deploy trained teams to various locations based on client requirements. Contact us with your location to confirm coverage.",
  },
  {
    q: "How do you ensure quality control?",
    a: "Through regular day and night checks by field officers, direct communication channels with all staff, client feedback mechanisms, and a commitment to continuous improvement.",
  },
  {
    q: "How is your pricing structured?",
    a: "Pricing depends on service type, facility size, duration, and specific needs. We offer competitive, transparent pricing — reach out for a customized quote.",
  },
  {
    q: "How quickly can you deploy a team?",
    a: "For standard requirements, we can typically deploy within 48–72 hours. Larger or more complex engagements may need 1–2 weeks for proper planning.",
  },
  {
    q: "Are you legally registered and compliant?",
    a: "Yes. We hold ESIC, PF, and PAN registrations, and our commercial establishment is duly registered. All employee welfare obligations are met in full.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">

        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase bg-primary/5 text-primary border-primary/20">
              FAQ
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Common <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Everything you need to know before working with us.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation direction="up" delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border rounded-xl bg-card px-5 data-[state=open]:shadow-sm transition-shadow"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger
                    className="text-left text-sm font-semibold hover:text-primary transition-colors py-4 hover:no-underline"
                    data-testid={`faq-question-${i}`}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-sm text-muted-foreground leading-relaxed pb-4"
                    data-testid={`faq-answer-${i}`}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          {/* CTA below FAQ */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mt-10 text-center p-6 rounded-2xl border bg-card">
              <p className="font-semibold mb-1">Still have questions?</p>
              <p className="text-sm text-muted-foreground mb-4">Our team is happy to help — reach out on WhatsApp or by filling in the contact form.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Send a Message
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
