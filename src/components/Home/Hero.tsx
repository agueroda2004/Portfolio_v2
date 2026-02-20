import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 border-b border-primary/5">
      <div className="max-w-5xl w-full">
        <p className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary/40">
          Based in San Francisco • Available for Hire
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-10">
          CRAFTING
          <br />
          DIGITAL
          <br />
          EXPERIENCES
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="max-w-md text-xl font-normal leading-relaxed text-primary/70">
            Full-stack Developer &amp; UI/UX Designer focusing on clean code,
            functional aesthetics, and intuitive human interfaces.
          </h2>
          <div className="flex flex-col gap-4">
            <a
              className="group flex items-center gap-4 text-primary font-bold uppercase tracking-widest"
              href="#projects"
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                arrow_right_alt
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
