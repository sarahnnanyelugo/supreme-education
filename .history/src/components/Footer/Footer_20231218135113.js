import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Img1 from "../../assets/images/location.svg";
import Img2 from "../../assets/images/call.svg";
import Img3 from "../../assets/images/sms.svg";

export default function Footer() {
  return (
    <footer>
      <div className="flexy offset-md-1">
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
            <ul className="list-unstyled">
              <li>
                {" "}
                <img src={Img1} alt="icon" className="logo" />
                +(234) 8182984015
              </li>
              <li>
                {" "}
                <img src={Img2} alt="icon" className="logo" />
                +(234) 8112390403
              </li>
              <li>
                {" "}
                <img src={Img3} alt="icon" className="logo" />
                +(234) 8182983143
              </li>
            </ul>
            <p>info@supremeeducation.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}