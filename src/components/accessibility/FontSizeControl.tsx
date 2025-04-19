
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FONT_SIZES = {
  small: {
    label: "A",
    scale: 0.9,
  },
  medium: {
    label: "A",
    scale: 1,
  },
  large: {
    label: "A",
    scale: 1.1,
  },
  xlarge: {
    label: "A",
    scale: 1.2,
  },
};

type FontSizeOption = keyof typeof FONT_SIZES;

export default function FontSizeControl() {
  const [currentSize, setCurrentSize] = useState<FontSizeOption>("medium");

  useEffect(() => {
    // Check if there's a saved preference
    const savedSize = localStorage.getItem("preferredFontSize");
    if (savedSize && Object.keys(FONT_SIZES).includes(savedSize)) {
      setCurrentSize(savedSize as FontSizeOption);
      applyFontSize(savedSize as FontSizeOption);
    }
  }, []);

  const applyFontSize = (size: FontSizeOption) => {
    const scale = FONT_SIZES[size].scale;
    document.documentElement.style.fontSize = `${scale * 100}%`;
    localStorage.setItem("preferredFontSize", size);
  };

  const handleSizeChange = (size: FontSizeOption) => {
    setCurrentSize(size);
    applyFontSize(size);
  };

  return (
    <div className="flex items-center space-x-1 bg-white/5 rounded-lg p-1" role="group" aria-label="Font size controls">
      {(Object.keys(FONT_SIZES) as FontSizeOption[]).map((size, index) => {
        const fontSize = index === 0 ? "text-xs" : 
                        index === 1 ? "text-sm" : 
                        index === 2 ? "text-base" : 
                        "text-lg";
        
        return (
          <Button
            key={size}
            variant={currentSize === size ? "secondary" : "ghost"}
            size="sm"
            className={`${fontSize} ${
              currentSize === size 
                ? "bg-white/20 text-white" 
                : "text-white/70 hover:text-white hover:bg-white/10"
            } min-w-8 h-8`}
            onClick={() => handleSizeChange(size)}
            aria-label={`Set font size to ${size}`}
            aria-pressed={currentSize === size}
          >
            {FONT_SIZES[size].label}
          </Button>
        );
      })}
    </div>
  );
}
