import { ReactNode, useEffect, useState } from "react";

interface AnimatedPopupProps {
  animationType: string;
  children: ReactNode;
  className?: string; // Optional: allow passing additional classes
}

export default function AnimatedPopup({
  animationType,
  children,
  className = "",
}: AnimatedPopupProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Adding a slight delay can sometimes make animations feel smoother on load
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 100); // 100ms delay
    return () => clearTimeout(timer);
  }, []);

  const animationClass = {
    popup: "animate-popup",
    tracking: "animate-tracking-in-expand-fwd-bottom",
    focus: "animate-text-focus-in",
  }[animationType] || "";

  return (
    <div className={`${showAnimation ? animationClass : "opacity-0"} ${className}`}> {/* Start with opacity-0 */}
      {children}
    </div>
  );
}