import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react"

export default function SocialMediaShare() {
  const phoneNumber = "+91XXXXXXXXXX" // TODO: Replace with actual phone number
  const email = "info@apsservices.com" // TODO: Replace with actual email
  const whatsappNumber = "91XXXXXXXXXX" // TODO: Replace with actual WhatsApp number
  
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = "Check out APS - Professional Facility Management Services in India. One-stop solution for housekeeping, security, and manpower services."

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello APS Services, I'm interested in your facility management services.")}`,
      color: "bg-green-600 hover:bg-green-700",
      action: "Chat"
    },
    {
      name: "Call",
      icon: Phone,
      url: `tel:${phoneNumber}`,
      color: "bg-blue-600 hover:bg-blue-700",
      action: "Call"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:${email}?subject=Inquiry about APS Services&body=Hello, I'm interested in learning more about your facility management services.`,
      color: "bg-red-600 hover:bg-red-700",
      action: "Email"
    }
  ]

  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "bg-blue-400 hover:bg-blue-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "bg-blue-700 hover:bg-blue-800"
    }
  ]

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
  }

  const handleContact = (url: string) => {
    if (url.startsWith('tel:') || url.startsWith('mailto:')) {
      window.location.href = url
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect With <span className="text-primary">APS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us or share our services with others who need professional facility management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Direct Contact */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                Contact Us Directly
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ready to discuss your facility management needs? Contact us through your preferred method.
              </p>
              <div className="grid gap-3">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    onClick={() => handleContact(link.url)}
                    className={`w-full ${link.color} text-white flex items-center justify-between group`}
                    data-testid={`contact-${link.name.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="h-5 w-5" />
                      <span>{link.action} Now</span>
                    </div>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ))}
              </div>
              <Badge variant="outline" className="w-full justify-center py-2 bg-chart-2/10 text-chart-2 border-chart-2/20">
                24/7 Emergency Support Available
              </Badge>
            </CardContent>
          </Card>

          {/* Share Services */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Share2 className="h-6 w-6 text-primary" />
                Share Our Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Know someone who needs professional facility management? Share APS services with them.
              </p>
              <div className="grid gap-3">
                {shareButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleShare(button.url)}
                    className={`w-full ${button.color} text-white border-0 flex items-center justify-between group hover-elevate`}
                    data-testid={`share-${button.name.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-3">
                      <button.icon className="h-5 w-5" />
                      <span>Share on {button.name}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ))}
              </div>
              <div className="text-center pt-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Help others find quality facility management
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}