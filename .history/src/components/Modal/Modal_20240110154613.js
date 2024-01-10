import React from "react";

export const Modal = () => {
  useEffect(() => {
    // This code will run after the component has mounted
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
            <div className="modal-body">{/* Your modal content */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
