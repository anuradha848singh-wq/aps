import FloatingQuoteButton from '../FloatingQuoteButton'

export default function FloatingQuoteButtonExample() {
  return (
    <div className="p-8 min-h-96 relative">
      <h2 className="text-2xl font-bold mb-4">Floating Quote Button Example</h2>
      <p className="text-muted-foreground mb-8">
        The floating quote button appears at the bottom right corner with a modal form.
      </p>
      <div className="bg-muted/30 p-8 rounded-lg">
        <p className="text-center text-muted-foreground">
          Scroll down or look at the bottom right corner to see the floating quote button.
        </p>
      </div>
      <FloatingQuoteButton />
    </div>
  )
}