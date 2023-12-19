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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
