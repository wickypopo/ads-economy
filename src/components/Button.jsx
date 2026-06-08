import { Link } from "react-router-dom";

export default function Button({
  text = "Im a Button!",
  variant = "primary",
  link = "/",
}) {
  const variants = {
    primary: "p-2 px-6 text-white font-medium blue",
    secondary:
      "ring-2 ring-inset ring-blue-600 p-2 px-6 font-medium text-black",
    white: "bg-white p-2 px-6 text-black font-medium",
    "white-outline":
      "ring-2 ring-inset ring-white p-2 px-6 font-medium text-white",
    black: "bg-black p-2 px-6 text-white font-medium",
  };

  return (
    <Link to={link}>
      <button className={variants[variant]}>{text}</button>
    </Link>
  );
}
