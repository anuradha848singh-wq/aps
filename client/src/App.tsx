import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import EnhancedNavigation from "@/components/EnhancedNavigation";
import EnhancedHero from "@/components/EnhancedHero";
import AppleScrollSection from "@/components/AppleScrollSection";
import Services from "@/components/Services";
import TeamPhotos from "@/components/TeamPhotos";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Training from "@/components/Training";
import CustomerSatisfaction from "@/components/CustomerSatisfaction";
import CaretakerResponsibilities from "@/components/CaretakerResponsibilities";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/not-found";

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedNavigation />
      <main>
        <EnhancedHero />
        <AppleScrollSection />
        <Services />
        <TeamPhotos />
        <WhyChooseUs />
        <About />
        <Training />
        <CustomerSatisfaction />
        <CaretakerResponsibilities />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <FloatingQuoteButton />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light">
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
