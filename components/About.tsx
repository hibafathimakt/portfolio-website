"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FileDown } from "lucide-react";
import Reveal from "./Reveal";

function Counter({ target, label }: { target: number; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-semibold text-signal">
        {count}+
      </div>
      <div className="text-xs sm:text-sm opacity-60 mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-8">
            Building systems that turn raw data into decisions
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          <Reveal delay={0.1} className="md:col-span-2 space-y-4 text-base leading-relaxed opacity-80">
            <p>
              I&apos;m a backend and data-focused engineer who enjoys the full
              path a piece of information takes from a raw record in a
              database, through an API, to a model that turns it into a
              signal someone can act on. My core toolkit is Python, SQL and
              FastAPI, backed by a growing focus on applied machine learning
              and analytics.
            </p>
            <p>
              I care about clean architecture and readable code as much as I
              care about the result: systems that are easy to extend, easy to
              debug, and fast under real usage. Recently that&apos;s meant
              shipping a full-stack analytics MVP end-to-end under tight time
              constraints API, database, ML inference and frontend, all in
              one sitting.
            </p>
            <p>
              I just completed my degree, and looking for full stack developer,
              Backend Developer or Python Developer roles where I can keep building things that hold up
              under real data and real users.
            </p>
            <a
              href="/hibafathimakt_resume.pdf"
              className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-signal hover:gap-3 transition-all"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-deepText/10 dark:border-white/10 p-6 grid grid-cols-2 gap-6 bg-panelLight/40 dark:bg-panel/40">
              <Counter target={3} label="Featured Projects" />
              <Counter target={7} label="Core Tools" />
              <Counter target={4} label="ML Frameworks" />
              <Counter target={2} label="Databases" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
