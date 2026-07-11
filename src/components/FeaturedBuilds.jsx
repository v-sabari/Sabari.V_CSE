import { motion } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "./Magnetic";
import resumeforgeHero from "@/assets/resumeforge-hero.png";
import halleyxHero from "@/assets/halleyx-hero.png";
import userAppHero from "@/assets/user-app-hero.png";
import campusConnectHero from "@/assets/campusconnect.png";
import resumeforgeDashboard from "@/assets/resumeforge-dashboard.png";
import userAppDashboard from "@/assets/user-app-dashboard.png";
import campusConnectDashboard from "@/assets/campusconnect-dashboard.png";

export const projects = [
  {
    index: "01",
    title: "ResumeForge AI",
    role: "Full-stack architect",
    year: "2026",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    href: "https://www.resumeforgeai.site/",
    summary:
      "A production-grade, ATS-aware resume builder. Secure REST APIs, JWT auth, PDF/DOCX export — deployed and monitored end-to-end.",
    problem:
      "Generic resume tools produce PDFs that ATS parsers silently reject — candidates never learn why.",
    approach:
      "Structured JSON schema per resume, deterministic PDF/DOCX rendering, JWT-guarded APIs, and a builder UI that mirrors the exported document.",
    outcome:
      "Live in production with real users creating, exporting, and tracking resumes from a personal dashboard.",
    metrics: [
      { k: "auth", v: "JWT" },
      { k: "exports", v: "PDF · DOCX" },
      { k: "uptime", v: "prod" },
    ],

    accent: "oklch(0.92 0.22 125)",
    image: resumeforgeHero,
    secondaryImage: resumeforgeDashboard,
    secondaryLabel: "user dashboard",
    domain: "www.resumeforgeai.site",
  },
  {
    index: "02",
    title: "Halleyx Workflow Engine",
    role: "Full-stack developer",
    year: "2025",
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    href: "https://halleyx-workflow-engine-5r1i.vercel.app/",
    repo: "https://github.com/v-sabari/halleyx-workflow-engine",
    summary:
      "A reusable component system for orchestrating internal workflows. Focus on responsive interfaces, cross-device polish, and clean state.",
    problem:
      "Internal ops teams rebuilt the same forms, tables and step-flows for every new process.",
    approach:
      "Composable React components backed by a typed Spring Boot API, one MySQL schema, and shared state primitives across every workflow.",
    outcome:
      "One engine now powers multiple internal flows, cutting new-workflow setup from days to hours.",
    metrics: [
      { k: "modules", v: "reusable" },
      { k: "surface", v: "responsive" },
      { k: "vcs", v: "GitHub" },
    ],

    accent: "oklch(0.72 0.18 45)",
    image: halleyxHero,
    domain: "halleyx-workflow-engine.vercel.app",
  },
  {
    index: "03",
    title: "User Management System",
    role: "Full-stack developer",
    year: "2025",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Spring Security", "JWT"],
    href: "https://user-app-delta-pearl.vercel.app/",
    repo: "https://github.com/v-sabari/user-app",
    summary:
      "Secure user platform with audit logging, login history, and a security dashboard surfacing alerts and risk metrics. Email notifications, password recovery, session management, and centralized exception handling — end to end.",
    problem:
      "Most auth starters ship login and stop — no audit trail, no visibility, no honest security signals for the user.",
    approach:
      "Spring Security + JWT sessions, per-event audit logging, a security dashboard with a live score, suspicious-login alerts, and centralized exception handling.",
    outcome:
      "Users see their own login history, get alerted on new-IP logins, and can recover access without a support ticket.",
    metrics: [
      { k: "auth", v: "JWT · Spring Security" },
      { k: "audit", v: "login history" },
      { k: "recovery", v: "email · reset" },
    ],

    accent: "oklch(0.78 0.15 235)",
    image: userAppHero,
    secondaryImage: userAppDashboard,
    secondaryLabel: "security dashboard",
    domain: "user-app-delta-pearl.vercel.app",
  },
  {
    index: "04",
    title: "Campus Connect",
    role: "Full-stack developer",
    year: "2026",
    stack: ["Java", "Spring Boot", "React", "React Router", "JWT", "RBAC"],
    href: "https://event-two-ivory.vercel.app/",
    repo: "https://github.com/v-sabari/event",
    summary:
      "A role-based event management platform for colleges — students discover and register for events, organizers run them, and faculty/admins oversee venues, departments, and reporting.",
    problem:
      "Campus events run on scattered forms and spreadsheets — no single system that gives students, organizers, and faculty the right view of the same event.",
    approach:
      "Five role-scoped dashboards (Student, Organizer, Faculty/HOD, Super Admin) behind route guards that mirror the Spring Boot API's own @PreAuthorize checks, with JWT auth, silent token refresh, and QR-based registration passes.",
    outcome:
      "Live with seeded demo accounts for every role — students register and get a QR pass in seconds, organizers track rosters, and admins get venue, department, and reporting tools.",
    metrics: [
      { k: "roles", v: "5 tiers" },
      { k: "auth", v: "JWT · refresh" },
      { k: "passes", v: "QR-based" },
    ],

    accent: "oklch(0.75 0.18 300)",
    image: campusConnectHero,
    secondaryImage: campusConnectDashboard,
    secondaryLabel: "student dashboard",
    domain: "event-two-ivory.vercel.app",
  },
];

function SiteMock({ p }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="open"
      data-cursor-label="Open"
      className="group relative block overflow-hidden rounded-2xl border border-line bg-ink/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur"
    >
      <div className="flex items-center gap-2 border-b border-line bg-ink/90 px-4 py-2.5">
        <span className="truncate font-mono text-[10px] uppercase tracking-widest text-fog">
          {p.domain}
        </span>
      </div>
      <div className="relative overflow-hidden bg-bone">
        <img
          src={p.image}
          alt={`${p.title} — live production site`}
          className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-acid/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-fog">
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
          live · production
        </span>
        <span className="transition-transform group-hover:-rotate-45">↗</span>
      </div>
    </a>
  );
}

function TerminalMock({ p }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-ink/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-fog">
          ~/builds/{p.title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[12px] leading-relaxed text-bone/85 md:text-[13px]">
        <p>
          <span className="text-acid">➜</span> git status{" "}
          <span className="text-fog">— main up to date</span>
        </p>
        <p>
          <span className="text-acid">➜</span> mvn spring-boot:run
        </p>
        <p className="text-fog"> ✓ started {p.title} in 2.14s</p>
        {p.stack.map((s, i) => (
          <motion.p
            key={s}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="text-fog"
          >
            <span className="text-acid">▸</span> loaded module{" "}
            <span className="text-bone">{s}</span>
          </motion.p>
        ))}
        <p className="text-bone">
          <span className="text-acid">➜</span> deploy --prod{" "}
          <span className="caret ml-1 inline-block h-3 w-2 bg-acid align-middle" />
        </p>
      </div>
    </div>
  );
}

function ProjectPanel({ p, i: _i }) {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative border-t border-line py-24 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40"
        style={{
          background: `radial-gradient(60% 100% at 50% 0%, ${p.accent}22, transparent 70%)`,
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 flex items-center justify-between md:col-span-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            featured build /{p.index}
          </span>
          <span className="font-mono text-xs text-fog">{p.year}</span>
        </div>

        <div className="col-span-12 md:col-span-7">
          <motion.h3 className="text-6xl leading-[0.95] tracking-tight md:text-[7.5rem]">
            <span style={{ fontFamily: "var(--font-display)" }}>{p.title}</span>
          </motion.h3>
          <p className="mt-6 max-w-xl text-base text-bone/75 md:text-lg">{p.summary}</p>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 border-l border-line pl-5">
            {[
              { k: "problem", v: p.problem },
              { k: "approach", v: p.approach },
              { k: "outcome", v: p.outcome },
            ].map((r) => (
              <div key={r.k} className="grid grid-cols-[80px_1fr] items-start gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid">
                  {r.k}
                </span>
                <p className="text-sm leading-relaxed text-bone/75 md:text-[15px]">{r.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                data-cursor="hover"
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-bone/80 transition-colors hover:border-acid hover:text-acid"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {p.href && (
              <Magnetic>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="open"
                  data-cursor-label="Open"
                  className="group inline-flex items-center gap-3 rounded-full bg-acid px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform"
                >
                  Visit live
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
            )}
            {p.repo && (
              <Magnetic>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="view"
                  data-cursor-label="View"
                  className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone hover:border-acid hover:text-acid"
                >
                  Source
                  <span>↗</span>
                </a>
              </Magnetic>
            )}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-6">
            {p.metrics.map((m) => (
              <div key={m.k}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-fog">{m.k}</dt>
                <dd className="mt-1 text-lg text-bone">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div className="col-span-12 md:col-span-5">
          {p.image ? <SiteMock p={p} /> : <TerminalMock p={p} />}

          {p.secondaryImage && (
            <div className="mt-5 overflow-hidden rounded-xl border border-line bg-ink/60 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]">
              <img
                src={p.secondaryImage}
                alt={`${p.title} — ${p.secondaryLabel ?? "secondary view"}`}
                loading="lazy"
                className="block h-auto w-full"
              />

              <div className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-fog">
                <span>↳ {p.secondaryLabel}</span>
                <span>02</span>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-end font-mono text-[10px] uppercase tracking-widest text-fog">
            <span>{p.role}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturedBuilds() {
  return (
    <div id="builds" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10">
        <div className="flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            04 — featured builds
          </span>
          <span className="font-mono text-xs text-fog">scroll ↓</span>
        </div>
      </div>
      {projects.map((p, i) => (
        <ProjectPanel key={p.index} p={p} i={i} />
      ))}
    </div>
  );
}
