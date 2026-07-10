import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Cursor-reactive display word. Each letter tilts + lifts toward the pointer,
 * with a magnetic falloff. Used once, on the hero name.
 */
export function InteractiveWord({ text, className = "", style, italic = false }) {
  return (
    <span className={className} style={style}>
      {text.split("").map((ch, i) => (
        <Letter key={i} char={ch} italic={italic} />
      ))}
    </span>
  );
}

function Letter({ char, italic }) {
  const ref = useRef(null);
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const sx = useSpring(dx, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(dy, { stiffness: 180, damping: 14, mass: 0.4 });
  const rot = useTransform(sx, [-30, 30], [-8, 8]);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const nx = (e.clientX - cx) / (r.width / 2);
    const ny = (e.clientY - cy) / (r.height / 2);
    // magnetic pull, capped
    dx.set(Math.max(-30, Math.min(30, nx * 22)));
    dy.set(Math.max(-24, Math.min(24, ny * 18)));
  }

  function onLeave() {
    dx.set(0);
    dy.set(0);
  }

  if (char === " ") return <span>&nbsp;</span>;

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        x: sx,
        y: sy,
        rotate: rot,
        display: "inline-block",
        fontStyle: italic ? "italic" : undefined,
        willChange: "transform",
      }}
      className="cursor-none transition-colors duration-300 hover:text-acid"
    >
      {char}
    </motion.span>
  );
}
