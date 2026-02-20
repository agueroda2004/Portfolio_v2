import React from "react";

export default function ProjectDetail() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section className="px-6 md:px-10 lg:px-40 pt-16 pb-24">
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-primary/50 text-sm font-bold uppercase tracking-[0.3em]">
            Case Study 01
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary leading-none tracking-tighter uppercase">
            Neo Archive
          </h1>
          <p className="text-xl md:text-2xl text-primary/60 max-w-2xl font-light">
            Digital preservation for the modern era. A comprehensive study on
            archiving digital assets with high-performance retrieval and
            minimalist UI.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 h-14 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">code</span>
              View on GitHub
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 h-14 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">launch</span>
              View Live Site
            </a>
          </div>
        </div>
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-primary/5 group relative overflow-hidden">
          <img
            alt="Neo Archive Project Cover"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110"
            data-alt="Abstract minimalist digital architecture concept visualization"
            id="hero-image"
            src="{{DATA:IMAGE:IMAGE_17}}"
          />
        </div>
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center justify-center gap-3 bg-primary text-white px-12 h-16 rounded font-black uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all shadow-xl">
            <span className="material-symbols-outlined">grid_view</span>
            View All Images
          </button>
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-40 py-24 bg-primary/5 border-y border-primary/5 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-3xl font-bold uppercase tracking-tight">
              Project Overview
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-primary/80">
              <p>
                The digital landscape is expanding at an exponential rate, yet
                our methods for preserving high-fidelity creative assets remain
                fragmented. Neo Archive was born from the necessity to bridge
                the gap between heavy-duty storage and intuitive, lightning-fast
                accessibility.
              </p>
              <p>
                The challenge was to create a high-performance digital archiving
                system that felt both futuristic and grounded. Our solution
                focused on a brutalist aesthetic combined with lightning-fast
                search capabilities and a robust metadata structure.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary/40">
                Role &amp; Responsibilities
              </h3>
              <ul className="flex flex-col gap-3 font-semibold text-primary">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                  Lead Product Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                  UI/UX Strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                  Frontend Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                  Design System Development
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary/40">
                Timeline
              </h3>
              <p className="font-semibold text-primary">
                6 Months (2023 - 2024)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-40 py-24 border-b border-primary/5 reveal-on-scroll">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-12">
          Technical Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl mb-4 text-primary/40 group-hover:text-primary transition-colors">
              javascript
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl mb-4 text-primary/40 group-hover:text-primary transition-colors">
              deployed_code
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              React.js
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl mb-4 text-primary/40 group-hover:text-primary transition-colors">
              database
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              PostgreSQL
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl mb-4 text-primary/40 group-hover:text-primary transition-colors">
              cloud
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              AWS S3
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl mb-4 text-primary/40 group-hover:text-primary transition-colors">
              animation
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Framer
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl mb-4 text-primary/40 group-hover:text-primary transition-colors">
              brush
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Tailwind
            </span>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-40 py-32 bg-primary text-white text-center reveal-on-scroll">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] opacity-40">
            Impact &amp; Outcome
          </h2>
          <p className="text-4xl md:text-5xl font-light leading-tight">
            "Neo Archive redefined how we handle project legacy. It's not just
            storage; it's a living library."
          </p>
          <div className="grid grid-cols-3 gap-12 w-full pt-10">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-black">40%</span>
              <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">
                Faster Retrieval
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-black">12k+</span>
              <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">
                Active Assets
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-black">2ms</span>
              <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">
                Search Latency
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-primary/10 reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <a
            className="px-6 md:px-10 lg:px-40 py-24 flex flex-col items-start gap-12 group/prev hover:bg-primary transition-colors duration-500 border-b md:border-b-0 md:border-r border-primary/10"
            href="#"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 md:size-16 border-2 border-primary group-hover/prev:border-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/prev:-translate-x-2">
                <span className="material-symbols-outlined text-2xl text-primary group-hover/prev:text-white transition-colors">
                  arrow_back
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/40 group-hover/prev:text-white/40 transition-colors">
                  Previous Project
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary group-hover/prev:text-white transition-colors leading-none uppercase tracking-tighter">
                  Void Store
                </h2>
              </div>
            </div>
          </a>
          <a
            className="px-6 md:px-10 lg:px-40 py-24 flex flex-col items-end text-right gap-12 group/next hover:bg-primary transition-colors duration-500"
            href="#"
          >
            <div className="flex items-center gap-4 flex-row-reverse">
              <div className="size-12 md:size-16 border-2 border-primary group-hover/next:border-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/next:translate-x-2">
                <span className="material-symbols-outlined text-2xl text-primary group-hover/next:text-white transition-colors">
                  arrow_forward
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/40 group-hover/next:text-white/40 transition-colors">
                  Next Case Study
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary group-hover/next:text-white transition-colors leading-none uppercase tracking-tighter">
                  Quantum Data
                </h2>
              </div>
            </div>
          </a>
        </div>
      </section>
      <footer className="px-6 md:px-10 lg:px-40 py-20 border-t border-primary/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-white text-xs">
                deployed_code
              </span>
            </div>
            <span className="text-primary font-black uppercase tracking-tighter text-sm">
              Portfolio
            </span>
          </div>
          <p className="text-primary/40 text-xs font-bold uppercase tracking-widest">
            © 2024 Design Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">
              Connect
            </span>
            <div className="flex gap-6">
              <a
                className="text-sm font-bold uppercase hover:opacity-50 transition-opacity"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="text-sm font-bold uppercase hover:opacity-50 transition-opacity"
                href="#"
              >
                Dribbble
              </a>
              <a
                className="text-sm font-bold uppercase hover:opacity-50 transition-opacity"
                href="#"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">
              Inquiries
            </span>
            <a
              className="text-sm font-bold uppercase hover:opacity-50 transition-opacity"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
