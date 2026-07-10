import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!now) return <span className="font-mono text-xs text-fog">— : — : —</span>;
  const t = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
    hour12: false,
  }).format(now);
  return (
    <span className="font-mono text-xs text-fog">
      <span className="inline-block h-1.5 w-1.5 -translate-y-[1px] rounded-full bg-acid mr-2 align-middle animate-pulse" />
      ERODE / IST {t}
    </span>
  );
}
