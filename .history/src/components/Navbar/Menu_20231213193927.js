import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "../../assets/images/menu.png";
import MenuImg1 from "../../assets/images/menu-img1.png";
import MenuImg2 from "../../assets/images/menu-img2.png";
import MenuImg3 from "../../assets/images/menu-img3.png";

function Menu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu-body">
            <div className="col-md-4 menu-actions">
              <div className="img-holder1">
                <center>
                  {" "}
                  <button>Enquire</button>
                </center>
              </div>
              <div className="img-holder2">
                <center>
                  {" "}
                  <button>Apply</button>
                </center>
              </div>
              <div className="img-holder3">
                <center>
                  {" "}
                  <button>Visit</button>
                </center>
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
