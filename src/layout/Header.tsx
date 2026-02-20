import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuLanguageOpen, setIsMenuLanguageOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem("i18nextLng") || "en",
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuLanguageOpen(false);
      }
    }
    if (isMenuLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuLanguageOpen]);

  const handleLanguageChange = (lng: string) => {
    // lng === es || en
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setIsMenuLanguageOpen(false);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, []);
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
          {t("About")}
        </a>
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#projects"
        >
          {t("Projects")}
        </a>
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#stack"
        >
          {t("Stack")}
        </a>
        <a
          className="nav-link text-sm font-medium uppercase tracking-widest"
          href="#contact"
        >
          {t("Contact")}
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex min-w-30 items-center justify-center bg-primary text-white text-xs font-bold uppercase tracking-widest h-10 px-6 hover:bg-primary/90 transition-all cursor-pointer active:scale-95 ">
          {t("Download CV")}
        </button>
        <div className="flex items-center gap-2 border border-primary/10 px-2 h-10">
          <div className="relative " ref={menuRef}>
            <div
              onClick={() => setIsMenuLanguageOpen(true)}
              className="cursor-pointer flex items-center gap-1"
            >
              <span className="text-xs font-bold text-primary">
                {selectedLanguage.toUpperCase()}
              </span>
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </div>

            {isMenuLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded shadow-lg py-1">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-primary/10"
                  onClick={() => {
                    handleLanguageChange("en");
                  }}
                >
                  EN
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-primary/10"
                  onClick={() => {
                    handleLanguageChange("es");
                  }}
                >
                  ES
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
