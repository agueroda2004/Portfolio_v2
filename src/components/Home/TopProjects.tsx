import { NavLink } from "react-router";
import { projectsData } from "../../constants/projectsData";
import { useTranslation } from "react-i18next";

export default function TopProjects() {
  const { t } = useTranslation();
  return (
    <section
      className="py-32 px-6 border-t border-primary/5 bg-background-light"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-4 block">
              {t("Selected Works")}
            </span>
            <h2 className="text-5xl font-bold tracking-tight">
              {t("TOP PROJECTS")}
            </h2>
          </div>
          <p className="max-w-xs text-sm text-primary/50 uppercase tracking-widest font-medium">
            {t(
              "A curation of projects focusing on design systems, web apps, and creative coding.",
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.slice(0, 4).map((project, index) => (
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
        <div className="mt-20 flex justify-center">
          <NavLink
            className="inline-flex items-center gap-4 px-16 py-5 bg-white text-black text-sm font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white border border-primary transition-all duration-300 cursor-pointer active:scale-95"
            to={"all"}
          >
            <span>{t("View All Projects")}</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
