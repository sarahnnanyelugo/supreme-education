import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      {" "}
      <ScrollToTop />
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
