import { ChevronDown } from "lucide-react";
import { useLocale } from "../utils/useLocale";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { locale, setLocale, t } = useLocale();
  const [modal, setModal] = useState(false);

  return (
    <footer className="flex w-full justify-center p-4 border-t border-slate-300">
      <section className="w-full max-w-[1200px] flex gap-4 py-10">
        <div className="w-1/3">
          {" "}
          <img src="/logo-full.svg" className="w-[50%]" />
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          {" "}
          <span className="instrument text-2xl">Rechtliches</span>
          <Link to="/impressum" className="text-slate-600 text-sm">
            Impressum
          </Link>
          <Link to="/datenschutz" className="text-slate-600 text-sm">
            Datenschutz
          </Link>
        </div>
        {/* 
        <div className="w-1/3 flex flex-col gap-2">
          {" "}
          <span className="instrument text-2xl">Links</span>
          <Link className="text-slate-600 text-sm">Instagram</Link>
          <Link className="text-slate-600 text-sm">Facebook</Link>
          <Link className="text-slate-600 text-sm">Youtube</Link>
        </div>
        */}
      </section>
    </footer>
  );
}
