import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  text = "Im a Button!",
  variant = "primary",
  link = "/",
  icon = false,
}) {
  const location = useLocation();

  const variants = {
    primary:
      "p-2 px-6 text-white font-medium blue rounded flex items-center gap-2 cursor-pointer",
    "primary-blue":
      "p-2 px-6 text-white font-medium bg-blue-600 rounded flex items-center gap-2 cursor-pointer",
    secondary:
      "ring-2 ring-inset ring-blue-600 p-2 px-6 font-medium text-black rounded flex items-center gap-2 cursor-pointer",
    white:
      "bg-white p-2 px-6 text-black font-medium rounded flex items-center gap-2 cursor-pointer",
    "white-outline":
      "ring-2 ring-inset ring-white p-2 px-6 font-medium text-white rounded flex items-center gap-2 cursor-pointer",
    black:
      "bg-black p-2 px-6 text-white font-medium rounded flex items-center gap-2 cursor-pointer",
    underline: "underline font-medium flex items-center gap-2 cursor-pointer",
  };

  function handleClick(e) {
    if (!link.startsWith("#")) return;

    e.preventDefault();

    const id = link.replace("#", "");
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <Link to={link} onClick={handleClick} className={variants[variant]}>
      {text}
      {icon ? <ArrowUpRight className="size-5" /> : null}
    </Link>
  );
}
