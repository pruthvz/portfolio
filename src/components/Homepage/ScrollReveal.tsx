import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Applied after element becomes visible (stagger) */
  delayMs?: number;
  /**
   * default: general sections
   * timeline: triggers a bit deeper in the viewport so items animate as you scroll past
   */
  preset?: "default" | "timeline";
};

const PRESETS = {
  default: { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
  timeline: { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
} as const;

/**
 * Fades/slides content in once it enters the viewport (complements AOS on hero).
 */
function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  preset = "default",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const { threshold, rootMargin } = PRESETS[preset];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [preset]);

  const motionHidden =
    preset === "timeline"
      ? "translate-y-10 opacity-0 scale-[0.96]"
      : "translate-y-10 opacity-0";

  const motionTiming =
    preset === "timeline"
      ? "duration-[880ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-200"
      : "duration-700 ease-out motion-reduce:duration-200";

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ${motionTiming} ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : motionHidden
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
