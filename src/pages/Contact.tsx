import { FaMapMarkerAlt, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="min-h-screen p-10 gap-x-20 bg-gray-800/50 grid grid-cols-2 center">
      <div className="max-w-md w-full space-y-8">
        <h1 className="center font-extrabold">Contact Us</h1>
        <form className="mt-8 space-y-6">
          <div>
            <input
              type="text"
              required
              className="outline-none w-full p-2 rounded-md text-black focus:bg-gray-200/90 bg-gray-200"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              required
              className="outline-none w-full p-2 rounded-md text-black focus:bg-gray-200/90 bg-gray-200"
              placeholder="E-mail"
            />
          </div>
          <div>
            <textarea
              rows={4}
              required
              className="outline-none w-full p-2 rounded-md text-black focus:bg-gray-200/90 bg-gray-200"
              placeholder="Message"
            />
          </div>
          <div>
            <button
              type="submit"
              className="h-10 w-full px-6 shrink-0 rounded-md border border-blue-800 bg-blue-800 text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="col gap-8 center">
        <div className="grid gap-2 h-full grid-cols-3 center">
          <Link
            to=""
            className="relative h-full flex center rounded-md p-5 shadow-xl bg-gray-700/50 "
          >
            <div>
              <FaMapMarkerAlt className="h-6 w-6 mx-auto mb-3" />
              <h4>Our office</h4>
              <text className="text-xs">W Fantz Ave,Fresno, CA 93706, USA</text>
            </div>
          </Link>
          <Link
            to=""
            className="relative h-full flex center rounded-md p-5 shadow-xl bg-gray-700/50 "
          >
            <div>
              <FaMailBulk className="h-6 w-6 mx-auto mb-3" />
              <h4>E-mail</h4>
              <text className="text-xs">example@gmail.com</text>
            </div>
          </Link>
          <Link
            to=""
            className="relative h-full flex center rounded-md p-5 shadow-xl bg-gray-700/50 "
          >
            <div>
              <FaPhone className="h-6 w-6 mx-auto mb-3" />
              <h4>Phone number</h4>
              <text className="text-xs">+1 344-654-209</text>
            </div>
          </Link>
        </div>
        <iframe
          className="rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10711.057587073752!2d58.25467803767805!3d37.98097700309282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1682100828837!5m2!1sru!2s"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
