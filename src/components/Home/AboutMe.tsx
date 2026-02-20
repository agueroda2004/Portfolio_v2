import React from "react";
import { useTranslation } from "react-i18next";
import LoadingImage from "../common/LoadingImage";

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-32 px-6 bg-white" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden border border-primary/10">
            {/* <img
              alt="Profile Portrait"  
              className="grayscale-img w-full h-full object-cover"
              data-alt="Professional black and white portrait of a designer"
              src="https://ik.imagekit.io/5zi86k8wt/Daniel.jpeg"
            /> */}
            <LoadingImage src="https://ik.imagekit.io/5zi86k8wt/Daniel.JPG" />
            <div className="absolute bottom-6 left-6 bg-white p-4 border border-primary/10">
              <p className="text-xs font-bold uppercase tracking-widest">
                {t("Experience")}: 3+ {t("Years")}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 pt-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-6 block">
            {t("About Me")}
          </span>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            {t("Bridging the gap between complex logic and minimalist design.")}
          </h3>
          <div className="space-y-6 text-lg text-primary/70 leading-relaxed max-w-2xl font-light">
            <p>
              {t(
                "I build digital products with a focus on minimalism and functional design. My approach is rooted in the Swiss Design movement—prioritizing clarity, order, and objectivity in every pixel I craft.",
              )}
            </p>
            <p>
              {t(
                "With a background in Engineering, I bring a unique perspective to product development. I don't just build components; I design systems that scale and experiences that resonate with users",
              )}
            </p>
            <div className="pt-8 flex gap-12">
              <div>
                <h4 className="text-primary font-bold text-3xl">6+</h4>
                <p className="text-xs uppercase tracking-widest font-bold mt-1">
                  {t("Projects Delivered")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
