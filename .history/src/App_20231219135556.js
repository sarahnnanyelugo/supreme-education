import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/Footer/Footer";
import { Founder } from "./pages/Founder/Founder";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
