import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface SlideButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SlideButton = React.forwardRef<HTMLButtonElement, SlideButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "group relative overflow-hidden bg-red-500 text-white transition-colors duration-500",
          "hover:bg-red-700",
          "sm:text-base sm:px-6 sm:py-3",
          "text-sm px-4 py-2",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
          <ArrowRight className="ml-2 h-5 w-5" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out" />
      </Button>
    );
  }
);

SlideButton.displayName = "SlideButton";

export { SlideButton };
