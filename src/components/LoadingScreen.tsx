import { useEffect, useState } from "react";
import logo from "@/assets/blessins-logo.png";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content with delay for animation
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    // Hide and complete
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`transition-all duration-700 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        <img 
          src={logo} 
          alt="Blessins Logo" 
          className="w-48 h-48 object-contain mb-8"
        />
      </div>
      <h1 className={`text-6xl font-black tracking-widest text-primary transition-all duration-700 delay-300 ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        BLESSINS
      </h1>
    </div>
  );
};
