import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <h1 className="text-primary text-[120px] md:text-[200px] lg:text-[240px] font-black leading-[0.8] tracking-tighter mb-8 select-none">
            404
          </h1>
          <div className="space-y-4 mb-12">
            <h2 className="text-primary text-2xl md:text-3xl font-bold uppercase tracking-wide">
              {t("Page Not Found")}
            </h2>
            <p className="text-primary/60 text-base md:text-lg font-light max-w-md mx-auto">
              {t(
                "The resource you are looking for has been moved or no lorger exists in my webside",
              )}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <NavLink
              className="inline-flex items-center justify-center min-w-50 bg-primary text-white text-sm font-bold uppercase tracking-[0.2em] py-5 px-8 rounded-lg hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 cursor-pointer active:scale-95"
              to={"/"}
            >
              {t("Back to home")}
            </NavLink>
            <NavLink
              className="inline-flex items-center justify-center min-w-95 bg-transparent text-primary text-sm font-bold uppercase tracking-[0.2em] py-5 px-8 rounded-lg border-2 border-primary/10 hover:border-primary transition-all duration-300 cursor-pointer active:scale-95"
              to={"/all"}
            >
              {t("View Portfolio")}
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
}
