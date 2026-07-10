import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { k: "arrival", label: "Jump → Arrival", href: "#arrival" },
  { k: "who", label: "Jump → Who I Am", href: "#who" },
  { k: "mind", label: "Jump → Engineering Mindset", href: "#mind" },
  { k: "builds", label: "Jump → Featured Builds", href: "#builds" },
  { k: "stack", label: "Jump → Tech Playground", href: "#stack" },
  { k: "journey", label: "Jump → Journey", href: "#journey" },
  { k: "contact", label: "Jump → Let's Build Together", href: "#contact" },
  { k: "github", label: "Open GitHub ↗", href: "https://github.com/v-sabari" },
  { k: "email", label: "Copy email ↗", href: "mailto:sabarivenkatesan2962006@gmail.com" },
  { k: "resume", label: "View ResumeForge AI ↗", href: "https://www.resumeforgeai.site/" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-ink/70 px-4 pt-32 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-background/95 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-fog">⌘K</span>
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type to navigate the universe…"
                className="flex-1 bg-transparent font-mono text-sm text-bone outline-none placeholder:text-fog"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.map((it) => (
                <li key={it.k}>
                  <a
                    href={it.href}
                    onClick={() => setOpen(false)}
                    data-cursor="hover"
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-bone/85 transition-colors hover:bg-acid/10 hover:text-acid"
                  >
                    <span>{it.label}</span>
                    <span className="font-mono text-[10px] text-fog">↵</span>
                  </a>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-xs text-fog">no signal.</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
