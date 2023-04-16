import { Link } from "react-router-dom";

export function Login() {
  return (
    <Link
      to="/login"
      className="hidden md:block rounded-md cursor-pointer bg-teal-700 px-5 text-gray-200 py-2 font-medium transition hover:text-white hover:bg-teal-800"
    >
      Login
    </Link>
  );
}
