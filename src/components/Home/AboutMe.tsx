import React from "react";

export default function AboutMe() {
  return (
    <section className="py-32 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden border border-primary/10">
            <img
              alt="Profile Portrait"
              className="grayscale-img w-full h-full object-cover"
              data-alt="Professional black and white portrait of a designer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgLdZdaUtckPZNsiTvADsDWen3yVf1ud9V0E4XHWSGJ4ugrWjgoUBjQe1ohCoaqDnCTMSfBdOPLzc6w3-TFnmu1OBlFWWfCVlPaGo9tfDtyOA_e2zZzqRb8sHNQT53mDGt8wtYyO8ujxgfBzINkODmfMk_nnMRnK63gZyvOQzpB_2LZ2DWfCEbiu7O2G_1OWsezc4IOXgNnGM7TMVEDIoExv2oxkikHn8yG6gsB1AS-3_yZd4vQLKjN8enWDXDi7LL-xvw3rSyiKW"
            />
            <div className="absolute bottom-6 left-6 bg-white p-4 border border-primary/10">
              <p className="text-xs font-bold uppercase tracking-widest">
                Experience: 5+ Years
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 pt-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-6 block">
            About Me
          </span>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            Bridging the gap between complex logic and minimalist design.
          </h3>
          <div className="space-y-6 text-lg text-primary/70 leading-relaxed max-w-2xl font-light">
            <p>
              I build digital products with a focus on minimalism and functional
              design. My approach is rooted in the Swiss Design
              movement—prioritizing clarity, order, and objectivity in every
              pixel I craft.
            </p>
            <p>
              With a background in both Engineering and Fine Arts, I bring a
              unique perspective to product development. I don't just build
              components; I design systems that scale and experiences that
              resonate with users on a visceral level.
            </p>
            <div className="pt-8 flex gap-12">
              <div>
                <h4 className="text-primary font-bold text-3xl">40+</h4>
                <p className="text-xs uppercase tracking-widest font-bold mt-1">
                  Projects Delivered
                </p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-3xl">12</h4>
                <p className="text-xs uppercase tracking-widest font-bold mt-1">
                  Awards Received
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
