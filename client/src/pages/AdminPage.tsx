import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { LogOut, RefreshCw } from "lucide-react"
import AdminLogin from "@/components/AdminLogin"
import AdminDashboard from "@/components/AdminDashboard"

interface User {
  id: string;
  username: string;
}

export default function AdminPage() {
  const { toast } = useToast()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check authentication status on page load
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/me')
      const result = await response.json()
      
      if (response.ok && result.success) {
        setUser(result.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Auth check error:', error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setUser(null)
        toast({
          title: "Logged Out",
          description: "You have been successfully logged out.",
        })
      } else {
        throw new Error(result.message || 'Logout failed')
      }
    } catch (error) {
      console.error('Logout error:', error)
      toast({
        title: "Logout Error",
        description: "Error occurred during logout. Please try again.",
        variant: "destructive"
      })
    }
  }

  const handleLoginSuccess = (userData: User) => {
    setUser(userData)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center gap-3">
          <RefreshCw className="h-6 w-6 animate-spin text-primary" />
          <span className="text-lg font-medium">Checking authentication...</span>
        </div>
      </div>
    )
  }

  // Not authenticated - show login form
  if (!user) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />
  }

  // Authenticated - show admin dashboard
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">APS Admin Portal</h1>
            <div className="text-sm text-muted-foreground">
              Welcome back, {user.username}
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
            data-testid="admin-logout-button"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      <main>
        <AdminDashboard />
      </main>
    </div>
  )
}