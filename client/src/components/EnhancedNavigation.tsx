import { useState, useEffect } from "react"
import { Link } from "wouter"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, ChevronDown, ArrowRight } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import logoImage from "@assets/image_1781530760930.webp"

export default function EnhancedNavigation() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navLinks = [
    { label: "Home", action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false) } },
    { label: "About Us", id: "about" },
    {
      label: "Services", id: "services",
      sub: [
        { label: "Housekeeping & Cleaning", id: "services" },
        { label: "Security & Caretaker", id: "services" },
        { label: "Event Management", id: "services" },
        { label: "Manpower Solutions", id: "services" },
        { label: "Facility Management", id: "services" },
        { label: "Canteen & Pantry", id: "services" },
      ]
    },
    { label: "Training", id: "training" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact Us", id: "contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full bg-background transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b"}`}>
      <div className="flex items-center h-16 sm:h-[4.5rem]">

        {/* Logo */}
        <div className="pl-4 sm:pl-6 pr-4 sm:pr-6 shrink-0 flex items-center">
          <Link href="/">
            <img
              src={logoImage}
              alt="APS Manpower Services"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-border shrink-0" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center px-4">
          {navLinks.map((item) =>
            item.sub ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate">
                    {item.label} <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52">
                  {item.sub.map((s) => (
                    <DropdownMenuItem key={s.label} asChild>
                      <button onClick={() => scrollTo(s.id)} className="w-full cursor-pointer text-sm">{s.label}</button>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                key={item.label}
                onClick={() => item.action ? item.action() : scrollTo(item.id!)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center ml-auto">
          <button
            onClick={toggleTheme}
            className="hidden lg:flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
            aria-label="Toggle theme"
            data-testid="theme-toggle"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Gold GET A QUOTE block — desktop */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden lg:flex items-center gap-2.5 h-[4.5rem] px-6 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors group shrink-0"
            data-testid="nav-get-quote"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1 pr-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-md"
              aria-label="Toggle theme"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-md" data-testid="mobile-menu-trigger">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <img src={logoImage} alt="APS Manpower Services" className="h-10 w-auto" />
                  </div>
                  <nav className="flex flex-col p-4 gap-1 flex-1">
                    {navLinks.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => item.action ? item.action() : scrollTo(item.id!)}
                        className="text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <button
                      onClick={() => scrollTo("contact")}
                      className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
