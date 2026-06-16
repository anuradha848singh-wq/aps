import React from "react";
import { motion } from "framer-motion";

// Colors based on APS Design System
const NAVY = "hsl(215, 55%, 14%)";
const GOLD = "hsl(38, 72%, 40%)";
const WHITE = "hsl(0, 0%, 100%)";

export const CleaningAndFacilitySvg = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg mx-auto drop-shadow-2xl">
    {/* Base rotating grid */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{ originX: "250px", originY: "250px" }}
    >
      {[...Array(12)].map((_, i) => (
        <circle key={i} cx="250" cy="250" r={20 + i * 18} fill="none" stroke={NAVY} strokeWidth="1" strokeOpacity={0.2} strokeDasharray="4 8" />
      ))}
      {[...Array(8)].map((_, i) => (
        <line key={i} x1="250" y1="50" x2="250" y2="450" stroke={NAVY} strokeWidth="1" strokeOpacity={0.2} transform={`rotate(${i * 22.5} 250 250)`} />
      ))}
    </motion.g>

    {/* Dynamic sweeping arcs (cleaning/facility maintenance) */}
    {[1, 2, 3].map((ring) => (
      <motion.circle
        key={ring}
        cx="250"
        cy="250"
        r={60 + ring * 40}
        fill="none"
        stroke={GOLD}
        strokeWidth={4 + ring}
        strokeLinecap="round"
        strokeDasharray="150 400"
        animate={{ rotate: [0, 360] }}
        style={{ originX: "250px", originY: "250px" }}
        transition={{ duration: 3 + ring, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      />
    ))}

    {/* Central Core Facility Building */}
    <motion.rect x="210" y="210" width="80" height="80" fill={NAVY} rx="10" />
    <motion.rect x="230" y="190" width="40" height="120" fill={GOLD} rx="5" opacity="0.8" />
    
    {/* Sparkling / Purifying particles */}
    {[...Array(20)].map((_, i) => (
      <motion.circle
        key={`spark-${i}`}
        cx={250}
        cy={250}
        r={3}
        fill={WHITE}
        initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
        animate={{
          x: Math.cos(i * 18) * (100 + Math.random() * 100),
          y: Math.sin(i * 18) * (100 + Math.random() * 100),
          opacity: [0, 1, 0],
          scale: [0, 2, 0]
        }}
        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      />
    ))}
  </svg>
);

export const SecurityAndSupervisorSvg = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg mx-auto drop-shadow-2xl">
    {/* Radar Background */}
    {[...Array(5)].map((_, i) => (
      <circle key={i} cx="250" cy="250" r={40 * (i + 1)} fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.3" />
    ))}
    <motion.path
      d="M250 250 L250 50 A200 200 0 0 1 450 250 Z"
      fill={GOLD}
      opacity="0.15"
      style={{ originX: "250px", originY: "250px" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />

    {/* Large Shield Base */}
    <motion.path
      d="M250 100 L380 140 C380 280 320 380 250 420 C180 380 120 280 120 140 Z"
      fill={NAVY}
      stroke={GOLD}
      strokeWidth="8"
      strokeLinejoin="round"
    />

    {/* Holographic Inner Shield */}
    <motion.path
      d="M250 130 L340 160 C340 260 300 340 250 370 C200 340 160 260 160 160 Z"
      fill="none"
      stroke={WHITE}
      strokeWidth="4"
      strokeDasharray="10 10"
      animate={{ strokeDashoffset: [0, 100] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />

    {/* Central Pulsing Security Eye / Core */}
    <motion.circle cx="250" cy="240" r="30" fill={GOLD} />
    <motion.circle
      cx="250" cy="240" r="45" fill="none" stroke={GOLD} strokeWidth="4"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Network nodes indicating monitoring */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 250 + Math.cos(rad) * 160;
      const y = 250 + Math.sin(rad) * 160;
      return (
        <motion.g key={i}>
          <line x1="250" y1="240" x2={x} y2={y} stroke={WHITE} strokeOpacity="0.4" strokeWidth="2" />
          <motion.circle
            cx={x} cy={y} r="8" fill={NAVY} stroke={GOLD} strokeWidth="3"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          />
        </motion.g>
      );
    })}
  </svg>
);

export const CanteenAndEventSvg = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg mx-auto drop-shadow-2xl">
    {/* Rotating Event Spotlights */}
    <motion.polygon
      points="250,50 100,450 400,450"
      fill={GOLD}
      opacity="0.1"
      style={{ originX: "250px", originY: "50px" }}
      animate={{ rotate: [15, -15, 15] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.polygon
      points="100,50 250,450 400,50"
      fill={NAVY}
      opacity="0.1"
      style={{ originX: "250px", originY: "450px" }}
      animate={{ rotate: [-15, 15, -15] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Stage / Platter Platform */}
    <motion.ellipse cx="250" cy="350" rx="150" ry="40" fill={NAVY} stroke={GOLD} strokeWidth="6" />
    <motion.ellipse cx="250" cy="360" rx="150" ry="40" fill="none" stroke={WHITE} strokeWidth="2" strokeOpacity="0.5" />

    {/* Coffee Cup / Catering Core */}
    <motion.path d="M180 350 L180 200 C180 160 320 160 320 200 L320 350 Z" fill={GOLD} />
    <motion.path d="M320 220 C360 220 360 280 320 280" fill="none" stroke={GOLD} strokeWidth="18" strokeLinecap="round" />
    <motion.ellipse cx="250" cy="200" rx="70" ry="15" fill={NAVY} />

    {/* Volumetric Steam / Event Energy */}
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.path
        key={i}
        d={`M${200 + i * 20} 180 Q${220 + i * 20} 130 ${180 + i * 20} 80 T${200 + i * 20} 20`}
        fill="none"
        stroke={WHITE}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.8, 0], y: [-20, -60] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
      />
    ))}

    {/* Festive/Event Particles */}
    {[...Array(15)].map((_, i) => (
      <motion.rect
        key={`confetti-${i}`}
        x={250} y={350} width={8} height={8} fill={i % 2 === 0 ? GOLD : NAVY}
        animate={{
          x: (Math.random() - 0.5) * 300,
          y: -100 - Math.random() * 200,
          rotate: Math.random() * 360,
          opacity: [1, 0]
        }}
        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeOut", delay: Math.random() * 2 }}
      />
    ))}
  </svg>
);

export const HospitalAndCaretakerSvg = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full max-w-lg mx-auto drop-shadow-2xl">
    {/* Life Support / Pulse Monitor Background */}
    <motion.path
      d="M50 250 L150 250 L180 150 L220 350 L250 250 L450 250"
      fill="none"
      stroke={NAVY}
      strokeWidth="4"
      strokeOpacity="0.3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />

    {/* Shielded House / Caretaker complex */}
    <motion.path d="M150 280 L250 180 L350 280" fill="none" stroke={NAVY} strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
    <motion.path d="M170 280 L170 400 L330 400 L330 280" fill="none" stroke={NAVY} strokeWidth="20" />
    <motion.rect x="230" y="320" width="40" height="80" fill={GOLD} rx="4" />

    {/* Medical Cross (Hospital) floating inside */}
    <motion.g
      animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.rect x="235" y="100" width="30" height="90" fill={GOLD} rx="10" />
      <motion.rect x="205" y="130" width="90" height="30" fill={GOLD} rx="10" />
    </motion.g>

    {/* Protecting Hands/Aura */}
    <motion.path 
      d="M100 420 C150 480 350 480 400 420" 
      fill="none" 
      stroke={GOLD} 
      strokeWidth="16" 
      strokeLinecap="round" 
    />
    <motion.path 
      d="M80 400 C150 480 350 480 420 400" 
      fill="none" 
      stroke={GOLD} 
      strokeWidth="8" 
      strokeOpacity="0.4"
      strokeLinecap="round" 
      animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Healing particles */}
    {[...Array(12)].map((_, i) => (
      <motion.circle
        key={i}
        cx={150 + Math.random() * 200}
        cy={300 + Math.random() * 100}
        r={4}
        fill={WHITE}
        animate={{ y: -200 - Math.random() * 100, opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 3 }}
      />
    ))}
  </svg>
);
