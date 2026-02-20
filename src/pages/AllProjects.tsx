import React from "react";

export default function AllProjects() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
          Selected
          <br />
          Works
        </h1>
        <p className="max-w-xl text-lg text-primary/60 dark:text-slate-400 font-medium">
          A curated archive of digital experiences, visual identities, and
          product solutions developed between 2020 and 2024.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-primary/10 pb-8 mb-12">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1">
            All Projects
          </button>
          <button className="text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors pb-1 border-b-2 border-transparent">
            Design
          </button>
          <button className="text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors pb-1 border-b-2 border-transparent">
            Web
          </button>
          <button className="text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors pb-1 border-b-2 border-transparent">
            Mobile
          </button>
          <button className="text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors pb-1 border-b-2 border-transparent">
            Identity
          </button>
        </div>
        <div className="flex items-center gap-2 text-primary/40 dark:text-slate-500">
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Displaying 12 Projects
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-sm mb-6 border border-primary/5">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              data-alt="Minimalist architectural brand identity design mockup"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLRETV1c5XdX3vPQgqy_Ru9QXVLUZBf_Wid_kfcCNyQz0ZOhho7zO9wl3NvhlWh8rpz-Ka1A6WxQfAm99fL30R57d4mGVznhp9QSk4c6V6Az6ZX_SGAu0U3WxSIVLJ4v_7tVWSpDZQmKCPTi5AE_KN9ed2EyZDVUHDwA9rXnEWyzb7a6hjIfAhgayclibIYyBrqiR-2vzfCkmGE644W5BH5Ij-LJQ6jbt8RljLr-wOJyo2laF7En2JyJlaqUHcsBy-J3aVy4oeXvZI')",
              }}
            ></div>
          </div>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  UI/UX
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  •
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  2024
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:underline">
                Aeronaut Branding
              </h3>
              <p className="text-primary/60 dark:text-slate-400 text-sm max-w-sm">
                A comprehensive visual identity for a next-generation aerospace
                startup focused on sustainable flight.
              </p>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-sm mb-6 border border-primary/5">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              data-alt="Dashboard interface for a financial technology application"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmNgtl_gcUWOFeaQNJ_CEQ0nqi4sEYqocvfD3QZF3kZjktC0sp14-jRSqf66cbMLbSXMDB0zFC1PN2h3K6LlmiIQybJKq97uAmIU_Ss2GVuv5B32xLE6c_TkkzqTHVhRWEPsK6wGhWptZWpiBet9cgjstYdRAsbbyiZyrSdaeINa-AahcoxszTmiYlx9L6H-c8OwiH516GoNFBuQB-PwjkMV1D3_YPbfTHudnumnn_RAd5Ys_fYYvtxyHr9lSTCBT1yHZQhnsLmvyf')",
              }}
            ></div>
          </div>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  Fintech
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  •
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  Web
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:underline">
                Nexus Financial
              </h3>
              <p className="text-primary/60 dark:text-slate-400 text-sm max-w-sm">
                Designing a high-performance analytics dashboard for global
                institutional investors.
              </p>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-sm mb-6 border border-primary/5">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              data-alt="Luxury e-commerce website design for high-end fashion"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlk4_S4FLpbelzS68EZNRWjoLn0ZlQ51AuZQqMehxMyd-hZKc6HfFz9Ai95cboPQQMGXihygJO1MZ7qluci-mG3ViUibNpvuze5let2O6nzt78497oIV56S8cG_lnOljK6Kmq8CVdQwUFO4oEmgDGbFtEzPz1nzez5LrdRsTLxlp3lLZc2ajfeYJwxS1ShaQ6QgDsHDOjHVwh6JztHwSGpd3h-2Qbn9JfOiytsyUCzx-5Nz4APLUAlIjtFH6bRfxaEtacvJShK7QKQ')",
              }}
            ></div>
          </div>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  E-Commerce
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  •
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  2023
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:underline">
                Vanguard Store
              </h3>
              <p className="text-primary/60 dark:text-slate-400 text-sm max-w-sm">
                A minimalist shopping experience centered around typography and
                high-end product photography.
              </p>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-sm mb-6 border border-primary/5">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              data-alt="Modern smartphone mobile app interface design"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZXPJ-NWChxWK8Dh51F5Emr-r0SaWd_eACKJmTnaUuYK3S5gBa1Au3Z9GtUyEm9yvfykh-TZwQ5_NmvdFbUGaHZeRB4xGwrBKZ05_-IrZDjeSFixlJz48idhpXLoWpcX84mM5Of59Fwd-racvH8zTj7sWTb7rX-V4LWHceOQmWvT0nackeIxpS0Kdv-sD3l3gffE_Q8-nlW2sQlb_xh2Vt8mlA9G_-4lFuD3H91fldupW8okmBHyLpYaRlN6H4V-UDqsb-Ob7X79ef')",
              }}
            ></div>
          </div>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  Mobile
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  •
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 dark:text-slate-500">
                  Product
                </span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:underline">
                Stellar App
              </h3>
              <p className="text-primary/60 dark:text-slate-400 text-sm max-w-sm">
                Redefining the way users interact with smart home devices
                through intuitive gesture controls.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 pt-12 border-t border-primary/10 flex justify-center items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors">
          <span className="material-symbols-outlined text-[18px]">
            chevron_left
          </span>
        </button>
        <span className="text-xs font-bold uppercase tracking-widest">
          Page 01 of 03
        </span>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors">
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>
      </div>
    </main>
  );
}
