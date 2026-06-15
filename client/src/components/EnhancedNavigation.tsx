import { useState, useEffect } from "react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, Shield, ChevronDown, Phone, MessageCircle } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function EnhancedNavigation() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const primaryNav = [
    { name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ]

  const moreNav = [
    { name: "Training & Quality", id: "training" },
    { name: "Customer Satisfaction", id: "customer-satisfaction" },
    { name: "Caretaker Duties", id: "caretaker-responsibilities" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ]

  const allMobile = [
    { name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Training & Quality", id: "training" },
    { name: "Customer Satisfaction", id: "customer-satisfaction" },
    { name: "Caretaker Duties", id: "caretaker-responsibilities" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
        : "bg-background/90 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground shadow-sm group-hover:shadow-md transition-shadow">
              <Shield className="h-5 w-5" />
            </div>
            <div className="font-bold text-lg leading-tight">
              <span className="text-primary">APS</span>
              <span className="text-foreground hidden sm:inline"> Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {primaryNav.map((item) => (
              <button
                key={item.name}
                onClick={() => item.action ? item.action() : scrollTo(item.id!)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover-elevate transition-colors"
              >
                {item.name}
              </button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover-elevate transition-colors flex items-center gap-1">
                  More <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52">
                {moreNav.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <button onClick={() => scrollTo(item.id)} className="w-full cursor-pointer">
                      {item.name}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Call - visible md+ */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover-elevate"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call</span>
            </a>

            {/* WhatsApp - visible md+ */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-elevate"
              data-testid="theme-toggle"
            >
              {theme === "dark"
                ? <Sun className="h-4 w-4" />
                : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden hover-elevate" data-testid="mobile-menu-trigger">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 overflow-y-auto">
                <div className="flex flex-col pt-2 pb-8">
                  {/* Logo in drawer */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-lg"><span className="text-primary">APS</span> Services</span>
                  </div>

                  {/* Mobile quick actions */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                      <Phone className="h-4 w-4" /> Call Now
                    </a>
                    <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-green-700 transition-colors">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>

                  {/* Nav links */}
                  <nav className="flex flex-col">
                    {allMobile.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => item.action ? item.action() : scrollTo(item.id!)}
                        className="text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors text-left px-3 py-3 rounded-lg"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
