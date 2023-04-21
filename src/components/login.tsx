import { useState } from "react";
import { Link } from "react-router-dom";

const items: { title: string; type: string }[] = [
  { title: "Username", type: "text" },
  // { title: "E-mail", type: "email" },
  { title: "Password", type: "password" },
  // { title: "Confirm Password", type: "password" },
];

const listItems = items.map((item, index) => {
  return (
    <div key={index} className="col-span-6">
      <label className="block text-sm">{item.title}</label>
      <input
        required
        type={item.type}
        className="sm:w-3/4 outline-none w-full py-1.5 px-2 rounded-md text-black focus:bg-gray-200/90 bg-gray-200 text-sm shadow-sm"
      />
    </div>
  );
});

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function ModalFooter() {
  return (
    <>
      {/* <div className="col-span-6">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            required
            type="checkbox"
            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
          />

          <span className="text-sm">
            I have read and agree with
            <Link to="/privacy" className="underline ml-1">
              terms and privacy policy.
            </Link>
          </span>
        </label>
      </div> */}
      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button className="inline-block shrink-0 rounded-md border border-blue-800 bg-blue-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
          Log in
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Isn't have an account yet?
          <button className="text-gray-700 underline">
            Sign up
          </button>
        </p>
      </div>
    </>
  );
}

function Modal({ showModal, onClose }: ModalProps) {
  return (
    <>
      {showModal && (
        <main
          onClick={onClose}
          className="bg-black/80 flex fixed inset-y-0 inset-x-0 center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="py-2 px-4 bg-gray-900/95 rounded-lg"
          >
            <span className="cursor-pointer float-right" onClick={onClose}>
              &times;
            </span>
            <h1 className="font-bold">Welcome to Dashtop</h1>
            <form action="/" className="mt-8 grid grid-cols-6 gap-6">
              {listItems}
              <ModalFooter />
            </form>
          </div>
        </main>
      )}
    </>
  );
}

export function Login() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => handleClick()}
        className="h-10 px-6 shrink-0 rounded-md border border-blue-800 bg-blue-800 text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
      >
        Login
      </button>
      <Modal showModal={showModal} onClose={handleClose} />
    </div>
  );
}
