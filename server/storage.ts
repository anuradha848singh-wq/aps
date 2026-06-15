import { 
  type User, 
  type InsertUser,
  type ContactInquiry,
  type InsertContactInquiry,
  type QuoteRequest,
  type InsertQuoteRequest
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface SiteContent {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    stats: Array<{ value: number; suffix: string; label: string }>;
  };
  contact: {
    phone1: string;
    phone2: string;
    email: string;
    address: string;
    whatsapp: string;
    hours: string;
  };
  company: {
    tagline: string;
    founded: string;
    description: string;
    esic: string;
    pf: string;
    pan: string;
    reg: string;
  };
  about: {
    title: string;
    body1: string;
    body2: string;
  };
}

const defaultContent: SiteContent = {
  hero: {
    badge: "Trusted Manpower Solutions",
    title1: "Building Workforce.",
    title2: "Delivering Excellence.",
    subtitle: "APS Manpower Services is a leading provider of integrated manpower solutions across Security, Housekeeping, Facility Management and Staffing Services.",
    stats: [
      { value: 200, suffix: "+", label: "Trained Employees" },
      { value: 50, suffix: "+", label: "Corporate Clients" },
      { value: 8, suffix: "+", label: "Years in Service" },
      { value: 24, suffix: "/7", label: "Support Services" },
    ],
  },
  contact: {
    phone1: "+91 (XXX) XXX-XXXX",
    phone2: "+91 (XXX) XXX-XXXX",
    email: "info@apsservices.com",
    address: "Business Address, City, State – PIN Code",
    whatsapp: "91XXXXXXXXXX",
    hours: "Mon – Sat: 9 AM – 6 PM",
  },
  company: {
    tagline: "People. Trust. Performance.",
    founded: "2016",
    description: "Professional facility management for factories, offices, malls, and residences — delivering consistency, reliability, and quality across India.",
    esic: "18000318980001099",
    pf: "MPIND1982610000",
    pan: "EVTPS1296E",
    reg: "INDO240410SE004049",
  },
  about: {
    title: "A Company Built on Trust & Quality",
    body1: "Assistance Protection and Services (APS) is a specialized service provider delivering housekeeping, security, event management, caretaker outsourcing, and comprehensive manpower services to clients across India.",
    body2: "We work with factories, shopping malls, townships, corporate offices, and residences — bringing the same commitment to quality regardless of client size.",
  },
};

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined>;
  
  createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  updateQuoteRequestStatus(id: string, status: string): Promise<QuoteRequest | undefined>;

  getSiteContent(): Promise<SiteContent>;
  updateSiteContent(content: Partial<SiteContent>): Promise<SiteContent>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private quoteRequests: Map<string, QuoteRequest>;
  private siteContent: SiteContent;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.quoteRequests = new Map();
    this.siteContent = JSON.parse(JSON.stringify(defaultContent));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      id,
      name: insertInquiry.name,
      email: insertInquiry.email,
      phone: insertInquiry.phone ?? null,
      company: insertInquiry.company ?? null,
      service: insertInquiry.service ?? null,
      message: insertInquiry.message,
      createdAt: new Date(),
      status: "new"
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined> {
    const inquiry = this.contactInquiries.get(id);
    if (inquiry) {
      inquiry.status = status;
      this.contactInquiries.set(id, inquiry);
      return inquiry;
    }
    return undefined;
  }

  async createQuoteRequest(insertQuote: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quote: QuoteRequest = {
      id,
      name: insertQuote.name,
      email: insertQuote.email,
      phone: insertQuote.phone ?? null,
      company: insertQuote.company ?? null,
      service: insertQuote.service,
      facility: insertQuote.facility ?? null,
      message: insertQuote.message,
      createdAt: new Date(),
      status: "pending"
    };
    this.quoteRequests.set(id, quote);
    return quote;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateQuoteRequestStatus(id: string, status: string): Promise<QuoteRequest | undefined> {
    const quote = this.quoteRequests.get(id);
    if (quote) {
      quote.status = status;
      this.quoteRequests.set(id, quote);
      return quote;
    }
    return undefined;
  }

  async getSiteContent(): Promise<SiteContent> {
    return this.siteContent;
  }

  async updateSiteContent(updates: Partial<SiteContent>): Promise<SiteContent> {
    this.siteContent = {
      ...this.siteContent,
      ...updates,
      hero: updates.hero ? { ...this.siteContent.hero, ...updates.hero } : this.siteContent.hero,
      contact: updates.contact ? { ...this.siteContent.contact, ...updates.contact } : this.siteContent.contact,
      company: updates.company ? { ...this.siteContent.company, ...updates.company } : this.siteContent.company,
      about: updates.about ? { ...this.siteContent.about, ...updates.about } : this.siteContent.about,
    };
    return this.siteContent;
  }
}

export const storage = new MemStorage();
