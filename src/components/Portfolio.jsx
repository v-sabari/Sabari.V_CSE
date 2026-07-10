import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitReveal } from "./SplitReveal";
import { InteractiveWord } from "./InteractiveWord";
import { Magnetic } from "./Magnetic";
import { FeaturedBuilds } from "./FeaturedBuilds";
import portrait from "@/assets/sabari-portrait.jpeg";

const CURRENTLY_BUILDING = "Campus Connect";

/* ----- background aurora + cursor light ----- */
function Ambience() {
  const ref = useRef(null);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[70vh] w-[70vh] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, oklch(0.35 0.15 260 / 0.7), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute top-1/3 -right-40 h-[60vh] w-[60vh] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.2 130 / 0.5), transparent 60%)",
          filter: "blur(90px)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/3 h-[55vh] w-[55vh] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.2 40 / 0.4), transparent 60%)",
          filter: "blur(90px)",
        }}
      />

      <div className="grain" />
    </div>
  );
}

/* ----- top rail ----- */
function TopRail() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#arrival"
          data-cursor="hover"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-bone"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-acid" />
          sabari<span className="text-fog">.dev</span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-fog md:flex">
          <a href="#who" data-cursor="hover" className="hover:text-bone">
            who
          </a>
          <a href="#mind" data-cursor="hover" className="hover:text-bone">
            mindset
          </a>
          <a href="#builds" data-cursor="hover" className="hover:text-bone">
            builds
          </a>
          <a href="#stack" data-cursor="hover" className="hover:text-bone">
            stack
          </a>
          <a href="#journey" data-cursor="hover" className="hover:text-bone">
            journey
          </a>
        </nav>
        <a
          href="#contact"
          data-cursor="hover"
          className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-fog hover:text-bone md:block"
        >
          contact
        </a>
      </div>
      <motion.div style={{ scaleX: w, transformOrigin: "left" }} className="h-px w-full bg-acid" />
    </header>
  );
}

/* ----- floating dock ----- */
function FloatingDock() {
  const items = [
    { l: "01", h: "#arrival" },
    { l: "02", h: "#who" },
    { l: "03", h: "#mind" },
    { l: "04", h: "#builds" },
    { l: "05", h: "#stack" },
    { l: "06", h: "#journey" },
    { l: "07", h: "#contact" },
  ];

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <ul className="flex flex-col items-end gap-3">
        {items.map((it) => (
          <li key={it.l}>
            <a
              href={it.h}
              data-cursor="hover"
              className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-fog"
            >
              <span className="opacity-0 transition-opacity group-hover:opacity-100">{it.l}</span>
              <span className="block h-px w-4 bg-fog transition-all group-hover:w-8 group-hover:bg-acid" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----- ticker ----- */
function Ticker({ items }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink/40 py-5">
      <div className="ticker-track font-display text-4xl italic md:text-6xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-bone/85">
            <span style={{ fontFamily: "var(--font-display)" }}>{t}</span>
            <span className="inline-block h-2 w-2 rotate-45 bg-acid" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----- arrival hero ----- */
function Arrival() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      id="arrival"
      ref={ref}
      className="relative flex min-h-[110vh] flex-col justify-between px-6 pt-32 pb-10 md:px-10"
    >
      {/* meta grid */}
      <div className="grid grid-cols-12 items-end gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
        <div className="col-span-6 md:col-span-3">
          <div className="text-bone">chapter 01</div>
          <div>arrival</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-bone">index</div>
          <div>SB — 2006 · IN</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-bone">status</div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
            currently building — {CURRENTLY_BUILDING}
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-bone">discipline</div>
          <div>full-stack · java · react</div>
        </div>
      </div>

      {/* mega type */}
      <motion.div style={{ y, scale, opacity }} className="relative py-16 md:py-20">
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="leading-[0.85] tracking-[-0.04em] text-bone text-[clamp(3.5rem,17vw,15rem)]"
        >
          <span className="block">
            <InteractiveWord text="Sabari" />
          </span>
          <span className="block pl-[6vw] italic text-bone/70 md:pl-[10vw]">
            <SplitReveal text="Venkatesan." delay={0.5} />
          </span>
        </h1>

        <div className="mt-8 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-bone/80 md:text-xl">
              <SplitReveal
                text="I build calm interfaces on top of stubborn systems — a full-stack engineer wiring Java + Spring Boot backends to React frontends people actually enjoy."
                delay={1.1}
                stagger={0.02}
              />
            </p>
          </div>
        </div>
      </motion.div>

      {/* bottom row */}
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#builds"
              data-cursor="explore"
              data-cursor-label="Explore"
              className="group inline-flex items-center gap-4 rounded-full bg-bone px-7 py-4 font-mono text-xs uppercase tracking-[0.25em] text-ink"
            >
              <span className="h-2 w-2 rounded-full bg-acid" />
              See what I've been building
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-bone hover:border-acid hover:text-acid"
            >
              Say hi
            </a>
          </Magnetic>
        </div>
        {/* <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
          scroll — hold — ⌘K anywhere
        </div> */}
      </div>
    </section>
  );
}

/* ----- who i am ----- */
function WhoIAm() {
  return (
    <section id="who" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="sticky top-32 space-y-6 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-muted/30">
              <img
                src={portrait}
                alt="Portrait of Sabari Venkatesan"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-[9px] text-bone/80">
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-acid" />
                  irl · 2026
                </span>
                <span>sb — 001</span>
              </div>
            </div>
            <div>
              02 — who i am
              <div className="mt-6 h-px w-12 bg-acid" />
              <div className="mt-4 text-bone/70">
                a note
                <br />
                before we begin
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl leading-[1.15] tracking-tight text-bone md:text-6xl"
          >
            <SplitReveal
              text={
                "I’m a B.E. Computer Science student in Erode, quietly obsessed with the boring, powerful parts of software — clean APIs, honest error states, and interfaces that don’t make people apologize."
              }
              stagger={0.015}
            />
          </p>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-8 font-mono text-xs uppercase tracking-widest text-fog md:grid-cols-4">
            <div>
              <div className="text-bone">home</div>
              Erode · Tamil Nadu
            </div>
            <div>
              <div className="text-bone">degree</div>
              B.E. CSE · 2023→
            </div>
            <div>
              <div className="text-bone">discipline</div>
              Full-stack
            </div>
            <div>
              <div className="text-bone">weapon</div>
              Java + React
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- mindset ----- */
function Mindset() {
  const items = [
    {
      n: "i.",
      t: "Ship the boring version first.",
      d: "A working ugly thing beats a beautiful idea in a Notion doc.",
    },
    {
      n: "ii.",
      t: "Read errors like poetry.",
      d: "Stack traces are the fastest way to learn a codebase you didn’t write.",
    },
    {
      n: "iii.",
      t: "APIs are contracts, not vibes.",
      d: "Typed, validated, versioned. Kindness to the person calling you at 2am — even if it’s future me.",
    },
    {
      n: "iv.",
      t: "The frontend is empathy.",
      d: "Loading states, empty states, sad states. If it doesn’t exist, you’re shipping arrogance.",
    },
  ];

  const ref = useRef(null);
  return (
    <section id="mind" ref={ref} className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            03 — engineering mindset
          </span>
          <span className="font-mono text-xs text-fog">four rules · swipe →</span>
        </div>
      </div>
      <div className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-4 md:gap-10 md:px-10">
        {items.map((it) => (
          <article
            key={it.n}
            data-cursor="hover"
            className="group relative flex min-h-[380px] w-[min(85vw,520px)] shrink-0 snap-start flex-col justify-between rounded-3xl border border-line bg-muted/30 p-8 backdrop-blur transition-all hover:border-acid hover:bg-muted/60 md:p-10"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
              rule {it.n}
            </span>
            <div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-3xl leading-tight text-bone md:text-5xl"
              >
                {it.t}
              </h3>
              <p className="mt-6 max-w-md text-sm text-bone/70 md:text-base">{it.d}</p>
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fog">
              <span>principle · sabari</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ----- tech playground ----- */
function TechPlayground() {
  const groups = [
    { k: "Language", v: ["Java", "JavaScript"] },
    { k: "Backend", v: ["Spring Boot", "REST APIs", "JWT"] },
    { k: "Frontend", v: ["React", "HTML", "CSS"] },
    { k: "Data", v: ["MySQL", "PostgreSQL"] },
    { k: "Tools", v: ["Git", "GitHub", "VS Code", "Postman"] },
    { k: "Practice", v: ["Code Reviews", "Agile", "SDLC"] },
  ];

  return (
    <section id="stack" className="relative border-y border-line bg-ink/30 py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            05 — tech playground
          </span>
          <span className="font-mono text-xs text-fog">the tools I hold</span>
        </div>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-16 max-w-5xl text-5xl leading-[1] tracking-tight text-bone md:text-8xl"
        >
          <SplitReveal text="Small stack. High expectations." />
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.k}
              data-cursor="hover"
              className="group flex flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-muted/40"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">{g.k}</div>
              <div className="flex flex-wrap gap-2">
                {g.v.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-bone/85 transition-colors group-hover:border-acid/40"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- journey ----- */
function Journey() {
  const rows = [
    {
      y: "2023",
      t: "Enrolled B.E. CSE",
      p: "Erode Sengunthar Engineering College",
      tag: "beginning",
    },
    {
      y: "2024",
      t: "Front-End Development Intern",
      p: "Techvolt Software Pvt. Ltd — Coimbatore",
      tag: "first shipped",
    },
    {
      y: "2025",
      t: "Built Halleyx Workflow Engine",
      p: "Java · Spring Boot · React · MySQL",
      tag: "system thinking",
    },
    {
      y: "2026",
      t: "Full-Stack Development Intern",
      p: "Navodita Infotech — remote",
      tag: "in the trenches",
    },
    {
      y: "2026",
      t: "Shipped ResumeForge AI",
      p: "Production. Live. Real users.",
      tag: "public artifact",
    },
  ];

  return (
    <section id="journey" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            06 — journey
          </span>
          <span className="font-mono text-xs text-fog">a shorter list than it looks</span>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {rows.map((r, i) => (
            <li key={i}>
              <div
                data-cursor="hover"
                className="group grid grid-cols-12 items-center gap-4 py-8 transition-colors hover:bg-muted/30"
              >
                <span className="col-span-2 font-mono text-sm text-fog md:text-base">{r.y}</span>
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="col-span-10 text-2xl text-bone transition-transform group-hover:translate-x-3 md:col-span-6 md:text-4xl"
                >
                  {r.t}
                </span>
                <span className="col-span-8 hidden font-mono text-xs uppercase tracking-widest text-fog md:col-span-3 md:block">
                  {r.p}
                </span>
                <span className="col-span-4 text-right font-mono text-[10px] uppercase tracking-widest text-acid md:col-span-1">
                  {r.tag}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----- contact ----- */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          07 — let’s build together
        </span>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mt-6 text-[15vw] leading-[0.9] tracking-[-0.03em] text-bone md:text-[10vw]"
        >
          <span className="block">
            <SplitReveal text="If you’re building" />
          </span>
          <span className="block italic text-acid">
            <SplitReveal text="something honest —" delay={0.15} />
          </span>
          <span className="block text-bone/60">
            <SplitReveal text="I want to hear about it." delay={0.3} />
          </span>
        </h2>
        <div className="mt-16 space-y-6">
          <Magnetic strength={0.2}>
            <a
              href="mailto:sabarivenkatesan2962006@gmail.com"
              data-cursor="open"
              data-cursor-label="Write"
              className="group flex w-full flex-col gap-6 rounded-3xl border border-line bg-muted/40 p-8 transition-colors hover:border-acid md:flex-row md:items-center md:justify-between md:p-12"
            >
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-acid">
                  ✱ start here — email
                </div>
                <div
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mt-4 break-all text-3xl leading-tight text-bone md:text-5xl"
                >
                  sabarivenkatesan2962006@gmail.com
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-fog">
                  fastest way to reach me · replies within a day
                </div>
              </div>
              <span className="shrink-0 text-4xl text-acid transition-transform group-hover:-rotate-45 md:text-5xl">
                ↗
              </span>
            </a>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href="/sabari-venkatesan-resume.pdf"
              download="Sabari-Venkatesan-Resume.pdf"
              data-cursor="open"
              data-cursor-label="Download"
              className="group flex w-full items-center justify-between gap-6 rounded-3xl border border-line bg-muted/20 p-6 transition-colors hover:border-acid hover:bg-muted/40 md:p-8"
            >
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                  ✱ secondary — one-click download
                </div>
                <div
                  style={{ fontFamily: "var(--font-display)" }}
                  className="mt-3 text-2xl leading-tight text-bone md:text-4xl"
                >
                  Download résumé <span className="text-fog">— PDF</span>
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-fog">
                  1 page · updated 2026 · ~20 KB
                </div>
              </div>
              <span className="shrink-0 text-3xl text-acid transition-transform group-hover:translate-y-1 md:text-4xl">
                ↓
              </span>
            </a>
          </Magnetic>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            <a
              href="tel:+916379766032"
              data-cursor="hover"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-muted/20 px-5 py-4 transition-colors hover:border-acid md:col-span-2"
            >
              <div className="min-w-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-fog">
                  signal
                </div>
                <div className="mt-1 font-mono text-sm text-bone">+91 63797 66032</div>
              </div>
              <span className="text-acid transition-transform group-hover:-rotate-45">↗</span>
            </a>
            {[
              { l: "GitHub", h: "https://github.com/v-sabari", k: "v-sabari" },
              { l: "LinkedIn", h: "https://linkedin.com/in/v-sabari", k: "v-sabari" },
              { l: "LeetCode", h: "https://leetcode.com/u/v-sabari/", k: "v-sabari" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                data-cursor-label="View"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-muted/10 px-5 py-4 transition-colors hover:border-acid hover:bg-muted/40"
              >
                <div className="min-w-0">
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-fog">
                    {s.l}
                  </div>
                  <div className="mt-1 font-mono text-sm text-bone group-hover:text-acid">
                    {s.k}
                  </div>
                </div>
                <span className="text-fog transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </div>
        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-fog md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Sabari Venkatesan</div>
          <div className="flex items-center gap-4"></div>
        </footer>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <main className="relative z-10">
      <Ambience />
      <TopRail />
      <FloatingDock />
      <Arrival />
      <Ticker items={["Java", "Spring Boot", "React", "Postgres", "MySQL", "REST API", "JWT"]} />
      <WhoIAm />
      <Mindset />
      <FeaturedBuilds />
      <TechPlayground />
      <Journey />
      <Contact />
    </main>
  );
}
