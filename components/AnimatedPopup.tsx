"use client";
import { ReactNode, useEffect, useState, useRef } from "react";

// Define the possible animation types more strictly for better type safety
type AnimationType = "popup" | "tracking" | "focus"; // Add other specific types if needed

interface AnimatedPopupProps {
  animationType: AnimationType;
  children: ReactNode;
  className?: string;
  delay?: string;          // Optional: e.g., '100ms', '0.2s' - for CSS animation-delay
  triggerOnce?: boolean;   // Optional: If true, animates only once on first visibility
  threshold?: number;      // Optional: IntersectionObserver threshold
}

export default function AnimatedPopup({
  animationType,
  children,
  className = "",
  delay,
  triggerOnce = true, // Default to true for hero elements that load once
  threshold = 0.1,    // Default threshold
}: AnimatedPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // For hero elements that are immediately visible, we don't need an observer
    // unless they are explicitly set to triggerOnce=false and might re-animate.
    // However, to keep it consistent and allow for future flexibility,
    // we can use the observer, especially if `triggerOnce` can be false.

    // If it's meant to play immediately and only once (typical for hero),
    // we can bypass the observer for initial load.
    if (triggerOnce && typeof window !== 'undefined' && domRef.current && domRef.current.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
      return; // No observer needed if already visible and triggerOnce
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else {
            // Only reset if not triggerOnce AND it has been visible
            // For AnimatedPopup, typically used for load-in, resetting might not be desired.
            // If you need re-animation for these, ensure triggerOnce is false.
            if (!triggerOnce) {
              setIsVisible(false); 
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  const animationClasses = {
    popup: "animate-popup",
    tracking: "animate-tracking",
    focus: "animate-focus",
  };

  const currentAnimationClass = animationClasses[animationType] || "";
  const style = delay ? { animationDelay: delay } : {};

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? currentAnimationClass : "opacity-0"}`}
      style={style}
    >
      {children}
    </div>
  );
}