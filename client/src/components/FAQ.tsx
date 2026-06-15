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
    <section id="faq" className="py-16 sm:py-24 border-t bg-muted/20">
      <div className="container mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left: header */}
          <ScrollAnimation direction="left">
            <div className="lg:sticky lg:top-24">
              <div className="gold-label mb-4">FAQ</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-5">
                Common Questions
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Everything you need to know before working with us. Can't find the answer? Get in touch.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hello%20APS%20Services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-3 transition-colors w-fit"
                  data-testid="whatsapp-faq"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <Button
                  variant="outline"
                  className="w-fit"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Send a Message
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: accordion */}
          <ScrollAnimation direction="right">
            <Accordion type="single" collapsible className="divide-y border-t border-b">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-none"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger
                    className="text-left text-sm font-semibold hover:text-primary transition-colors py-5 hover:no-underline"
                    data-testid={`faq-question-${i}`}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-sm text-muted-foreground leading-relaxed pb-5"
                    data-testid={`faq-answer-${i}`}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
