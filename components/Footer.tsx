"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
// import { contactLinks } from "@/lib/data";

// const links = [
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#education", label: "Education" },
//   { href: "#contact", label: "Contact" },
// ];

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-deepText/10 dark:border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display text-sm opacity-70">
            © {new Date().getFullYear()} Hiba Fathima KT. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-xs">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="opacity-60 hover:opacity-100 hover:text-signal transition-all">
                {l.label}
              </a>
            ))}
          </div> */}
          {/* <div className="flex gap-4">
            <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="opacity-60 hover:opacity-100 hover:text-signal transition-all">
              <Github size={16} />
            </a>
            <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-60 hover:opacity-100 hover:text-signal transition-all">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${contactLinks.email}`} aria-label="Email" className="opacity-60 hover:opacity-100 hover:text-signal transition-all">
              <Mail size={16} />
            </a>
          </div> */}
        </div>
      </footer>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-deepText dark:bg-signal text-ivory dark:text-ink shadow-lg hover:-translate-y-1 transition-transform"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
