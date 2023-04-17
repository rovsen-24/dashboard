import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Logo } from "./logo";
import { listItems } from "./listItems";

const icons: { path: string; title: React.ReactElement }[] = [
  { path: "", title: <FaTwitter /> },
  { path: "", title: <FaGithub /> },
  { path: "", title: <FaFacebook /> },
  { path: "", title: <FaInstagram /> },
];

const listIcons = icons.map((icon, index) => {
  return (
    <Link
      key={index}
      to={icon.path}
      className="text-gray-700 transition hover:text-gray-300/90"
    >
      {icon.title}
    </Link>
  );
});

export function Foobar() {
  return (
    <footer className="bg-gray-900/90">
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <Logo />
        </div>
        <p className="mx-auto mt-2 max-w-md text-sm text-center leading-relaxed text-gray-500">
          Dashboards are one of the most useful data visualization tools. Learn
          more about them and how they can help you understand important data.
        </p>

        <nav aria-label="Footer Nav" className="mt-4">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {listItems}
          </ul>
        </nav>

        <ul className="mt-6 flex justify-center text-xl gap-6 md:gap-8">
          {listIcons}
        </ul>
        <div className="mt-6 border-t border-gray-100">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
              <Link
                to="/termsandprivacy"
                className="inline-block text-teal-600 underline transition hover:text-gray-300/90"
              >
                Terms of Use & Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2023 Dashtop
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
