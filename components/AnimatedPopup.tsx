import { ReactNode, useEffect, useState } from "react";

interface AnimatedPopupProps {
  animationType: string;
  children: ReactNode;
}

export default function AnimatedPopup({
  animationType,
  children,
}: AnimatedPopupProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const animationClass = {
    popup: "animate-popup",
    tracking: "animate-tracking-in-expand-fwd-bottom",
    focus: "animate-text-focus-in",
  }[animationType] || "";

  return (
    <div className={`${showAnimation ? animationClass : ""}`}>
      {children}
    </div>
  );
}
