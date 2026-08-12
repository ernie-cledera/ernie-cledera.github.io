import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  fade?: boolean;
}

export default function Reveal({ children, delay = 0, className = "", fade = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If the element is already visible in the viewport, show it immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : `${fade ? "translate-y-0" : "translate-y-6"} opacity-0`} ${className}`}
    >
      {children}
    </div>
  );
}
