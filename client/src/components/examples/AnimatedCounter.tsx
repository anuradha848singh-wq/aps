import AnimatedCounter from '../AnimatedCounter'

export default function AnimatedCounterExample() {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Animated Counter Example</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">
            <AnimatedCounter end={8} suffix="+" />
          </div>
          <div className="text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">
            <AnimatedCounter end={50} suffix="+" />
          </div>
          <div className="text-muted-foreground">Clients Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">
            <AnimatedCounter end={200} suffix="+" />
          </div>
          <div className="text-muted-foreground">Employees Trained</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">
            <AnimatedCounter end={24} suffix="/7" />
          </div>
          <div className="text-muted-foreground">Available</div>
        </div>
      </div>
    </div>
  )
}