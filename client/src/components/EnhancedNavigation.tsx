import { useState } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Moon, Sun, Menu, Shield, ChevronDown, Search, X, Phone, MessageCircle } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function EnhancedNavigation() {
  const { theme, toggleTheme } = useTheme()
  const [location] = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "#services",
      dropdown: [
        { name: "Housekeeping & Cleaning", href: "#housekeeping" },
        { name: "Security & Caretaker", href: "#security" },
        { name: "Event Management", href: "#events" },
        { name: "Manpower Solutions", href: "#manpower" },
        { name: "Facility Management", href: "#facility" },
        { name: "Canteen & Pantry", href: "#canteen" }
      ]
    },
    { name: "About Us", href: "#about" },
    { name: "Training & Quality", href: "#training" },
    { name: "Customer Satisfaction", href: "#customer-satisfaction" },
    { name: "Caretaker Duties", href: "#caretaker-responsibilities" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    
    // Search through sections and scroll to first match
    const searchTerm = searchQuery.toLowerCase()
    const searchableElements = [
      { term: "housekeeping cleaning", section: "services" },
      { term: "security caretaker", section: "services" },
      { term: "event management", section: "services" },
      { term: "manpower staff", section: "services" },
      { term: "about company", section: "about" },
      { term: "training quality", section: "training" },
      { term: "customer satisfaction", section: "customer-satisfaction" },
      { term: "caretaker responsibilities duties", section: "caretaker-responsibilities" },
      { term: "testimonials reviews", section: "testimonials" },
      { term: "faq questions", section: "faq" },
      { term: "contact phone email", section: "contact" }
    ]
    
    const match = searchableElements.find(item => 
      item.term.includes(searchTerm) || searchTerm.includes(item.term.split(' ')[0])
    )
    
    if (match) {
      const element = document.getElementById(match.section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setSearchOpen(false)
        setSearchQuery("")
      }
    }
  }

  const quickActions = [
    {
      name: "Call Now",
      icon: Phone,
      action: () => window.location.href = "tel:+91XXXXXXXXXX", // TODO: Replace with actual number
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      action: () => window.open("https://wa.me/91XXXXXXXXXX", "_blank"), // TODO: Replace with actual number
      color: "bg-green-500 hover:bg-green-600"
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xl font-bold">
              <span className="text-primary">APS</span>
              <span className="text-foreground ml-1">Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="text-foreground hover-elevate flex items-center gap-1 px-3 py-2"
                      data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <button
                          onClick={() => scrollToSection(subItem.href)}
                          className="w-full text-left cursor-pointer flex items-center gap-2"
                          data-testid={`nav-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {subItem.name}
                        </button>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover-elevate"
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Quick Actions - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  size="sm"
                  onClick={action.action}
                  className={`${action.color} text-white border-0 px-3 py-1.5 text-xs`}
                  data-testid={`quick-${action.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <action.icon className="h-3 w-3 mr-1" />
                  {action.name}
                </Button>
              ))}
            </div>

            {/* Search */}
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover-elevate"
                  data-testid="search-button"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Search APS Services</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search for services, info..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1"
                    data-testid="search-input"
                  />
                  <Button onClick={handleSearch} size="sm" data-testid="search-submit">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground">
                  Try: "housekeeping", "security", "training", "contact"
                </div>
              </DialogContent>
            </Dialog>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-elevate"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover-elevate"
                  data-testid="mobile-menu-trigger"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Quick Actions - Mobile */}
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        onClick={action.action}
                        className={`${action.color} text-white border-0`}
                        data-testid={`mobile-quick-${action.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <action.icon className="h-4 w-4 mr-2" />
                        {action.name}
                      </Button>
                    ))}
                  </div>

                  {/* Navigation - Mobile */}
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors w-full text-left py-2"
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </button>
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => scrollToSection(subItem.href)}
                              className="block text-muted-foreground hover:text-foreground transition-colors text-sm py-1"
                              data-testid={`mobile-nav-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              • {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}