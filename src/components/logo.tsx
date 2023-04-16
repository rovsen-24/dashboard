import { Link } from "react-router-dom";
import { FaDyalog } from "react-icons/fa";

export function Logo() {
  return (
    <Link to="/" className="block text-4xl text-white">
      <FaDyalog />
    </Link>
  );
}
