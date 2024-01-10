import React from "react";

export const Modal = () => {
  return (
    <div>
      {/* Modal content goes here */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal body goes here */}
            <div className="modal-body">{/* Your modal content */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
