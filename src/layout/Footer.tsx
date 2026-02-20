import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-primary flex items-center justify-center">
            <span className="text-white font-black text-xs">D</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest">
            © 2024 DESIGNER/DEV
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary/50 transition-colors"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary/50 transition-colors"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary/50 transition-colors"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary/50 transition-colors"
            href="#"
          >
            Dribbble
          </a>
        </div>
        <p className="text-xs font-medium text-primary/40 uppercase tracking-widest">
          Minimalism is functional.
        </p>
      </div>
    </footer>
  );
}
