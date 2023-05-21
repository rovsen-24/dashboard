import { Link } from "react-router-dom";

const items: { path: string; title: string }[] = [
  {
    path: "/docs",
    title: "Docs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export const links = items.map((item, index) => {
  return (
    <Link key={index} to={item.path}>
      {item.title}
    </Link>
  );
});
