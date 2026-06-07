import { ChevronDown } from "lucide-react";
import { useLocale } from "../utils/useLocale";
import { useState } from "react";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className="flex w-full justify-between p-4">
        <img src="/logo-full.svg" className="w-[150px]" />
        <div className="flex gap-2 relative text-sm">
          <button
            onClick={() => setModal((prev) => !prev)}
            className="flex gap-1 items-center"
          >
            <ChevronDown className="w-[13px]" />
            <img
              src={locale === "de" ? "/de-flag.svg" : "/us-flag.svg"}
              className="w-[15px]"
            />
            {locale === "de" ? "DE" : "EN"}
          </button>
          {modal ? (
            <div className="absolute top-10 right-0 bg-white flex flex-col items-end shadow-lg shadow-black/20 p-2 rounded">
              <button
                onClick={() => {
                  setLocale("de");
                  setModal(false);
                }}
                className="flex gap-1 items-center border-b border-zinc-500"
              >
                <img src="/de-flag.svg" className="w-[15px]" />
                DE
              </button>{" "}
              <button
                onClick={() => {
                  setLocale("en");
                  setModal(false);
                }}
                className="flex gap-1 items-center"
              >
                <img src="/us-flag.svg" className="w-[15px]" />
                EN
              </button>
            </div>
          ) : null}
        </div>
      </header>
      <nav className="py-2 border-y">
        <ul className="flex gap-8 overflow-hidden pl-4">
          <li className="shrink-0">Rising Brands</li>
          <li className="shrink-0">Premiere Brands</li>
          <li className="shrink-0">News</li>
          <li className="shrink-0">Learn</li>
          <li className="shrink-0">Tools</li>
        </ul>
      </nav>
    </>
  );
}
