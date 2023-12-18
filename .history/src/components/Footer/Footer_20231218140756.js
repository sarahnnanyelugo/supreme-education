import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Img1 from "../../assets/images/location.svg";
import Img2 from "../../assets/images/call.svg";
import Img3 from "../../assets/images/sms.svg";
import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="flexy ">
        <div className="col-md-5 flexy ">
          {" "}
          <div className="col-md-6">
            {" "}
            <center>
              <Link to={"/"}>
                <img src={Logo} alt="icon" className="" />
              </Link>
            </center>
          </div>
          <div className="col-md-6">
            <p className="flexy flexyM">
              {" "}
              <img src={Img1} alt="icon" className="" /> 23, Emmanuel Keshi
              Road, Magodo G.R.A. Phase 2, Lagos, Nigeria.
            </p>
            <div className=" flexy flexyM mt5">
              <img src={Img2} alt="icon" className="" />
              <ul className="list-unstyled">
                {" "}
                <li> +(234) 8182984015</li>
                <li> +(234) 8112390403</li>
                <li> +(234) 8182983143</li>
              </ul>
            </div>
            <p className="flexy flexyM mt4">
              {" "}
              <img src={Img3} alt="icon" className="" />
              info@supremeeducation.com
            </p>
          </div>
        </div>
        <div className="col-md-7 footer-actions">
          <div className="col-md-7 offset-md-5 flexy flexyM">
            <Link to={""}>
              {" "}
              <button>Enquire</button>
            </Link>{" "}
            <Link to={""}>
              {" "}
              <button>Apply</button>
            </Link>{" "}
            <Link to={""}>
              {" "}
              <button>Visit</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
