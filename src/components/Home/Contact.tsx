import React from "react";

export default function Contact() {
  return (
    <section
      className="py-40 px-6 text-center bg-white border-b border-primary/5"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-10 block">
          Available for New Projects
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">
          HAVE AN IDEA? <br />
          LET'S CONNECT.
        </h2>
        <a
          className="inline-flex items-center gap-6 group"
          href="mailto:hello@designerdev.com"
        >
          <span className="text-2xl md:text-4xl font-light underline underline-offset-8 decoration-1 group-hover:text-primary/60 transition-colors">
            hello@designerdev.com
          </span>
          <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined">mail</span>
          </div>
        </a>
      </div>
    </section>
  );
}
