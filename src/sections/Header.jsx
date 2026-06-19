import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale } from "../utils/useLocale";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="flex w-full justify-center p-4 border-b border-slate-500">
        <div className="max-w-[1200px] w-full flex justify-between">
          <Link to="/">
            <img src="/logo-full.svg" className="w-[150px]" />
          </Link>

          <div className="flex gap-2 relative text-sm">
            <div className="flex items-center gap-4">
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
              <Menu
                className="size-5 flex lg:hidden"
                onClick={() => setMenu((prev) => !prev)}
              />
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
          </div>
          {menu ? (
            <div className="absolute inset-0 bg-white flex items-center justify-center text-4xl instrument z-90">
              <X
                onClick={() => setMenu(false)}
                className="absolute top-8 right-4"
              />
              <nav className="flex flex-col items-center justify-center gap-4 text-center">
                <Link onClick={() => setMenu(false)} to="/">
                  Home
                </Link>
                <Link onClick={() => setMenu(false)} to="/ads-optimierung">
                  Ads Optimierung
                </Link>
                <Link onClick={() => setMenu(false)} to="/news">
                  News
                </Link>
                <Link onClick={() => setMenu(false)} to="/tools">
                  Tools
                </Link>
                <Link onClick={() => setMenu(false)} to="/experts">
                  Experts
                </Link>
              </nav>
            </div>
          ) : null}
        </div>
      </header>
      <div className="w-full justify-center border-b border-slate-300 hidden lg:flex px-4">
        <div className="max-w-[1200px] w-full flex justify-between py-2">
          <nav className="flex items-center gap-6 text-center pl-4 first:pl-0">
            <Link onClick={() => setMenu(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setMenu(false)} to="/ads-optimierung">
              Ads Optimierung
            </Link>
            <Link onClick={() => setMenu(false)} to="/news">
              News
            </Link>
            <Link onClick={() => setMenu(false)} to="/tools">
              Tools
            </Link>
            <Link onClick={() => setMenu(false)} to="/experts">
              Experts
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
