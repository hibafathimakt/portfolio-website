"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { contactLinks } from "@/lib/data";
import Reveal from "./Reveal";

// type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  // const [status, setStatus] = useState<Status>("idle");
  // const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("sending");
  //   try {
  //     // Replace with your EmailJS service, template and public key.
  //     // See https://www.emailjs.com/docs/ for setup.
  //     await emailjs.send(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       {
  //         from_name: form.name,
  //         from_email: form.email,
  //         subject: form.subject,
  //         message: form.message,
  //       },
  //       "YOUR_PUBLIC_KEY"
  //     );
  //     setStatus("sent");
  //     setForm({ name: "", email: "", subject: "", message: "" });
  //   } catch (err) {
  //     setStatus("error");
  //   }
  // };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
            Contact
          </p>
          {/* <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            Let&apos;s build something
          </h2>
          <p className="opacity-70 mb-12 max-w-xl">
            Open to Backend, Python roles. Reach out
            directly.
          </p> */}
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10">
          <Reveal className="md:col-span-2 space-y-5">
            <a
              href={`mailto:${contactLinks.email}`}
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <Mail size={17} /> {contactLinks.email}
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-signal transition-colors"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <div className="flex items-center gap-3 text-sm opacity-70">
              <MapPin size={17} /> {contactLinks.location}
            </div>
          </Reveal>

          {/* <Reveal delay={0.15} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-deepText/10 dark:border-white/10 p-6 bg-panelLight/40 dark:bg-panel/40"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border border-deepText/15 dark:border-white/15 rounded-lg px-4 py-3 text-sm focus:border-signal outline-none transition-colors"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-transparent border border-deepText/15 dark:border-white/15 rounded-lg px-4 py-3 text-sm focus:border-signal outline-none transition-colors"
                />
              </div>
              <input
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-transparent border border-deepText/15 dark:border-white/15 rounded-lg px-4 py-3 text-sm focus:border-signal outline-none transition-colors"
              />
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full bg-transparent border border-deepText/15 dark:border-white/15 rounded-lg px-4 py-3 text-sm focus:border-signal outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deepText dark:bg-signal text-ivory dark:text-ink text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-signal/20 transition-all disabled:opacity-60"
              >
                <Send size={15} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="text-sm text-signal">
                  Message sent. Thank you — I&apos;ll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-amber">
                  Something went wrong. Please try again, or email directly.
                </p>
              )}
            </form>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
