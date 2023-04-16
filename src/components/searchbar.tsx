import { FaSearch } from "react-icons/fa";

export function Searchbar() {
  return (
    <form className="w-full md:w-2/3 relative">
      <input
        className="h-10 p-2 w-full outline-none rounded-lg border-gray-200 placeholder-gray-300 focus:z-10"
        placeholder="Search..."
        type="text"
      />

      <button
        type="submit"
        className="absolute inset-y-0 right-0 rounded-r-lg p-2 text-gray-600 hover:text-gray-300"
      >
        <FaSearch />
      </button>
    </form>
  );
}
