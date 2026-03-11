import { useTranslation } from "react-i18next";
import { projectsData } from "../constants/projectsData";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function AllProjects() {
  const { t, i18n } = useTranslation();
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1
          className={`md:text-8xl font-black tracking-tighter uppercase leading-none mb-6 ${i18n.language === "es" ? "text-4xl" : "text-6xl"}`}
        >
          {i18n.language === "es" ? (
            <>
              {t("Works")}
              <br />
              {t("Selected")}
            </>
          ) : (
            <>
              {" "}
              {t("Selected")}
              <br />
              {t("Works")}
            </>
          )}
        </h1>
        <p className="max-w-xl text-lg text-primary/60 dark:text-slate-400 font-medium">
          {t(
            "A curated archive of digital experiences, visual identities, and product solutions developed between 2023 and 2026.",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {projectsData
          .slice(
            (currentPage - 1) * projectsPerPage,
            currentPage * projectsPerPage,
          )
          .map((project, index) => (
            <NavLink
              className="group cursor-pointer"
              key={index}
              to={`/project/${project.id}`}
            >
              <div className="overflow-hidden border border-primary/10 mb-6 bg-gray-50">
                <img
                  className="md:grayscale-100 aspect-video duration-700 group-hover:scale-105 transition-all hover:grayscale-0"
                  data-alt="Modern web interface design project"
                  src={project.images[0]}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
                  <p className="text-primary/60 text-sm font-medium uppercase tracking-widest">
                    {t(project.miniDescription)}
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">
                  north_east
                </span>
              </div>
            </NavLink>
          ))}
      </div>
      <div className="mt-16 pt-8 border-t border-primary/10 flex justify-center items-center gap-4">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer active:scale-95"
          onClick={() => {
            if (currentPage === 1) setCurrentPage(3);
            else setCurrentPage((prev) => prev - 1);
          }}
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_left
          </span>
        </button>
        <span className="text-xs font-bold uppercase tracking-widest">
          {t("Page")} {currentPage} {t("of")} {totalPages}
          <span className="opacity-50">
            {" "}
            ( {t("Projects")}: {projectsData.length})
          </span>
        </span>
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer active:scale-95"
          onClick={() => {
            if (currentPage === totalPages) setCurrentPage(1);
            else setCurrentPage((prev) => prev + 1);
          }}
        >
          <span className="material-symbols-outlined text-[18px]">
            chevron_right
          </span>
        </button>
      </div>
    </main>
  );
}
