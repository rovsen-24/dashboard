import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { TermsAndPrivacy } from "./pages/TermsAndPrivacy";
import { Nav } from "./components/navbar";
import { Foobar } from "./components/foobar";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="termsandprivacy" element={<TermsAndPrivacy />} />
    </Routes>
  );
}

export default function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Foobar />
    </div>
  );
}
