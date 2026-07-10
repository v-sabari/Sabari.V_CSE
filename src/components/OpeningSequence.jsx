import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function OpeningSequence() {
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 2400);
    const t4 = setTimeout(() => setDone(true), 3200);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[300] flex flex-col justify-between overflow-hidden bg-ink px-8 py-8 text-bone"
        >
          {/* top row */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            <span>SB / 001</span>
            <span>—— booting portfolio ——</span>
            <span>v0.24</span>
          </div>

          {/* center */}
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.7, 0, 0.2, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-px w-64 bg-acid"
            />

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1], delay: 0.2 }}
                style={{ fontFamily: "var(--font-display)" }}
                className="text-center text-[13vw] leading-[0.9] tracking-tight md:text-[9vw]"
              >
                Sabari<span className="italic text-acid">.</span>
              </motion.h1>
            </div>
            <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
              <motion.span animate={{ opacity: phase >= 1 ? 1 : 0.2 }}>init</motion.span>
              <span className="h-px w-6 bg-line" />
              <motion.span animate={{ opacity: phase >= 2 ? 1 : 0.2 }}>compile</motion.span>
              <span className="h-px w-6 bg-line" />
              <motion.span animate={{ opacity: phase >= 3 ? 1 : 0.2 }}>ready</motion.span>
            </div>
          </div>

          {/* bottom row */}
          <div className="flex items-end justify-between">
            <div className="font-mono text-xs text-fog">
              full stack engineer
              <br />
              <span className="text-bone/70">java · spring · react</span>
            </div>
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-6xl tabular-nums text-bone md:text-8xl"
            >
              {String(Math.min(100, phase * 34)).padStart(3, "0")}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
