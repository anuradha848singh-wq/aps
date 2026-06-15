import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertQuoteRequestSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcryptjs";

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    username?: string;
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.status(401).json({ success: false, message: "Authentication required." });
}

async function initializeDefaultAdmin() {
  const existingAdmin = await storage.getUserByUsername('admin');
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await storage.createUser({ username: 'admin', password: hashedPassword });
    console.log('✅ Default admin user created with username: admin, password: admin123');
    console.log('⚠️  SECURITY WARNING: Please change the default password after first login!');
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  await initializeDefaultAdmin();

  // Auth routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required" });
      }
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid username or password" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: "Invalid username or password" });
      }
      req.session.userId = user.id;
      req.session.username = user.username;
      res.json({ success: true, message: "Logged in successfully", user: { id: user.id, username: user.username } });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ success: false, message: "Error logging out" });
      res.json({ success: true, message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/me", (req, res) => {
    if (req.session && req.session.userId) {
      res.json({ success: true, user: { id: req.session.userId, username: req.session.username } });
    } else {
      res.status(401).json({ success: false, message: "Not authenticated" });
    }
  });

  // Public site content
  app.get("/api/content", async (req, res) => {
    try {
      const content = await storage.getSiteContent();
      res.json({ success: true, data: content });
    } catch (error) {
      console.error("Error fetching site content:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Admin update site content
  app.put("/api/admin/content", requireAuth, async (req, res) => {
    try {
      const updated = await storage.updateSiteContent(req.body);
      res.json({ success: true, data: updated });
    } catch (error) {
      console.error("Error updating site content:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({ success: true, message: "Contact inquiry submitted successfully", id: inquiry.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Quote request
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(validatedData);
      res.status(201).json({ success: true, message: "Quote request submitted successfully", id: quote.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error creating quote request:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Admin: get inquiries
  app.get("/api/admin/inquiries", requireAuth, async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, data: inquiries });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Admin: get quotes
  app.get("/api/admin/quotes", requireAuth, async (req, res) => {
    try {
      const quotes = await storage.getQuoteRequests();
      res.json({ success: true, data: quotes });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Admin: update inquiry status
  app.patch("/api/admin/inquiries/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      if (!status) return res.status(400).json({ success: false, message: "Status is required" });
      const inquiry = await storage.updateContactInquiryStatus(id, status);
      if (!inquiry) return res.status(404).json({ success: false, message: "Inquiry not found" });
      res.json({ success: true, data: inquiry });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Admin: update quote status
  app.patch("/api/admin/quotes/:id/status", requireAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      if (!status) return res.status(400).json({ success: false, message: "Status is required" });
      const quote = await storage.updateQuoteRequestStatus(id, status);
      if (!quote) return res.status(404).json({ success: false, message: "Quote not found" });
      res.json({ success: true, data: quote });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ success: true, message: "API is healthy", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
