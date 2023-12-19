import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "../../assets/images/menu.png";
import MenuImg1 from "../../assets/images/menu-img1.png";
import MenuImg2 from "../../assets/images/menu-img2.png";
import MenuImg3 from "../../assets/images/menu-img3.png";
import { NavLink } from "react-router-dom";

function Menu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeTab, setActiveTab] = useState("About Supreme"); // Initial active tab
  const handleTabHover = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <>
      <img
        src={MenuIcon}
        alt="icon"
        className=""
        onClick={handleShow}
        height="28px"
      />

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offset-md-9 flexy">
            {" "}
            <button className="app-btn">Portal</button>
            {/* <p>Close</p> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu-body flexy">
            <div className="col-md-4 menu-actions">
              <div className="img-holder">
                <img src={MenuImg1} alt="students pics" />
                <div className="overlay">
                  {" "}
                  <button>Enquire</button>
                </div>
              </div>
              <div className="img-holder">
                <img src={MenuImg2} alt="students pics" />
                <div className="overlay">
                  {" "}
                  <button>Apply</button>
                </div>
              </div>
              <div className="img-holder">
                <img src={MenuImg3} alt="students pics" />
                <div className="overlay">
                  {" "}
                  <button>Visit</button>
                </div>
              </div>
            </div>
            <div className="col-md-8  nav-tab ">
              <div className="tab flexy flexyM col-md-12">
                <div className="col-md-6">
                  {" "}
                  {[
                    "About Supreme",
                    "Admissions",
                    "Academics",
                    "Student Life",
                    "Media",
                  ].map((city) => (
                    <button
                      key={city}
                      className={`tablinks ${
                        activeTab === city ? "active" : ""
                      }`}
                      onMouseEnter={() => handleTabHover(city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                <div className="col-md-6">
                  <div
                    id="About Supreme"
                    className={`tabcontent ${
                      activeTab === "About Supreme" ? "active" : ""
                    }`}
                  >
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to={"/founder"} onClick={handleClose}>
                          Our Founder
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to={"/our-ceo"}>Our CEO</NavLink>
                      </li>

                      <li>
                        <NavLink to={"/who-we-are"}>Who we are</NavLink>
                      </li>

                      <li>
                        <NavLink to={"/tour"}>Virtual Tour</NavLink>
                      </li>

                      <li>
                        <NavLink to={"/contact"}>Contact us</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="Admissions"
                    className={`tabcontent ${
                      activeTab === "Admissions" ? "active" : ""
                    }`}
                  >
                    <h3>Paris</h3>
                    <p>Paris is the capital of France.</p>
                  </div>
                  <div
                    id="Academics"
                    className={`tabcontent ${
                      activeTab === "Academics" ? "active" : ""
                    }`}
                  >
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                  </div>
                  <div
                    id="Student Life"
                    className={`tabcontent ${
                      activeTab === "Student Life" ? "active" : ""
                    }`}
                  >
                    <h3>Life</h3>
                    <p>Tokyo is the capital of Japan.</p>
                  </div>
                  <div
                    id="Media"
                    className={`tabcontent ${
                      activeTab === "Media" ? "active" : ""
                    }`}
                  >
                    <h3>Media</h3>
                    <p>Tokyo is the capital of Japan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function MenuItems() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Menu key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default MenuItems;
