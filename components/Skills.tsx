"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-panelLight/30 dark:bg-panel/20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
            The stack behind the work
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border border-deepText/10 dark:border-white/10 p-6 bg-panelLight/60 dark:bg-panel/60 hover:border-signal/50 hover:shadow-xl hover:shadow-signal/5 transition-colors"
              >
                <h3 className="font-display text-lg font-medium mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-deepText/10 dark:border-white/10 opacity-80 hover:opacity-100 hover:border-signal hover:text-signal transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
