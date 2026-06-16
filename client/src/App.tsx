import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import React, { Suspense, lazy } from "react";

// Critical components loaded immediately
import EnhancedNavigation from "@/components/EnhancedNavigation";
import EnhancedHero from "@/components/EnhancedHero";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";

// Lazy loaded heavy components
const AppleScrollSection = lazy(() => import("@/components/AppleScrollSection"));
const Services = lazy(() => import("@/components/Services"));
const TeamPhotos = lazy(() => import("@/components/TeamPhotos"));
const About = lazy(() => import("@/components/About"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Training = lazy(() => import("@/components/Training"));
const CustomerSatisfaction = lazy(() => import("@/components/CustomerSatisfaction"));
const CaretakerResponsibilities = lazy(() => import("@/components/CaretakerResponsibilities"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedNavigation />
      <main>
        <EnhancedHero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
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
        </Suspense>
      </main>
      <FloatingQuoteButton />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
