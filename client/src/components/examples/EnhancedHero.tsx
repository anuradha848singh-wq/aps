import { ThemeProvider } from '../ThemeProvider'
import EnhancedHero from '../EnhancedHero'

export default function EnhancedHeroExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <EnhancedHero />
      </div>
    </ThemeProvider>
  )
}