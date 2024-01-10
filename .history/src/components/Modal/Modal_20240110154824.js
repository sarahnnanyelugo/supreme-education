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
            <div className="modal-body">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
