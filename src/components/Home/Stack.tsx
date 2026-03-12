import React_Logo from "../../assets/react_svg.svg";
import Tailwind_Logo from "../../assets/tailwind_svg.svg";
import TS_Logo from "../../assets/typescript_svg.svg";
import JS_Logo from "../../assets/javascript_svg.svg";
import Angular_Logo from "../../assets/angular_svg.svg";
import Node_Logo from "../../assets/nodejs_svg.svg";
import Express_Logo from "../../assets/express_svg.svg";
import Vercel_Logo from "../../assets/vercel_svg.svg";
import Supabase_Logo from "../../assets/supabase_svg.svg";
import Neon_Logo from "../../assets/neon_svg.svg";
import Appwrite_Logo from "../../assets/appwrite_svg.svg";
import Mysql_Logo from "../../assets/mysql_svg.svg";
import Postgresql_Logo from "../../assets/postgresql_svg.svg";
import Python_Logo from "../../assets/python_svg.svg";
import FastApi_Logo from "../../assets/fastapi_svg.svg";
import { useTranslation } from "react-i18next";

export default function Stack() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-primary text-white" id="stack">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-12 block">
          {t("Technology Stack")}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">
                terminal
              </span>
              FRONTEND
            </h3>
            <ul className="space-y-4 text-white/60 font-light text-lg">
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={React_Logo} className="w-8" />
                  <span>React</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Tailwind_Logo} className="w-8" />
                  <span>TailwindCSS</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={TS_Logo} className="w-8" />
                  <span>TypeScript</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={JS_Logo} className="w-8" />
                  <span>JavaScript</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Angular_Logo} className="w-8" />
                  <span>Angular</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">host</span>
              BACKEND
            </h3>
            <ul className="space-y-4 text-white/60 font-light text-lg">
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Node_Logo} className="w-8" />
                  <span>Node.js</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Express_Logo} className="w-6" />
                  <span>Express</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Vercel_Logo} className="w-6" />
                  <span>Vercel (Severless functions)</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Python_Logo} className="w-6" />
                  <span>Python</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={FastApi_Logo} className="w-6" />
                  <span>FastApi</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-sm">
                database
              </span>
              DATABASE
            </h3>
            <ul className="space-y-4 text-white/60 font-light text-lg">
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Supabase_Logo} className="w-6" />
                  <span>Supabase</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Neon_Logo} className="w-6" />
                  <span>Neon</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Appwrite_Logo} className="w-6" />
                  <span>Appwrite</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Mysql_Logo} className="w-6" />
                  <span>Mysql</span>
                </div>
              </li>
              <li className="hover:text-white transition-colors cursor-default">
                <div className="flex items-center gap-3">
                  <img src={Postgresql_Logo} className="w-6" />
                  <span>Postgresql</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
