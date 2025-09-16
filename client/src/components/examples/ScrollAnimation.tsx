import ScrollAnimation from '../ScrollAnimation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ScrollAnimationExample() {
  return (
    <div className="p-8 space-y-12 min-h-screen">
      <h2 className="text-2xl font-bold">Scroll Animation Example</h2>
      <p className="text-muted-foreground">Scroll down to see different animation effects</p>
      
      <ScrollAnimation direction="up" delay={0}>
        <Card>
          <CardHeader>
            <CardTitle>Slide Up Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card slides up into view when it enters the viewport.</p>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation direction="left" delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle>Slide Left Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card slides from the right when it enters the viewport.</p>
          </CardContent>
        </Card>
      </ScrollAnimation>

      <ScrollAnimation direction="fade" delay={0.4}>
        <Card>
          <CardHeader>
            <CardTitle>Fade Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card fades in with a scale effect when it enters the viewport.</p>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  )
}