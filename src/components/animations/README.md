# Neural Network Background Component

A high-performance particle animation component using tsparticles that creates a neural network effect for hero sections.

## Features

- **Deep forest green nodes** (#004d40) with mint green connecting lines (#00a388)
- **Slow ambient movement** (speed: 0.6) for a subtle, professional look
- **Interactive hover effect** - particles connect to cursor within 140px radius
- **Optimized performance** - 100 particles with 60 FPS limit
- **Responsive** - Adapts to screen size with density settings
- **4K-ready** - Includes glow/shadow effects and retina display support

## Usage

```jsx
import { NeuralNetworkBackground } from "@/components/animations/NeuralNetworkBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background container */}
      <div className="absolute inset-0">
        <NeuralNetworkBackground />
      </div>

      {/* Your content with higher z-index */}
      <div className="relative z-10">
        <h1>Your Content Here</h1>
      </div>
    </section>
  );
}
```

## Customization

### Particle Count
Adjust the `number.value` in the component:
- **Low density**: 50-70 particles (better performance)
- **Medium density**: 80-100 particles (balanced)
- **High density**: 120-150 particles (more connections, may impact performance)

### Colors
Modify these values in the component:
```js
particles: {
  color: { value: "#004d40" },  // Node color
  links: {
    color: "#00a388",           // Connection line color
    opacity: 0.2,               // Line transparency
  }
}
```

### Movement Speed
Adjust `move.speed`:
- **0.3-0.5**: Very slow, subtle
- **0.6-0.8**: Moderate (current setting)
- **1.0-1.5**: Faster, more dynamic

### Connection Distance
Modify `links.distance`:
- **100-120**: Fewer connections, cleaner look
- **150**: Current setting, balanced
- **180-200**: More connections, denser network

### Hover Interaction
Adjust `interactivity.modes.grab.distance`:
- **100**: Close proximity needed
- **140**: Current setting
- **200**: Wider interaction area

## Performance Tips

1. **Reduce particle count** on mobile devices
2. **Lower FPS limit** to 30 for better battery life
3. **Disable shadows** if experiencing lag
4. **Use `pointer-events-none`** class to prevent interaction blocking

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (with retina optimization)
- Mobile: Optimized with density settings
