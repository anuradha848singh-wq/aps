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
    description: "Professional facility management for factories, offices, malls, hospitals, and residences across Indore and Madhya Pradesh.",
    esic: "18000318980001099",
    pf: "MPIND1982610000",
    pan: "EVTPS1296E",
    reg: "INDO240410SE004049",
  },
  about: {
    title: "A Company Built on Trust & Quality",
    body1: "Assistance Protection and Services (APS) is a highly specialized facility management and manpower solutions provider based in Indore, Madhya Pradesh. We serve clients across industrial sectors including factories, malls, townships, hospitals, offices, and residences.",
    body2: 'Our "beyond the brief" approach keeps customer satisfaction at the core of everything we do — delivering impeccable service within agreed timeframes for both government and private organizations.',
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
