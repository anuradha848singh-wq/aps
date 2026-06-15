import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

export interface SiteContent {
  hero: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    stats: Array<{ value: number; suffix: string; label: string }>
  }
  contact: {
    phone1: string
    phone2: string
    email: string
    address: string
    whatsapp: string
    hours: string
  }
  company: {
    tagline: string
    founded: string
    description: string
    esic: string
    pf: string
    pan: string
    reg: string
  }
  about: {
    title: string
    body1: string
    body2: string
  }
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
    description: "Professional facility management for factories, offices, malls, and residences.",
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
}

export function useSiteContent() {
  const { data, isLoading, error } = useQuery<SiteContent>({
    queryKey: ["/api/content"],
    queryFn: async () => {
      const res = await fetch("/api/content")
      const json = await res.json()
      if (json.success) return json.data
      throw new Error(json.message)
    },
    staleTime: 30_000,
    placeholderData: defaultContent,
  })

  return {
    content: data ?? defaultContent,
    isLoading,
    error,
  }
}

export function useUpdateSiteContent() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updates: Partial<SiteContent>) => {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      return json.data as SiteContent
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["/api/content"], data)
    },
  })
}
