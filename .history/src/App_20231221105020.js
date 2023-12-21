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
import { JuniorSchool } from "./pages/JuniorSchool/JuniorSchool";
import { SeniorSchool } from "./pages/SeniorSchool/SeniorSchool";
import { TeachersCollege } from "./pages/TeachersCollege/TeachersCollege";
import { SchoolCurriculum } from "./pages/SchoolCurriculum/SchoolCurriculum";
import { AcademicCalendar } from "./pages/AcademicCalendar/AcademicCalendar";
import { BoardingSchool } from "./pages/BoardingSchool/BoardingSchool";
import { Activities } from "./pages/Activities/Activities";
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
        <Route path="/junior-school" element={<JuniorSchool />} />
        <Route path="/high-school" element={<SeniorSchool />} />
        <Route path="/teachers-college" element={<TeachersCollege />} />
        <Route path="/school-curriculum" element={<SchoolCurriculum />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/boarding-school" element={<BoardingSchool />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
