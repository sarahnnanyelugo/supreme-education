import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Img1 from "../../assets/images/location.svg";
import Img2 from "../../assets/images/call.svg";
import Img3 from "../../assets/images/sms.svg";
import Img4 from "../../assets/images/arrow.svg";
import Img5 from "../../assets/images/send.svg";
import Img6 from "../../assets/images/private.png";
import Img7 from "../../assets/images/int.png";
import Img8 from "../../assets/images/oracle.png";
import Img9 from "../../assets/images/aisen.png";
import Img10 from "../../assets/images/british.png";
import Img11 from "../../assets/images/educare.png";
import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="flexy footer-body">
        <div className="col-md-5 flexy ">
          {" "}
          <div className="col-md-6 ">
            {" "}
            <center>
              <Link to={"/"}>
                <img src={Logo} alt="icon" className="col-4 col-md-8" />
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
          <div className="col-md-8 offset-md-4 flexy flexyM">
            <Link to={""}>
              {" "}
              <button>
                Enquire <img src={Img4} alt="icon" className="" />
              </button>
            </Link>{" "}
            <Link to={""}>
              {" "}
              <button className="">
                Apply <img src={Img4} alt="icon" className="" />
              </button>
            </Link>{" "}
            <Link to={""}>
              {" "}
              <button>
                Visit <img src={Img4} alt="icon" className="" />
              </button>
            </Link>
          </div>
          <div className="offset-md-6">
            <h6>Sign up to our newsletter to get updated</h6>
            <div className="flexy flexyM">
              {" "}
              <input placeholder="Enter your email address" />
              <button className="send-btn">
                {" "}
                <img src={Img5} alt="icon" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="offset-md-1 col-md-10 flexy partners flexyM">
        {" "}
        <img
          src={Img6}
          alt="icon"
          className="icon1"
          width="82px"
          height="82px"
        />
        <img
          src={Img7}
          alt="icon"
          className="icon2"
          width="139px"
          height="49px"
        />
        <img
          src={Img8}
          alt="icon"
          className="icon3"
          width="194px"
          height="92px"
        />
        <img
          src={Img9}
          alt="icon"
          className="icon4"
          width="82px"
          height="106px"
        />
        <img
          src={Img10}
          alt="icon"
          className="icon5"
          width="103px"
          height="103px"
        />
      </div>
      <div className="credits flexy">
        <div className="col-md-3 offset-md-1">
          <p>© 2023 SEF Schools. All Rights reserved.</p>
        </div>
        <div className="col-md-4 flexy flexyM">
          <Link to={""} className="col-md-3">
            Privacy Policy
          </Link>
          <Link to={""} className="col-md-3 credit-links">
            Sitemap
          </Link>

          <Link to={""} className="col-md-3">
            Careers
          </Link>
          <Link to={""} className="col-md-3">
            Contact us
          </Link>
        </div>
        <div className="offset-md-2 flexy flexyM mvt">
          <p style={{ marginTop: "10px", marginRight: "5px" }}>Powered by</p>{" "}
          <img
            src={Img11}
            alt="icon"
            className=""
            width="114px"
            height="45px"
          />
        </div>
      </div>
    </footer>
  );
}
