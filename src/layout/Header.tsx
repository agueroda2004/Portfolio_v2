import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-6 md:px-10 lg:px-40 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-8 bg-primary flex items-center justify-center rounded">
          <span className="text-white font-black text-xl">D</span>
        </div>
        <h2 className="text-primary text-lg font-black tracking-tighter uppercase">
          Designer/Dev
        </h2>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#about"
        >
          About
        </a>
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#stack"
        >
          Stack
        </a>
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#contact"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex min-w-30 items-center justify-center bg-primary text-white text-xs font-bold uppercase tracking-widest h-10 px-6 hover:bg-primary/90 transition-all cursor-pointer active:scale-95 ">
          Download CV
        </button>
        <div className="flex items-center gap-2 border border-primary/10 px-2 h-10">
          <span className="text-xs font-bold text-primary">EN</span>
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </div>
      </div>
    </header>
  );
}
