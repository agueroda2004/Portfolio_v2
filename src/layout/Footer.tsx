import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-6 bg-white shadow-top border border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary flex items-center justify-center rounded cursor-pointer">
            <span className="text-white font-black text-xl">D</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest">
            © 2026 DESIGNER/DEV
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary/50 transition-colors"
            href="https://www.linkedin.com/in/daniel-agüero-a3b906389"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary/50 transition-colors"
            href="https://github.com/agueroda2004"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <p className="text-xs font-medium text-primary/40 uppercase tracking-widest">
          {t("Minimalism is functional.")}
        </p>
      </div>
    </footer>
  );
}
