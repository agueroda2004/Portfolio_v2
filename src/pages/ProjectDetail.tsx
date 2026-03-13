import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { projectsData } from "../constants/projectsData";
import { useTranslation } from "react-i18next";
import { getTechIcon } from "../utils/techIcon";

type Project = {
  id: number;
  name: string;
  miniDescription: string;
  images: string[];
  gitHuburl: string;
  liveSite: string;
  available: boolean;
  projectOverview: string[];
  rolesResponsibilities: string[];
  previusProject: { id: number; name: string };
  nextProject: { id: number; name: string };
  technologies: string[];
};

const technologyDescriptionKeyByName: Record<string, string> = {
  react: "techDescription.React",
  tailwind: "techDescription.Tailwind",
  supabase: "techDescription.Supabase",
  typescript: "techDescription.TypeScript",
  "vs code": "techDescription.VS Code",
  git: "techDescription.Git",
  javascript: "techDescription.JavaScript",
  neon: "techDescription.Neon",
  vercel: "techDescription.Vercel",
  angular: "techDescription.Angular",
  node: "techDescription.Node",
  express: "techDescription.Express",
  postman: "techDescription.PostMan",
  mysql: "techDescription.MySql",
  firebase: "techDescription.FireBase",
  mongo: "techDescription.Mongo",
};

const getTechnologyDescriptionKey = (technology: string) => {
  return (
    technologyDescriptionKeyByName[technology.toLowerCase()] ??
    "techDescription.default"
  );
};

const searchProjectById = (id: string | undefined) => {
  return projectsData.find((project) => project.id === Number(id));
};

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nav = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProject = () => {
      const found = searchProjectById(params.id);
      if (!found) {
        nav("/404");
      } else {
        setProject(found);
        setCurrentImageIndex(0);
      }
    };
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    fetchProject();
  }, [params.id, nav]);

  const handlePrevImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  if (!project) {
    return null; // O un componente de carga, o un mensaje de error
  }

  return (
    <main className="max-w-[1440px] mx-auto overflow-x-hidden">
      <section className="px-6 md:px-10 lg:px-40 pt-16 pb-24">
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-primary/50 text-sm font-bold uppercase tracking-[0.3em]">
            {t("Project")} #{project.id}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary leading-none tracking-tighter uppercase">
            {project.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary/60 max-w-2xl font-light">
            {t(project.miniDescription)}
          </p>
          {project.available && (
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 h-14 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all cursor-pointer active:scale-95"
                href={project.gitHuburl}
                target="_blank"
              >
                <span className="material-symbols-outlined text-xl">code</span>
                {t("View on GitHub")}
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 h-14 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all"
                href={project.liveSite}
                target="_blank"
              >
                <span className="material-symbols-outlined text-xl">
                  launch
                </span>
                {t("View Live Site")}
              </a>
            </div>
          )}
        </div>
        <div className="w-full aspect-video bg-primary/5 group relative overflow-hidden">
          <img
            alt={`${project.name} - image ${currentImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-contain transition-all duration-700"
            src={project.images[currentImageIndex]}
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 size-8 bg-black/10 hover:bg-black/80 text-white flex items-center justify-center transition-all z-10 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button
                onClick={handleNextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 size-8 bg-black/10 hover:bg-black/80 text-white flex items-center justify-center transition-all z-10 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`size-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white scale-125"
                        : "bg-white/80 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-40 py-24 bg-primary/5 border-y border-primary/5 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-3xl font-bold uppercase tracking-tight">
              {t("Project Overview")}
            </h2>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-primary/80">
              <p>{t(project.projectOverview[0])}</p>
              <p>{t(project.projectOverview[1])}</p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-primary/40">
                {t("Role & Responsibilities")}
              </h3>
              <ul className="flex flex-col gap-3 font-semibold text-primary">
                {project.rolesResponsibilities.map((item, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <span className="size-1.5 bg-primary rounded-full"></span>{" "}
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-40 py-24 border-b border-primary/5 reveal-on-scroll">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-12">
          {t("Technical Stack")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {project.technologies.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-8 border border-primary/10 rounded-xl hover:border-primary hover:scale-105 transition-all group/tech gap-6 cursor-default"
              tabIndex={0}
              aria-label={`${item}: ${t(getTechnologyDescriptionKey(item))}`}
            >
              <img
                key={item}
                src={getTechIcon(item)}
                alt={`${item} icon`}
                title={item}
                className="w-8 h-8"
              />
              <span className="text-xs font-bold uppercase tracking-widest">
                {item}
              </span>
              <div className="pointer-events-none absolute left-1/2 top-4 z-20 w-52 -translate-x-1/2 -translate-y-full rounded-lg bg-primary px-3 py-2 text-center text-[11px] font-medium normal-case leading-relaxed text-white opacity-0 shadow-lg transition-all duration-200 group-hover/tech:opacity-100 group-hover/tech:-translate-y-[calc(100%+6px)] group-focus-visible/tech:opacity-100 group-focus-visible/tech:-translate-y-[calc(100%+6px)]">
                {t(getTechnologyDescriptionKey(item))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <NavLink
            className="px-6 md:px-10 lg:px-40 py-24 flex flex-col items-start gap-12 group/prev hover:bg-primary transition-colors duration-500 border-b md:border-b-0 md:border-r border-primary/10"
            to={`/project/${project.previusProject.id}`}
          >
            <div className="flex items-center gap-4">
              <div className="size-12 md:size-16 border-2 border-primary group-hover/prev:border-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/prev:-translate-x-2">
                <span className="material-symbols-outlined text-2xl text-primary group-hover/prev:text-white transition-colors">
                  arrow_back
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/40 group-hover/prev:text-white/40 transition-colors">
                  {t("Previous project")}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary group-hover/prev:text-white transition-colors leading-none uppercase tracking-tighter">
                  {project.previusProject.name}
                </h2>
              </div>
            </div>
          </NavLink>
          <NavLink
            className="px-6 md:px-10 lg:px-40 py-24 flex flex-col items-end text-right gap-12 group/next hover:bg-primary transition-colors duration-500"
            to={`/project/${project.nextProject.id}`}
          >
            <div className="flex items-center gap-4 flex-row-reverse">
              <div className="size-12 md:size-16 border-2 border-primary group-hover/next:border-white rounded-full flex items-center justify-center transition-all duration-500 group-hover/next:translate-x-2">
                <span className="material-symbols-outlined text-2xl text-primary group-hover/next:text-white transition-colors">
                  arrow_forward
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/40 group-hover/next:text-white/40 transition-colors">
                  {t("Next project")}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary group-hover/next:text-white transition-colors leading-none uppercase tracking-tighter">
                  {project.nextProject.name}
                </h2>
              </div>
            </div>
          </NavLink>
        </div>
      </section>
    </main>
  );
}
