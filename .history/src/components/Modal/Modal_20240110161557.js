import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Img from "../../assets/images/modal-pic.png";
import Img2 from "../../assets/images/modal-close.png";
import "./modal.scss";
export const PageModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose} className="col-md-7">
        <img
          src={Img2}
          alt="icon"
          width="40px"
          onClick={handleClose}
          className="offset-md-11"
        />
        <Modal.Body>
          {" "}
          <img src={Img} alt="icon" width="100%" />
        </Modal.Body>
        {/* <Modal.Footer>
          <button variant="secondary" >
            Close
          </button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
