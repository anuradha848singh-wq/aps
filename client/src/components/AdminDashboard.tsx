import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useSiteContent, useUpdateSiteContent, type SiteContent } from "@/hooks/useSiteContent"
import {
  MessageSquare, FileText, Clock, RefreshCw,
  Mail, Phone, Building, Settings, Save, Globe,
  Check, Loader2, Plus, Trash2
} from "lucide-react"

interface ContactInquiry {
  id: string; name: string; email: string; phone: string | null;
  company: string | null; service: string | null; message: string;
  createdAt: Date; status: string;
}
interface QuoteRequest {
  id: string; name: string; email: string; phone: string | null;
  company: string | null; service: string; facility: string | null;
  message: string; createdAt: Date; status: string;
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: "bg-blue-50 text-blue-700 border-blue-200",
    contacted: "bg-yellow-50 text-yellow-700 border-yellow-200",
    resolved: "bg-green-50 text-green-700 border-green-200",
    pending: "bg-orange-50 text-orange-700 border-orange-200",
    quoted: "bg-blue-50 text-blue-700 border-blue-200",
    accepted: "bg-green-50 text-green-700 border-green-200",
    rejected: "bg-red-50 text-red-700 border-red-200",
  }
  return (
    <Badge variant="outline" className={colors[status] || "bg-gray-50 text-gray-700"}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  }).format(date)
}

// ─── Content Editor ──────────────────────────────────────────────────────────
function ContentEditor() {
  const { toast } = useToast()
  const { content, isLoading } = useSiteContent()
  const updateContent = useUpdateSiteContent()
  const [draft, setDraft] = useState<SiteContent | null>(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (content && !draft) setDraft(JSON.parse(JSON.stringify(content)))
  }, [content])

  if (isLoading || !draft) {
    return <div className="flex items-center justify-center py-20"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
  }

  const save = async (section: keyof SiteContent) => {
    try {
      await updateContent.mutateAsync({ [section]: draft[section] })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
      toast({ title: "Saved!", description: "Website updated live." })
    } catch {
      toast({ title: "Save failed", description: "Please try again.", variant: "destructive" })
    }
  }

  const set = (section: keyof SiteContent, key: string, value: string) => {
    setDraft(d => d ? { ...d, [section]: { ...(d[section] as any), [key]: value } } : d)
  }

  const setStat = (i: number, key: string, value: string | number) => {
    setDraft(d => {
      if (!d) return d
      const stats = [...d.hero.stats]
      stats[i] = { ...stats[i], [key]: key === 'value' ? Number(value) : value }
      return { ...d, hero: { ...d.hero, stats } }
    })
  }

  const addStat = () => {
    setDraft(d => d ? {
      ...d, hero: { ...d.hero, stats: [...d.hero.stats, { value: 0, suffix: "+", label: "New Stat" }] }
    } : d)
  }

  const removeStat = (i: number) => {
    setDraft(d => d ? {
      ...d, hero: { ...d.hero, stats: d.hero.stats.filter((_, idx) => idx !== i) }
    } : d)
  }

  const fieldClass = "text-sm"
  const labelClass = "text-xs font-semibold uppercase tracking-wide text-muted-foreground"

  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-base">Hero Section</CardTitle>
          <Button size="sm" onClick={() => save("hero")} disabled={updateContent.isPending}>
            {saved ? <Check className="h-3.5 w-3.5 mr-1.5" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
            {updateContent.isPending ? "Saving..." : saved ? "Saved!" : "Save"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className={labelClass}>Badge label</Label>
              <Input className={fieldClass} value={draft.hero.badge} onChange={e => set("hero", "badge", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label className={labelClass}>Headline line 1</Label>
              <Input className={fieldClass} value={draft.hero.title1} onChange={e => set("hero", "title1", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label className={labelClass}>Headline line 2</Label>
              <Input className={fieldClass} value={draft.hero.title2} onChange={e => set("hero", "title2", e.target.value)} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className={labelClass}>Subtitle / description</Label>
            <Textarea className={fieldClass} rows={2} value={draft.hero.subtitle} onChange={e => set("hero", "subtitle", e.target.value)} />
          </div>

          {/* Stats */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className={labelClass}>Stats bar</Label>
              <Button size="sm" variant="outline" onClick={addStat}>
                <Plus className="h-3.5 w-3.5 mr-1" /> Add stat
              </Button>
            </div>
            <div className="space-y-2">
              {draft.hero.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    className="text-sm w-20 shrink-0" type="number"
                    value={stat.value} onChange={e => setStat(i, "value", e.target.value)}
                    placeholder="Value"
                  />
                  <Input
                    className="text-sm w-16 shrink-0"
                    value={stat.suffix} onChange={e => setStat(i, "suffix", e.target.value)}
                    placeholder="Suffix"
                  />
                  <Input
                    className="text-sm flex-1"
                    value={stat.label} onChange={e => setStat(i, "label", e.target.value)}
                    placeholder="Label"
                  />
                  <Button size="icon" variant="ghost" onClick={() => removeStat(i)} className="shrink-0">
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-base">Contact Information</CardTitle>
          <Button size="sm" onClick={() => save("contact")} disabled={updateContent.isPending}>
            {saved ? <Check className="h-3.5 w-3.5 mr-1.5" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
            Save
          </Button>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          {[
            { key: "phone1", label: "Phone 1" },
            { key: "phone2", label: "Phone 2" },
            { key: "email", label: "Email address" },
            { key: "whatsapp", label: "WhatsApp number (with country code)" },
            { key: "hours", label: "Business hours" },
            { key: "address", label: "Office address" },
          ].map(({ key, label }) => (
            <div key={key} className="space-y-1.5">
              <Label className={labelClass}>{label}</Label>
              <Input className={fieldClass} value={(draft.contact as any)[key]} onChange={e => set("contact", key, e.target.value)} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-base">About Section</CardTitle>
          <Button size="sm" onClick={() => save("about")} disabled={updateContent.isPending}>
            {saved ? <Check className="h-3.5 w-3.5 mr-1.5" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
            Save
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label className={labelClass}>Section title</Label>
            <Input className={fieldClass} value={draft.about.title} onChange={e => set("about", "title", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label className={labelClass}>First paragraph</Label>
            <Textarea className={fieldClass} rows={3} value={draft.about.body1} onChange={e => set("about", "body1", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label className={labelClass}>Second paragraph</Label>
            <Textarea className={fieldClass} rows={3} value={draft.about.body2} onChange={e => set("about", "body2", e.target.value)} />
          </div>
        </CardContent>
      </Card>

      {/* Company */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-base">Company Info & Legal</CardTitle>
          <Button size="sm" onClick={() => save("company")} disabled={updateContent.isPending}>
            {saved ? <Check className="h-3.5 w-3.5 mr-1.5" /> : <Save className="h-3.5 w-3.5 mr-1.5" />}
            Save
          </Button>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          {[
            { key: "tagline", label: "Tagline" },
            { key: "founded", label: "Founded year" },
            { key: "esic", label: "ESIC number" },
            { key: "pf", label: "PF number" },
            { key: "pan", label: "PAN number" },
            { key: "reg", label: "Trade registration" },
          ].map(({ key, label }) => (
            <div key={key} className="space-y-1.5">
              <Label className={labelClass}>{label}</Label>
              <Input className={fieldClass} value={(draft.company as any)[key]} onChange={e => set("company", key, e.target.value)} />
            </div>
          ))}
          <div className="space-y-1.5 sm:col-span-2">
            <Label className={labelClass}>Footer description</Label>
            <Textarea className={fieldClass} rows={2} value={draft.company.description} onChange={e => set("company", "description", e.target.value)} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const { toast } = useToast()
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [tab, setTab] = useState("inquiries")

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const [ir, qr] = await Promise.all([
        fetch('/api/admin/inquiries'),
        fetch('/api/admin/quotes')
      ])
      const id = await ir.json()
      const qd = await qr.json()
      if (id.success) setInquiries(id.data.map((x: any) => ({ ...x, createdAt: new Date(x.createdAt) })))
      if (qd.success) setQuotes(qd.data.map((x: any) => ({ ...x, createdAt: new Date(x.createdAt) })))
    } catch {
      toast({ title: "Error loading data", variant: "destructive" })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  const updateInquiryStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/inquiries/${id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    setInquiries(p => p.map(x => x.id === id ? { ...x, status } : x))
  }

  const updateQuoteStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/quotes/${id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    setQuotes(p => p.map(x => x.id === id ? { ...x, status } : x))
  }

  const stats = {
    totalInquiries: inquiries.length,
    newInquiries: inquiries.filter(i => i.status === 'new').length,
    totalQuotes: quotes.length,
    pendingQuotes: quotes.filter(q => q.status === 'pending').length,
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl mx-auto">

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: "Total Inquiries", value: stats.totalInquiries, icon: MessageSquare, color: "text-blue-600" },
          { label: "New Inquiries", value: stats.newInquiries, icon: Clock, color: "text-primary" },
          { label: "Total Quotes", value: stats.totalQuotes, icon: FileText, color: "text-green-600" },
          { label: "Pending Quotes", value: stats.pendingQuotes, icon: Clock, color: "text-orange-600" },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label}>
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{label}</p>
                  <p className={`text-2xl font-black ${color}`}>{isLoading ? "—" : value}</p>
                </div>
                <Icon className={`h-7 w-7 shrink-0 ${color} opacity-70`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab}>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <TabsList className="grid grid-cols-3 w-full sm:w-auto">
            <TabsTrigger value="inquiries" className="text-xs sm:text-sm" data-testid="tab-inquiries">
              Inquiries {stats.totalInquiries > 0 && `(${stats.totalInquiries})`}
            </TabsTrigger>
            <TabsTrigger value="quotes" className="text-xs sm:text-sm" data-testid="tab-quotes">
              Quotes {stats.totalQuotes > 0 && `(${stats.totalQuotes})`}
            </TabsTrigger>
            <TabsTrigger value="content" className="text-xs sm:text-sm" data-testid="tab-content">
              <Settings className="h-3.5 w-3.5 mr-1.5" />
              Edit Site
            </TabsTrigger>
          </TabsList>
          {tab !== "content" && (
            <Button onClick={fetchData} variant="outline" size="sm" disabled={isLoading} data-testid="refresh-data">
              <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          )}
        </div>

        {/* Inquiries */}
        <TabsContent value="inquiries" className="space-y-3 mt-4">
          {isLoading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
          ) : inquiries.length === 0 ? (
            <Card><CardContent className="p-10 text-center"><MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-3" /><p className="text-muted-foreground text-sm">No inquiries yet.</p></CardContent></Card>
          ) : inquiries.map((inq) => (
            <Card key={inq.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-base">{inq.name}</CardTitle>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{inq.email}</span>
                      {inq.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{inq.phone}</span>}
                      {inq.company && <span className="flex items-center gap-1"><Building className="h-3 w-3" />{inq.company}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={inq.status} />
                    <Select value={inq.status} onValueChange={v => updateInquiryStatus(inq.id, v)}>
                      <SelectTrigger className="w-28 text-xs h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1.5">
                {inq.service && <p><span className="font-medium text-foreground">Service:</span> {inq.service}</p>}
                <p><span className="font-medium text-foreground">Message:</span> {inq.message}</p>
                <p className="text-xs">{formatDate(inq.createdAt)}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Quotes */}
        <TabsContent value="quotes" className="space-y-3 mt-4">
          {isLoading ? (
            <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
          ) : quotes.length === 0 ? (
            <Card><CardContent className="p-10 text-center"><FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" /><p className="text-muted-foreground text-sm">No quotes yet.</p></CardContent></Card>
          ) : quotes.map((q) => (
            <Card key={q.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-base">{q.name}</CardTitle>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{q.email}</span>
                      {q.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{q.phone}</span>}
                      {q.company && <span className="flex items-center gap-1"><Building className="h-3 w-3" />{q.company}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={q.status} />
                    <Select value={q.status} onValueChange={v => updateQuoteStatus(q.id, v)}>
                      <SelectTrigger className="w-28 text-xs h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="quoted">Quoted</SelectItem>
                        <SelectItem value="accepted">Accepted</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1.5">
                <p><span className="font-medium text-foreground">Service:</span> {q.service}{q.facility && ` — ${q.facility}`}</p>
                <p><span className="font-medium text-foreground">Requirements:</span> {q.message}</p>
                <p className="text-xs">{formatDate(q.createdAt)}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Live Content Editor */}
        <TabsContent value="content" className="mt-4">
          <div className="flex items-center gap-2 mb-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <Globe className="h-4 w-4 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              Changes save instantly and update the live website for all visitors.
            </p>
          </div>
          <ContentEditor />
        </TabsContent>
      </Tabs>
    </div>
  )
}
