import { FaMapMarkerAlt, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const items: {
  title: string;
  text: string;
  path: string;
  icon: React.ReactElement;
}[] = [
  {
    title: "Our office",
    text: "Fresno, USA",
    path: "",
    icon: <FaMapMarkerAlt className="h-5 w-5 mx-auto mb-1" />,
  },
  {
    title: "E-mail",
    text: "example@gmail.com",
    path: "",
    icon: <FaMailBulk className="h-5 w-5 mx-auto mb-1" />,
  },
  {
    title: "Phone number",
    text: "+1 344-654-209",
    path: "",
    icon: <FaPhone className="h-5 w-5 mx-auto mb-1" />,
  },
];

const listCards = items.map((item, index) => {
  return (
    <Link
      key={index}
      to={item.path}
      className="h-full flex center rounded-md py-0 px-8 shadow-xl bg-gray-700/50 "
    >
      <div>
        {item.icon}
        <h5>{item.title}</h5>
        <h6>{item.text}</h6>
      </div>
    </Link>
  );
});

const items2: { title: string; type: string }[] = [
  { title: "Name", type: "text" },
  { title: "E-mail", type: "email" },
];

const listInputs = items2.map((item, index) => {
  return (
    <div key={index}>
      <input
        type={item.type}
        required
        className="outline-none w-full p-2 rounded-md text-black focus:bg-gray-200/90 bg-gray-200"
        placeholder={item.title}
      />
    </div>
  );
});

function ContactForm() {
  return (
    <>
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
    </>
  );
}

export function Contact() {
  return (
    <div className="min-h-screen p-10 bg-gray-800/50 col lg:flex-row gap-14 center">
      <div className="max-w-md w-full">
        <h1 className="center font-extrabold">Contact Us</h1>
        <form className="mt-8 space-y-6">
          {listInputs}
          <ContactForm />
        </form>
      </div>
      <div className="col gap-4">
        <div className="flex h-28 gap-2 center">{listCards}</div>
        <iframe
          className="rounded-md w-full h-96"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10711.057587073752!2d58.25467803767805!3d37.98097700309282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1682100828837!5m2!1sru!2s"
        ></iframe>
      </div>
    </div>
  );
}
