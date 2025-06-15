"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  animationClass: string;
  className?: string;
  threshold?: number; // Determines how much of the element needs to be visible to trigger
  delay?: string;     // e.g., '100ms', '0.2s'
  style?: CSSProperties;
}

const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  animationClass,
  className = "",
  threshold = 0.1, // Default: triggers when 10% of the element is visible
  delay,
  style
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
  // The dependency array should only include 'threshold' now,
  // as it's the only prop from outside the effect that it depends on.
  }, [threshold]); // CORRECTED: Only 'threshold' is needed here.

  const combinedStyle: CSSProperties = {
    ...style,
    animationDelay: isVisible ? delay : undefined,
  };

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;