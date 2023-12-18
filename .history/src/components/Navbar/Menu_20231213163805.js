import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "../../assets/images/menu.png";

function Menu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={MenuIcon} alt="icon" className="logo" onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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
