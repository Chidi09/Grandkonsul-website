import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }) {
  
  // Configuration for that "Watery" feel
  const lenisOptions = {
    lerp: 0.1,         // The "drag" effect. 0.1 is the sweet spot for smooth vs responsive.
    duration: 1.5,     // How long the scroll slide lasts
    smoothTouch: true, // CRITICAL: This enables it on Mobile!
    touchMultiplier: 2, // Makes mobile scrolling feel 2x faster/smoother
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

