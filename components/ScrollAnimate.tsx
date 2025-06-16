"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  animationInClass: string;  // Class for enter animation
  animationOutClass?: string; // Optional: Class for exit animation (e.g., 'opacity-0')
  className?: string;
  threshold?: number;
  delay?: string;             // CSS animation-delay
  triggerOnce?: boolean;      // If true, animates only once
  style?: CSSProperties;
}

const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  animationInClass,
  animationOutClass = "opacity-0", // Default out animation is to become transparent
  className = "",
  threshold = 0.2, // Default: triggers when 20% of the element is visible
  delay,
  triggerOnce = false, // Default: allow re-animation
  style
}) => {
  const [currentAnimation, setCurrentAnimation] = useState<string>('opacity-0'); // Start hidden
  const [hasBeenVisibleOnce, setHasBeenVisibleOnce] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    // Set initial style to hidden for elements that will animate in
    // currentRef.style.opacity = '0'; // Already handled by initial currentAnimation state

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (triggerOnce && hasBeenVisibleOnce) return; // Don't re-animate if triggerOnce and already animated

            // Clear previous inline styles that might conflict if re-animating
            currentRef.style.opacity = ''; 
            currentRef.style.transform = ''; 

            setCurrentAnimation(animationInClass);
            if (!hasBeenVisibleOnce) setHasBeenVisibleOnce(true);

            if (triggerOnce) {
              observer.unobserve(currentRef);
            }
          } else {
            if (!triggerOnce && hasBeenVisibleOnce) { // Only apply out animation if not triggerOnce and has been visible
              currentRef.style.opacity = ''; 
              currentRef.style.transform = '';
              setCurrentAnimation(animationOutClass);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // Key dependencies for re-running the effect or observer
  }, [threshold, triggerOnce, animationInClass, animationOutClass, hasBeenVisibleOnce]); 

  const combinedStyle: CSSProperties = {
    ...style,
    animationDelay: currentAnimation === animationInClass ? delay : undefined, // Apply delay only for in-animation
  };

  return (
    <div
      ref={domRef}
      className={`${className} ${currentAnimation}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;