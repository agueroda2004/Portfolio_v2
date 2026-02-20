import React from "react";

export default function TopProjects() {
  return (
    <section
      className="py-32 px-6 border-t border-primary/5 bg-background-light"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-4 block">
              Selected Works
            </span>
            <h2 className="text-5xl font-bold tracking-tight">TOP PROJECTS</h2>
          </div>
          <p className="max-w-xs text-sm text-primary/50 uppercase tracking-widest font-medium">
            A curation of projects focusing on design systems, web apps, and
            creative coding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="overflow-hidden border border-primary/10 mb-6 bg-gray-50">
              <img
                className="grayscale-img w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Modern web interface design project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7n8dWvt8JDl7MdLTxbymtk_7Sy5uqaNVr89HNZtQ3XMDbX3zMie9uTwpj7SfM3ysU0RG361_crFg6xypoNT4n6kVr0hRoP7Lqv2aMIxgY5swuXDmwWx_foh4ggW56IBOtZpcHtWUdzlYg4SugE7V87EtcROB9nJhuOVrBtRLffWf3x_ZrrdzLsTewktG35uTJL4GneVlFsB_gkHfHDqjwm4K3ftoOHGY6rV0zMlrOXOcOQ9weVnRGYvMUO4kTNVtGjki2mr6STM_a"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold mb-2">NEO ARCHIVE</h4>
                <p className="text-primary/60 text-sm font-medium uppercase tracking-widest">
                  Design System / React
                </p>
              </div>
              <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">
                north_east
              </span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden border border-primary/10 mb-6 bg-gray-50">
              <img
                className=" w-full aspect-[16/10] object-cover  duration-700 group-hover:scale-105 transition-all"
                data-alt="Data visualization dashboard project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhQf61Pm3bMDgtXqxG-LSvd_A8iWzwXRuPnsFvKOJ99rDfJTaY3-30rttMNxGPE8VavxVn-EkExULtaeAOYzFnmghTqG2idHhS57MwNynn1OdSYkO4RdKkbvLIp4nbvs0y0zUq-f-cwQOeCHYgc2oc4XLDJudjw6U8tdzBFFG7UfTwxJ0PdK6wu3TwKAZqRUlSeAN5g5VQehxbrPwSWIIAt8DEYX5fCA2M2p1p-MUuBKXk8RsSorFVgsSXkl4-Xx2WSBXS0VTPO37G"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold mb-2">QUANTUM DATA</h4>
                <p className="text-primary/60 text-sm font-medium uppercase tracking-widest">
                  Dashboard / Node.js
                </p>
              </div>
              <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">
                north_east
              </span>
            </div>
          </div>
          <div className="group cursor-pointer transition-all">
            <div className="overflow-hidden border border-primary/10 mb-6 bg-gray-50">
              <img
                className="grayscale-img w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Minimal e-commerce platform project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1tQzQ_ryD1ExYUvzADhxjS_LTeGM73I4TXJnXMwU7rRcj2hcvapzxYCdsoCeFR_-FZ4LzScv86hZbDlp8gLDIw8181gfzTOphzXRoc3Subpooin4enz8o6lNgu9KHSyvOnurOoiia8TxnuJTDTMBkXBuAQxHRJ6UcwBDGPJREqcxAvDXUpjY3m-7z0ikXRZDavr_Jq34a21Y-uwGB5BxGR3h526IWpfCoGlN8JZVWXWhE1_N3hSHf0EhipSAnDcKmmL8U0EWa4f29"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold mb-2">VOID STORE</h4>
                <p className="text-primary/60 text-sm font-medium uppercase tracking-widest">
                  E-commerce / Next.js
                </p>
              </div>
              <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">
                north_east
              </span>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden border border-primary/10 mb-6 bg-gray-50">
              <img
                className="grayscale-img w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Creative mobile application project"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2mdKcm4OeO96gpXbpqFHSYaJZ2Db-9tGB0bHupcRqsFtc6G7toQagbXEGn4IqKFqB1fs2xLOjhVFBjLEcv-OUi_t5nm-CWqxAJyxIYD3XzhgfZ3KebOK0rlcf51Jh-cSZviz5usOos0biK6-_Wv81WJlqlGBA8nKn1_bBpyVRh9Lqf_N7h14hp5f_ZsLaFtpRA8S3JzNeBP1qm4e9H4RLPywTbCF4U9KogD6eJ6qgJCyO5ln-VGbL900G4yCyoDtN13O8ZLGNHI6T"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold mb-2">FLUX APP</h4>
                <p className="text-primary/60 text-sm font-medium uppercase tracking-widest">
                  Mobile / React Native
                </p>
              </div>
              <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">
                north_east
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <a
            className="inline-flex items-center gap-4 px-16 py-5 bg-primary text-white text-sm font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-primary border border-primary transition-all duration-300"
            href="#"
          >
            <span>View All Projects</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
