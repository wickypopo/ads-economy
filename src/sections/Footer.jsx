import { ChevronDown } from "lucide-react";
import { useLocale } from "../utils/useLocale";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { locale, setLocale, t } = useLocale();
  const [modal, setModal] = useState(false);

  return (
    <footer className="flex w-full justify-between p-4 bg-slate-950 h-140"></footer>
  );
}
