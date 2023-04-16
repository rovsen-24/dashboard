import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { TermsAndPrivacy } from "./pages/TermsAndPrivacy";
import { Navbar } from "./components/navbar";
import { Foobar } from "./components/foobar";
import { Docs } from "./pages/Docs";

function Main() {
  return (
    <div className="sm:p-5 text-xs md:text-base">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="termsandprivacy" element={<TermsAndPrivacy />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Foobar />
    </div>
  );
}
