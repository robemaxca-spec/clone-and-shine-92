import { useEffect, useState } from "react";
import logo from "@/assets/blessins-logo.png";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="animate-scale-in">
        <img 
          src={logo} 
          alt="Blessins Logo" 
          className="w-48 h-48 object-contain mb-8 animate-fade-in"
        />
      </div>
      <h1 className="text-6xl font-black tracking-widest text-primary animate-fade-in">
        BLESSINS
      </h1>
    </div>
  );
};
