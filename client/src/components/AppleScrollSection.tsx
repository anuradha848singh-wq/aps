import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { 
  Building, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Crosshair, 
  Activity, 
  Users, 
  ClipboardCheck, 
  Cpu, 
  ArrowRight 
} from "lucide-react";
// Proper Vite asset imports
import facilityImage from "@assets/social_facility.webp";
import housekeepingImage from "@assets/social_housekeeping.webp";

import securityTeamImage from "@assets/aps_security_team.webp";
import supervisorImage from "@assets/social_supervisor.webp";

import canteenImage from "@assets/social_canteen.webp";
import supportImage from "@assets/social_event.webp";

import hospitalStaffImage from "@assets/aps_hospital_staff.webp";
import caretakerImage from "@assets/social_caretaker.webp";

// Combine the textual content with image/bento visual data
const servicePairs: any[] = [
  {
    id: "group-1",
    label: "MAINTENANCE",
    image1: housekeepingImage,
    image2: facilityImage,
    icons: [Building, CheckCircle2, Star],
    color: "from-blue-500 to-indigo-500",
    service1: {
      title: "Housekeeping",
      desc: "Professional cleaning and hygiene solutions engineered for flawless operations.",
      features: ["Deep sanitization protocols", "Eco-friendly consumables", "Mechanized floor care"]
    },
    service2: {
      title: "Industrial Facility",
      desc: "End-to-end management ensuring maximum uptime and regulatory compliance.",
      features: ["M&E maintenance", "Predictive asset care", "24/7 technical support"]
    }
  },
  {
    id: "group-2",
    label: "PROTECTION",
    image1: securityTeamImage,
    imageClass1: "object-contain p-4 scale-95", // "this one but small"
    image2: supervisorImage,
    icons: [ShieldCheck, Crosshair, Activity],
    color: "from-amber-500 to-orange-500",
    service1: {
      title: "Security Guard",
      desc: "Elite personnel trained for rapid response and comprehensive premises protection.",
      features: ["Access control systems", "Threat assessment", "Crowd management"]
    },
    service2: {
      title: "Armed Supervisor",
      desc: "Licensed professionals capable of commanding high-risk security environments.",
      features: ["Licensed weaponry", "Shift command", "Crisis intervention"]
    }
  },
  {
    id: "group-3",
    label: "SUPPORT",
    image1: canteenImage,
    image2: supportImage,
    icons: [Users, ClipboardCheck, Cpu],
    color: "from-emerald-500 to-teal-500",
    service1: {
      title: "Canteen & Pantry",
      desc: "Fully managed nutritional operations prioritizing hygiene and operational efficiency.",
      features: ["FSSAI compliant menus", "Inventory management", "Kitchen staff deployment"]
    },
    service2: {
      title: "Event Logistics",
      desc: "Flawless manpower coordination for high-profile corporate and public gatherings.",
      features: ["VIP ushering", "Setup & breakdown", "Crowd coordination"]
    }
  },
  {
    id: "group-4",
    label: "HEALTH",
    image1: hospitalStaffImage, // "this as main image big"
    image2: caretakerImage,
    icons: [Activity, Users, ShieldCheck],
    color: "from-rose-500 to-pink-500",
    service1: {
      title: "Healthcare Staff",
      desc: "Trained attendants providing critical support in sensitive medical environments.",
      features: ["Biohazard handling", "Patient transport", "OT sanitation support"]
    },
    service2: {
      title: "Caretaker Outsourcing",
      desc: "Dedicated personnel ensuring the smooth running of premium residential complexes.",
      features: ["Tenant coordination", "Common area upkeep", "Vendor management"]
    }
  }
];

const AnimatedTextBlock = ({ service }: { service: any }) => {
  return (
    <div className="flex flex-col space-y-4 lg:space-y-6 text-left">
      <h3 className="text-3xl lg:text-5xl font-black text-foreground uppercase tracking-tight">
        {service.title}
      </h3>
      <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
        {service.desc}
      </p>
      <ul className="space-y-2 lg:space-y-3">
        {service.features.map((feat: string, idx: number) => (
          <li 
            key={idx}
            className="flex items-center gap-3 text-sm font-bold text-foreground bg-primary/5 border border-primary/20 px-4 py-2 rounded-full backdrop-blur-sm w-fit"
          >
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function AppleScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 400vh container gives enough room to scroll through 4 horizontal panels.
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Add buttery smooth spring physics to the scroll
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map smooth vertical scroll (0 -> 1) to horizontal translation (0% -> -75%)
  const x = useTransform(smoothScrollY, [0, 1], ["0%", "-75%"]);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* DESKTOP HORIZONTAL SCROLL (Hidden on Mobile) */}
      <section ref={targetRef} className="relative h-[400vh] bg-background hidden md:block">
        
        {/* Sticky viewport wrapper */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          {/* Horizontal sliding container */}
          <motion.div style={{ x }} className="flex h-full w-[400vw]">
            
            {servicePairs.map((pair) => (
              <div key={pair.id} className="relative w-[100vw] h-full flex flex-col justify-center px-6 md:px-16 overflow-hidden border-r border-border/10">
                
                {/* Massive faded background typography */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-0 overflow-hidden">
                  <h1 className="text-[25vw] font-black text-foreground whitespace-nowrap tracking-tighter">
                    {pair.label}
                  </h1>
                </div>

                {/* Texture Layer */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none z-0" />

                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full py-20">
                  
                  {/* Left Side: Text Details */}
                  <div className="flex-1 flex flex-col justify-center space-y-12">
                    <AnimatedTextBlock service={pair.service1} />
                    <div className="h-px w-32 bg-primary/30" />
                    <AnimatedTextBlock service={pair.service2} />
                    
                    <button 
                      onClick={scrollToContact}
                      className="w-fit mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-colors shadow-2xl shadow-foreground/20"
                    >
                      Deploy Service <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>

                  {/* Right Side: Bento Box Visual UI */}
                  <div className="flex-1 w-full h-[50vh] lg:h-[80vh] flex items-center justify-center relative perspective-1000">
                    
                    {/* Glowing Aura Behind Card */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br ${pair.color} rounded-full blur-[100px] opacity-20`} />

                    <motion.div 
                      whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] bg-background/40 border border-border/50 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col p-6 gap-4"
                    >
                      {/* 2-Grid Vertical Hero Image Area */}
                      <div className="relative flex-1 flex flex-col gap-4 overflow-hidden rounded-3xl">
                        <div className="relative flex-1 rounded-2xl overflow-hidden bg-muted/80 flex justify-center items-center shadow-inner group cursor-pointer">
                          <img 
                            src={pair.image1} 
                            alt={pair.service1.title} 
                            className={`w-full h-full ${pair.imageClass1 || 'object-cover'} mix-blend-luminosity hover:mix-blend-normal transition-all duration-700`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                             <span className="text-white font-bold text-sm tracking-widest uppercase">{pair.service1.title}</span>
                          </div>
                        </div>
                        <div className="relative flex-1 rounded-2xl overflow-hidden bg-muted/80 flex justify-center items-center shadow-inner group cursor-pointer">
                          <img 
                            src={pair.image2} 
                            alt={pair.service2.title} 
                            className={`w-full h-full ${pair.imageClass2 || 'object-cover'} mix-blend-luminosity hover:mix-blend-normal transition-all duration-700`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                             <span className="text-white font-bold text-sm tracking-widest uppercase">{pair.service2.title}</span>
                          </div>
                        </div>
                        
                        {/* Main Gradient Aura Overlay for the box */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${pair.color} mix-blend-overlay opacity-30 pointer-events-none rounded-3xl`} />
                      </div>

                      {/* Bottom Bento Modules */}
                      <div className="flex gap-4 h-32 shrink-0">
                        
                        {/* Mini Stat/Icon Card 1 */}
                        <div className="flex-1 rounded-3xl bg-muted/30 border border-border/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                          <div className={`absolute inset-0 bg-gradient-to-br ${pair.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                          {React.createElement(pair.icons[1], { className: "w-6 h-6 text-primary" })}
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Certified</span>
                        </div>

                        {/* Mini Stat/Icon Card 2 */}
                        <div className="flex-1 rounded-3xl bg-muted/30 border border-border/50 flex flex-col items-center justify-center gap-2 relative overflow-hidden group">
                          <div className={`absolute inset-0 bg-gradient-to-br ${pair.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                          {React.createElement(pair.icons[2], { className: "w-6 h-6 text-primary" })}
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">24/7 Active</span>
                        </div>

                      </div>
                    </motion.div>

                  </div>

                </div>
              </div>
            ))}
            
          </motion.div>
        </div>
      </section>

      {/* MOBILE VERTICAL SCROLL (Hidden on Desktop) */}
      <section className="md:hidden flex flex-col w-full bg-background relative z-10 py-16 gap-24">
        {servicePairs.map((pair) => (
          <div key={pair.id + '-mobile'} className="px-5 flex flex-col gap-10">
            {/* Mobile Header / Typography */}
            <ScrollAnimation direction="up">
              <div className="flex flex-col gap-2 relative">
                <span className={`text-[12vw] font-black uppercase opacity-10 bg-clip-text text-transparent bg-gradient-to-br ${pair.color} leading-none tracking-tighter absolute -top-8 -left-2 z-0`}>
                  {pair.label}
                </span>
                <div className="relative z-10 flex flex-col gap-8 mt-6">
                  <AnimatedTextBlock service={pair.service1} />
                  <div className="h-px w-24 bg-primary/30" />
                  <AnimatedTextBlock service={pair.service2} />
                </div>
              </div>
            </ScrollAnimation>

            {/* Mobile Image Grid */}
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="relative w-full aspect-[3/4] rounded-[2rem] bg-background/60 border border-border/50 shadow-xl overflow-hidden flex flex-col p-4 gap-3">
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br ${pair.color} rounded-full blur-[80px] opacity-15`} />
              
              <div className="relative flex-1 flex flex-col gap-3 overflow-hidden rounded-2xl">
                <div className="relative flex-1 rounded-xl overflow-hidden bg-muted/80 flex justify-center items-center shadow-inner">
                  <img src={pair.image1} alt={pair.service1.title} className={`w-full h-full ${pair.imageClass1 || 'object-cover'} mix-blend-luminosity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                    <span className="text-white font-bold text-xs tracking-widest uppercase">{pair.service1.title}</span>
                  </div>
                </div>
                <div className="relative flex-1 rounded-xl overflow-hidden bg-muted/80 flex justify-center items-center shadow-inner">
                  <img src={pair.image2} alt={pair.service2.title} className={`w-full h-full ${pair.imageClass2 || 'object-cover'} mix-blend-luminosity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                    <span className="text-white font-bold text-xs tracking-widest uppercase">{pair.service2.title}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Mobile Bento */}
              <div className="flex gap-3 h-20 shrink-0">
                <div className="flex-1 rounded-xl bg-muted/30 border border-border/50 flex flex-col items-center justify-center gap-1">
                  {React.createElement(pair.icons[1], { className: "w-5 h-5 text-primary" })}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Certified</span>
                </div>
                <div className="flex-1 rounded-xl bg-muted/30 border border-border/50 flex flex-col items-center justify-center gap-1">
                  {React.createElement(pair.icons[2], { className: "w-5 h-5 text-primary" })}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">24/7</span>
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Mobile Deploy Button */}
            <ScrollAnimation direction="up" delay={0.2}>
              <button 
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-colors shadow-lg"
              >
                Deploy Service <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </ScrollAnimation>
          </div>
        ))}
      </section>
    </>
  );
}
