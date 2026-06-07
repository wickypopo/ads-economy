import { createContext, useContext, useState } from "react";
import { homeLocale } from "../data/homeLocale";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("de");

  const t = homeLocale[locale] ?? homeLocale.de;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
