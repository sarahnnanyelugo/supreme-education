import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="flexy">
        <div className="col-md-4 flexy">
          {" "}
          <div className="col-md-6">
            {" "}
            <center>
              <Link to={"/"}>
                <img src={Logo} alt="icon" className="logo" />
              </Link>
            </center>
          </div>
          <div className="col-md-6">
            <p>
              {" "}
              23, Emmanuel Keshi Road, Magodo G.R.A. Phase 2, Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
