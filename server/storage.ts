import { 
  type User, 
  type InsertUser,
  type ContactInquiry,
  type InsertContactInquiry,
  type QuoteRequest,
  type InsertQuoteRequest
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact inquiry methods
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined>;
  
  // Quote request methods
  createQuoteRequest(quote: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  updateQuoteRequestStatus(id: string, status: string): Promise<QuoteRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Map<string, ContactInquiry>;
  private quoteRequests: Map<string, QuoteRequest>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.quoteRequests = new Map();
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact inquiry methods
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

  // Quote request methods
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
}

export const storage = new MemStorage();
