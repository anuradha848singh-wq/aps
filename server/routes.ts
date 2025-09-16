import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertQuoteRequestSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcryptjs";

// Extend the Session interface to include user info
declare module 'express-session' {
  interface SessionData {
    userId?: string;
    username?: string;
  }
}

// Authentication middleware
function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    return res.status(401).json({ 
      success: false, 
      message: "Authentication required. Please log in to access admin features." 
    });
  }
}

// Initialize default admin user on startup
async function initializeDefaultAdmin() {
  const existingAdmin = await storage.getUserByUsername('admin');
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await storage.createUser({
      username: 'admin',
      password: hashedPassword
    });
    console.log('✅ Default admin user created with username: admin, password: admin123');
    console.log('⚠️  SECURITY WARNING: Please change the default password after first login!');
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize default admin user
  await initializeDefaultAdmin();
  
  // Login route
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ 
          success: false, 
          message: "Username and password are required" 
        });
      }
      
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ 
          success: false, 
          message: "Invalid username or password" 
        });
      }
      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ 
          success: false, 
          message: "Invalid username or password" 
        });
      }
      
      // Set session
      req.session.userId = user.id;
      req.session.username = user.username;
      
      res.json({ 
        success: true, 
        message: "Logged in successfully",
        user: { id: user.id, username: user.username }
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });
  
  // Logout route
  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ 
          success: false, 
          message: "Error logging out" 
        });
      }
      res.json({ success: true, message: "Logged out successfully" });
    });
  });
  
  // Check authentication status
  app.get("/api/auth/me", (req, res) => {
    if (req.session && req.session.userId) {
      res.json({ 
        success: true, 
        user: { 
          id: req.session.userId, 
          username: req.session.username 
        }
      });
    } else {
      res.status(401).json({ 
        success: false, 
        message: "Not authenticated" 
      });
    }
  });
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // TODO: Send email notification to admin
      // TODO: Send confirmation email to user
      
      res.status(201).json({ 
        success: true, 
        message: "Contact inquiry submitted successfully",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Quote request submission
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(validatedData);
      
      // TODO: Send email notification to admin
      // TODO: Send confirmation email to user
      
      res.status(201).json({ 
        success: true, 
        message: "Quote request submitted successfully",
        id: quote.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating quote request:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact inquiries (for admin) - PROTECTED
  app.get("/api/admin/inquiries", requireAuth, async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Get all quote requests (for admin) - PROTECTED
  app.get("/api/admin/quotes", requireAuth, async (req, res) => {
    try {
      const quotes = await storage.getQuoteRequests();
      res.json({ success: true, data: quotes });
    } catch (error) {
      console.error("Error fetching quotes:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Update inquiry status - PROTECTED
  app.patch("/api/admin/inquiries/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || typeof status !== "string") {
        return res.status(400).json({ 
          success: false, 
          message: "Status is required" 
        });
      }

      const inquiry = await storage.updateContactInquiryStatus(id, status);
      
      if (!inquiry) {
        return res.status(404).json({ 
          success: false, 
          message: "Inquiry not found" 
        });
      }

      res.json({ success: true, data: inquiry });
    } catch (error) {
      console.error("Error updating inquiry status:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Update quote status - PROTECTED
  app.patch("/api/admin/quotes/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || typeof status !== "string") {
        return res.status(400).json({ 
          success: false, 
          message: "Status is required" 
        });
      }

      const quote = await storage.updateQuoteRequestStatus(id, status);
      
      if (!quote) {
        return res.status(404).json({ 
          success: false, 
          message: "Quote not found" 
        });
      }

      res.json({ success: true, data: quote });
    } catch (error) {
      console.error("Error updating quote status:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ success: true, message: "API is healthy", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
