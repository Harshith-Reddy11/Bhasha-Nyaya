
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface ProgressiveDisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const ProgressiveDisclosure: React.FC<ProgressiveDisclosureProps> = ({
  title,
  children,
  defaultOpen = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border border-white/10 rounded-2xl overflow-hidden ${className}`}>
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-inset"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`content-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-medium text-left">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`content-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: contentHeight !== undefined ? `${contentHeight}px` : "auto" }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
