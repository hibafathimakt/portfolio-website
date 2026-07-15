"use client";

import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-panelLight/30 dark:bg-panel/20">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
            Foundations
          </h2>
        </Reveal>

        <div className="relative border-l border-deepText/10 dark:border-white/10 pl-8 space-y-10 mb-20">
          {education.map((e, i) => (
            <Reveal key={i} delay={i * 0.1} className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-ivory dark:bg-ink border-2 border-signal" />
              <div className="flex items-center gap-2 text-xs font-mono text-signal mb-1">
                <GraduationCap size={14} /> {e.year}
              </div>
              <h3 className="font-display text-lg font-medium">{e.degree}</h3>
              <p className="text-sm opacity-70 mt-1">
                {e.institution} · {e.university}
              </p>
              <p className="text-sm opacity-50 mt-1">CGPA: {e.cgpa}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-display text-2xl font-medium mb-6">
            Certifications
          </h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-xl border border-deepText/10 dark:border-white/10 p-5 flex items-start gap-4 hover:border-amber/50 hover:-translate-y-1 transition-all bg-panelLight/60 dark:bg-panel/60">
                <Award className="text-amber shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium text-sm">{c.title}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
