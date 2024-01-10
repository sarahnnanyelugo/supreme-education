import React, { useEffect } from "react";

export const Modal = () => {
  useEffect(() => {
    // This code will run after the component has mounted
    // eslint-disable-next-line no-undef
    $("#myModal").modal("show");

    // If you are using Bootstrap, make sure you have included its JavaScript library in your project
    // For example, you can add this line in your HTML file:
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  }, []); // Th
  return (
    <>
      <vutton variant="primary" onClick={handleShow}>
        Launch demo modal
      </vutton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
