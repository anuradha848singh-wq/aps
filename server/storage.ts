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
    badge: "Your One-Stop Facility Management Partner in Indore",
    title1: "All Manpower.",
    title2: "All Solutions. Delivered.",
    subtitle: "Assistance Protection and Services (APS) provides expert housekeeping, security, caretaker outsourcing, event management and industrial facility services to factories, malls, offices and hospitals across Indore and Madhya Pradesh.",
    stats: [
      { value: 500, suffix: "+", label: "Trained Manpower" },
      { value: 100, suffix: "+", label: "Clients Served" },
      { value: 10, suffix: "+", label: "Years of Trust" },
      { value: 24, suffix: "/7", label: "Support Available" },
    ],
  },
  contact: {
    phone1: "+91 93400 65775",
    phone2: "+91 91791 86798",
    email: "assistanceprotectionservices@gmail.com",
    address: "315/B Nyaya Nagar Extension, Indore, Madhya Pradesh",
    whatsapp: "919340065775",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  },
  company: {
    tagline: "People. Trust. Performance.",
    founded: "2014",
    description: "Professional facility management for factories, offices, malls, hospitals, and residences across Indore and Madhya Pradesh — delivering consistency, reliability, and quality.",
    esic: "18000318980001099",
    pf: "MPIND1982610000",
    pan: "EVTPS1296E",
    reg: "INDO240410SE004049",
  },
  about: {
    title: "A Company Built on Trust & Quality",
    body1: "Assistance Protection and Services (APS) is a highly specialized facility management and manpower solutions provider based in Indore, Madhya Pradesh. We serve clients across industrial sectors including factories, malls, townships, hospitals, offices, and residences.",
    body2: "Our \"beyond the brief\" approach keeps customer satisfaction at the core of everything we do — delivering impeccable service within agreed timeframes for both government and private organizations.",
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
