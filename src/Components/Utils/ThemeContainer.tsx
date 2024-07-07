import React, { useState, useEffect } from "react";

// Define types for the props
interface ThemeContainerProps {
  lightTheme: string;
  darkTheme: string;
  genClasses?: string;
  children: React.ReactNode;
  observerOptions?: IntersectionObserverInit;
  elementRef: React.RefObject<HTMLElement>; // Required user-defined element reference
}

// Helper hook to use Intersection Observer API
const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([exit]) => {
        setIntersecting(exit.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

// The ThemeContainer component
const ThemeContainer: React.FC<ThemeContainerProps> = ({
  lightTheme,
  darkTheme,
  children,
  genClasses,
  observerOptions,
  elementRef,
}) => {
  const [theme, setTheme] = useState<string>(lightTheme);
  const isOnScreen = useOnScreen(elementRef, observerOptions);

  useEffect(() => {
    // Listen for scroll events to detect when the user hits the reference element
    const handleScroll = () => {
      if (isOnScreen) {
        const boundingRect = elementRef.current?.getBoundingClientRect();
        if (boundingRect) {
          // Check if the user is scrolling down to the element
          if (boundingRect.top <= window.innerHeight / 2) {
            setTheme(darkTheme); // Change to dark theme when user hits the reference element
          } else {
            setTheme(lightTheme); // Revert to light theme when scrolling back up to the reference element
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOnScreen, lightTheme, darkTheme, elementRef]);

  return <div className={`${theme} ${genClasses}`}>{children}</div>;
};

export default ThemeContainer;
