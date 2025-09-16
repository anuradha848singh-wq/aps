import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { 
  MessageSquare, 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  Mail,
  Phone,
  Building
} from "lucide-react"

interface ContactInquiry {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  service: string | null
  message: string
  createdAt: Date
  status: string
}

interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  service: string
  facility: string | null
  message: string
  createdAt: Date
  status: string
}

export default function AdminDashboard() {
  const { toast } = useToast()
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState("inquiries")

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const [inquiriesRes, quotesRes] = await Promise.all([
        fetch('/api/admin/inquiries'),
        fetch('/api/admin/quotes')
      ])
      
      const inquiriesData = await inquiriesRes.json()
      const quotesData = await quotesRes.json()
      
      if (inquiriesData.success) {
        setInquiries(inquiriesData.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt)
        })))
      }
      
      if (quotesData.success) {
        setQuotes(quotesData.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt)
        })))
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: "Error Loading Data",
        description: "Failed to load admin data. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const updateInquiryStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/inquiries/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setInquiries(prev => prev.map(inquiry => 
          inquiry.id === id ? { ...inquiry, status } : inquiry
        ))
        toast({
          title: "Status Updated",
          description: "Inquiry status has been updated successfully.",
        })
      } else {
        throw new Error(result.message || 'Failed to update status')
      }
    } catch (error) {
      console.error('Error updating inquiry status:', error)
      toast({
        title: "Error Updating Status",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      })
    }
  }

  const updateQuoteStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/quotes/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setQuotes(prev => prev.map(quote => 
          quote.id === id ? { ...quote, status } : quote
        ))
        toast({
          title: "Status Updated",
          description: "Quote status has been updated successfully.",
        })
      } else {
        throw new Error(result.message || 'Failed to update status')
      }
    } catch (error) {
      console.error('Error updating quote status:', error)
      toast({
        title: "Error Updating Status",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      })
    }
  }

  const getStatusBadge = (status: string, type: "inquiry" | "quote") => {
    const colors = {
      new: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      contacted: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      resolved: "bg-green-500/10 text-green-600 border-green-500/20",
      pending: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      quoted: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      accepted: "bg-green-500/10 text-green-600 border-green-500/20",
      rejected: "bg-red-500/10 text-red-600 border-red-500/20"
    }
    
    return (
      <Badge variant="outline" className={colors[status as keyof typeof colors] || "bg-gray-500/10 text-gray-600"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const stats = {
    totalInquiries: inquiries.length,
    newInquiries: inquiries.filter(i => i.status === 'new').length,
    totalQuotes: quotes.length,
    pendingQuotes: quotes.filter(q => q.status === 'pending').length
  }

  if (isLoading) {
    return (
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <RefreshCw className="h-6 w-6 animate-spin" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-muted rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={fetchData} variant="outline" data-testid="refresh-data">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Inquiries</p>
                <p className="text-2xl font-bold">{stats.totalInquiries}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Inquiries</p>
                <p className="text-2xl font-bold text-blue-600">{stats.newInquiries}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Quotes</p>
                <p className="text-2xl font-bold">{stats.totalQuotes}</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Quotes</p>
                <p className="text-2xl font-bold text-orange-600">{stats.pendingQuotes}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inquiries" data-testid="tab-inquiries">
            Contact Inquiries ({stats.totalInquiries})
          </TabsTrigger>
          <TabsTrigger value="quotes" data-testid="tab-quotes">
            Quote Requests ({stats.totalQuotes})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="inquiries" className="space-y-4">
          <div className="grid gap-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id} className="hover-elevate">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{inquiry.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {inquiry.email}
                        </div>
                        {inquiry.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {inquiry.phone}
                          </div>
                        )}
                        {inquiry.company && (
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {inquiry.company}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(inquiry.status, "inquiry")}
                      <Select
                        value={inquiry.status}
                        onValueChange={(value) => updateInquiryStatus(inquiry.id, value)}
                      >
                        <SelectTrigger className="w-32">
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
                <CardContent>
                  <div className="space-y-3">
                    {inquiry.service && (
                      <div>
                        <span className="text-sm font-medium">Service: </span>
                        <span className="text-sm text-muted-foreground">{inquiry.service}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-sm font-medium">Message: </span>
                      <p className="text-sm text-muted-foreground mt-1">{inquiry.message}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Received: {formatDate(inquiry.createdAt)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {inquiries.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No contact inquiries yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="quotes" className="space-y-4">
          <div className="grid gap-4">
            {quotes.map((quote) => (
              <Card key={quote.id} className="hover-elevate">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{quote.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {quote.email}
                        </div>
                        {quote.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {quote.phone}
                          </div>
                        )}
                        {quote.company && (
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {quote.company}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(quote.status, "quote")}
                      <Select
                        value={quote.status}
                        onValueChange={(value) => updateQuoteStatus(quote.id, value)}
                      >
                        <SelectTrigger className="w-32">
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
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-medium">Service: </span>
                        <span className="text-sm text-muted-foreground">{quote.service}</span>
                      </div>
                      {quote.facility && (
                        <div>
                          <span className="text-sm font-medium">Facility: </span>
                          <span className="text-sm text-muted-foreground">{quote.facility}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-medium">Requirements: </span>
                      <p className="text-sm text-muted-foreground mt-1">{quote.message}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Received: {formatDate(quote.createdAt)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {quotes.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No quote requests yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}