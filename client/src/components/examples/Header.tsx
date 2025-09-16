import { ThemeProvider } from '../ThemeProvider'
import Header from '../Header'

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-96">
        <Header />
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold">Header Component</h2>
          <p className="text-muted-foreground mt-2">
            Sticky navigation with dark mode toggle and responsive mobile menu
          </p>
        </div>
      </div>
    </ThemeProvider>
  )
}