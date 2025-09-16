import { ThemeProvider } from '../ThemeProvider'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-4 bg-background text-foreground">
        <h2 className="text-xl font-bold mb-4">Theme Provider Example</h2>
        <p className="mb-4 text-muted-foreground">Toggle between light and dark themes</p>
        <div className="space-y-2">
          <div className="p-3 bg-card border rounded">Card background</div>
          <div className="p-3 bg-muted rounded">Muted background</div>
        </div>
      </div>
    </ThemeProvider>
  )
}