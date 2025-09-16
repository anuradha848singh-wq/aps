# APS Facility Management Website

## Overview

This is a professional website for Assistance Protection and Services (APS), a facility management company based in India. The application provides a comprehensive digital presence showcasing their services including housekeeping, security, caretaker outsourcing, event management, and manpower solutions. The website features a modern, responsive design with dark/light mode theming, smooth animations, and interactive components to engage potential clients and provide detailed information about APS's professional facility management services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based architecture
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Component Library**: Radix UI primitives with custom shadcn/ui components for consistent, accessible UI
- **Animations**: Framer Motion for smooth scroll animations, parallax effects, and interactive transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query for server state and React Context for theme management

### Backend Architecture
- **Runtime**: Node.js with Express.js for RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for contact inquiries and quote requests with validation

### Design System
- **Theme Support**: Light/dark mode with CSS custom properties for consistent theming
- **Typography**: Inter font family for professional, readable text
- **Color Palette**: Professional blue/gray palette with brand colors for trust and reliability
- **Spacing**: Tailwind-based spacing system with consistent 4-unit increments
- **Components**: Modular, reusable components following atomic design principles

### Development Architecture
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support with shared types between client and server
- **Path Aliases**: Configured aliases for clean imports (@, @shared, @assets)
- **Code Quality**: ESLint and TypeScript compiler checks for code consistency

### Data Management
- **Database Schema**: PostgreSQL tables for users, contact inquiries, and quote requests
- **Validation**: Zod schemas for runtime type validation on API endpoints
- **Migration**: Drizzle Kit for database schema migrations and management

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI primitives for accessible component foundation
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for smooth transitions and scroll effects
- **Lucide React**: Icon library for consistent iconography

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: TypeScript ORM for type-safe database operations
- **Express.js**: Web application framework for API endpoints

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **React Query**: Data fetching and caching library
- **Wouter**: Lightweight routing library for React

### Assets and Media
- **Google Fonts**: Inter font family for typography
- **Generated Images**: AI-generated images for hero sections and service demonstrations
- **Custom Assets**: Brand-specific imagery stored in attached_assets directory

### Form and Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for both client and server-side validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation