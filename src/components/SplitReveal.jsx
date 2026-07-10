import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SplitReveal({ text, className = "", delay = 0, stagger = 0.04, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] pr-[0.28em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%" }}
            animate={inView ? { y: "0%" } : { y: "115%" }}
            transition={{ duration: 0.95, ease: [0.7, 0, 0.2, 1], delay: delay + i * stagger }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
