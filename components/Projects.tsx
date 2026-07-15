"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
            A few things I&apos;ve shipped
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-signal/40 via-transparent to-amber/40 hover:from-signal hover:to-amber transition-all duration-500"
              >
                <div className="rounded-2xl h-full bg-ivory dark:bg-ink p-6 flex flex-col">
                  <div className="font-mono text-[11px] text-amber/80 mb-3 truncate">
                    {p.query}
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-deepText/10 dark:border-white/10 opacity-70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-deepText/15 dark:border-white/15 hover:border-signal hover:text-signal transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-deepText dark:bg-signal text-ivory dark:text-ink hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
