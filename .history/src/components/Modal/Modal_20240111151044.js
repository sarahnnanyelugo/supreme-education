import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Img from "../../assets/images/modal-pic.png";
import Img2 from "../../assets/images/modal-close.png";
import "./modal.scss";
export const PageModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="">
          {" "}
          <img
            src={Img2}
            alt="icon"
            width="40px"
            onClick={handleClose}
            className="offset-md-11 closed-mod"
          />
        </div>
        <Modal.Body>
          {" "}
          <img src={Img} alt="icon" width="80%" />
        </Modal.Body>
       
      </Modal>
    </>
  );
};
