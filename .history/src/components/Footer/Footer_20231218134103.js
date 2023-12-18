import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="flexy">
        <div className="col-md-4">
          {" "}
          <center>
            <Link to={"/"}>
              <img src={Logo} alt="icon" className="logo" />
            </Link>
          </center>
        </div>
      </div>
    </footer>
  );
}
