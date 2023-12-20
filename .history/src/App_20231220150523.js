import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/Footer/Footer";
import { Founder } from "./pages/Founder/Founder";
import { CEO } from "./pages/CEO/CEO";
import { WhoWeAre } from "./pages/WhoWeAre/WhoWeAre.js";
import { Tour } from "./pages/Tour/Tour";
import { Contact } from "./pages/Contact/Contact";
import { Apply } from "./pages/Apply/Apply";
import { Enquiry } from "./pages/Enquiry/Enquiry";
import { FAQ } from "./pages/FAQ/FAQ";
import { EYFS } from "./pages/EYFS/EYFS";
function App() {
  return (
    <>
      {" "}
      <ScrollToTop />
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/our-ceo" element={<CEO />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/eyfs" element={<EYFS />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
