"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { roles } from "@/lib/data";

function useTypedRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return text;
}

export default function Hero() {
  const typed = useTypedRoles();
  const query = `SELECT role FROM hiba WHERE stack = 'backend+data';`;
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setQueryText(query.slice(0, i));
      if (i >= query.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* ambient background field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-signal/10 blur-3xl animate-floaty" />
        <div className="absolute bottom-0 -left-20 w-[24rem] h-[24rem] rounded-full bg-amber/10 blur-3xl animate-floaty" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-signal mb-4 tracking-wide"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Hiba Fathima KT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 h-10 flex items-center"
        >
          <span className="text-xl sm:text-2xl font-medium opacity-80">
            {typed}
            <span className="inline-block w-[2px] h-6 bg-signal ml-1 align-middle animate-blink" />
          </span>
        </motion.div>

        {/* signature element: a live, typed SQL query grounding the subject */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 inline-block rounded-lg border border-deepText/10 dark:border-white/10 bg-panelLight/60 dark:bg-panel/60 glass px-4 py-3 font-mono text-xs sm:text-sm"
        >
          <span className="text-amber">hiba@portfolio</span>
          <span className="opacity-50">:~$ </span>
          <span className="text-signal">{queryText}</span>
          <span className="inline-block w-[7px] h-3 bg-current ml-0.5 align-middle animate-blink" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-deepText dark:bg-signal text-ivory dark:text-ink font-medium text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-signal/20 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-deepText/20 dark:border-white/20 font-medium text-sm inline-flex items-center gap-2 hover:border-signal hover:text-signal transition-all"
          >
            <Mail size={15} /> Contact Me
          </a>
          <a
            href="/Hibafathimakt_resume.pdf"
            className="px-6 py-3 rounded-full border border-deepText/20 dark:border-white/20 font-medium text-sm inline-flex items-center gap-2 hover:border-amber hover:text-amber transition-all"
          >
            <FileDown size={15} /> Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="animate-floaty" size={20} />
      </motion.a>
    </section>
  );
}
