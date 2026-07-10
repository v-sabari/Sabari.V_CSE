import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  // trail follower (slower)
  const tx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const ty = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  const [mode, setMode] = useState("default");
  const [label, setLabel] = useState("");
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const lastPos = useRef({ x: 0, y: 0, t: performance.now() });
  const velocity = useMotionValue(0);
  const angle = useMotionValue(0);

  useEffect(() => {
    document.documentElement.classList.add("cursor-ready");
    const move = (e) => {
      setVisible(true);
      const now = performance.now();
      const dt = Math.max(1, now - lastPos.current.t);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const v = Math.min(1, Math.hypot(dx, dy) / dt / 2);
      velocity.set(v);
      angle.set((Math.atan2(dy, dx) * 180) / Math.PI);
      lastPos.current = { x: e.clientX, y: e.clientY, t: now };

      // magnetic
      const el = e.target?.closest?.("[data-magnet]");
      if (el) {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        x.set(cx + (e.clientX - cx) * 0.25);
        y.set(cy + (e.clientY - cy) * 0.25);
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
      }

      const cursorEl = e.target?.closest?.("[data-cursor]");
      if (cursorEl) {
        const m = cursorEl.dataset.cursor || "hover";
        setMode(m);
        setLabel(cursorEl.dataset.cursorLabel || "");
      } else {
        setMode("default");
        setLabel("");
      }
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y, velocity, angle]);

  const stretchX = useTransform(velocity, (v) => 1 + v * 0.9);
  const stretchY = useTransform(velocity, (v) => 1 - v * 0.35);

  const size = mode === "default" ? 10 : label ? 88 : 44;

  return (
    <>
      {/* trail dot */}
      <motion.div
        aria-hidden
        style={{
          x: tx,
          y: ty,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-acid/70" />
      </motion.div>

      {/* main cursor */}
      <motion.div
        aria-hidden
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          rotate: angle,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      >
        <motion.div
          animate={{
            width: size,
            height: mode === "default" ? 10 : label ? 88 : 44,
            scale: clicking ? 0.75 : 1,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          style={{ scaleX: stretchX, scaleY: stretchY }}
          className={`flex items-center justify-center rounded-full backdrop-blur-sm ${
            mode === "default"
              ? "bg-bone"
              : label
                ? "bg-acid text-ink"
                : "border border-acid bg-acid/10"
          }`}
        >
          {label && (
            <span
              style={{ transform: `rotate(${-angle.get()}deg)` }}
              className="font-mono text-[10px] font-semibold uppercase tracking-widest"
            >
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* click ripple */}
      {clicking && visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
          className="pointer-events-none fixed left-0 top-0 z-[9997] hidden h-16 w-16 rounded-full border border-acid md:block"
        />
      )}
    </>
  );
}
