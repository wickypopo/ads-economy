import { Link } from "react-router-dom";

export default function Button({
  text = "Im a Button!",
  variant = "primary",
  link = "/",
}) {
  const variants = {
    primary: "p-2 px-6 text-white font-medium blue rounded",
    "primary-blue": "p-2 px-6 text-white font-medium bg-blue-600 rounded",
    secondary:
      "ring-2 ring-inset ring-blue-600 p-2 px-6 font-medium text-black rounded",
    white: "bg-white p-2 px-6 text-black font-medium rounded",
    "white-outline":
      "ring-2 ring-inset ring-white p-2 px-6 font-medium text-white rounded",
    black: "bg-black p-2 px-6 text-white font-medium rounded",
    underline: "underline font-medium",
  };

  return (
    <Link to={link}>
      <button className={variants[variant]}>{text}</button>
    </Link>
  );
}
