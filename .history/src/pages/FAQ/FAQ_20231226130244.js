import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/faq.png";
import { admissions } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { about } from "../../TestData";
import "./apply.scss";
import Accordion from "react-bootstrap/Accordion";

export const FAQ = () => {
  return (
    <div className="apply-div">
      <Banner
        pageTitle="FAQ"
        banner={LandingImg}
        links={admissions}
        mainpage="Admissions"
      />
      <div className=" col-md-6 offset-md-1 mt  inner-page-content">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Does Supreme provide lunch for students?
            </Accordion.Header>
            <Accordion.Body>
              <p>Yes, but lunch is optional for the Junior School pupils.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How are parents made aware of their children’s progress at
              Supreme?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Teachers communicate with parents daily at drop-off and pick-up
                times. We also schedule regular parent’s-teacher’s conferences
                during which we review, discuss children’s progresses. And
                develop Individual Educational Plan as the need arise.
                Communication with parents is an important part of our program.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Does Supreme run creche services?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Yes. Supreme’s creche services provides early drop-off and
                late-pick up. Our babies are well taken care of by Certified
                Nannies and Resident Medical Practitioners.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Who are the Teachers?</Accordion.Header>
            <Accordion.Body>
              <p>Certified, Experienced and Committed professionals.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What curriculum do you offer?</Accordion.Header>
            <Accordion.Body>
              <p>British and Nigerian curriculum.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What is the enrollment process?</Accordion.Header>
            <Accordion.Body>
              <p>
                Parents purchase and fill out an enrollment form after touring
                the school and meeting with the admissions officer, who will
                answer questions and discuss availability of enrollment.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              What is Supreme’s educational philosophy?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                To attain the highest standards of excellence in academics and
                total development of our students.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What makes your school unique?</Accordion.Header>
            <Accordion.Body>
              <p>Global mindedness and tradition of excellence.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="flexy col-md-10 offset-md-1 founder-div  inner-page-content">
        <div className="col-md-6 eyfs">
          {" "}
          <img src={Img6} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Who we are</h2>
            <button>Learn more</button>
          </div>
        </div>
        <div className="col-md-6 eyfs mvt">
          {" "}
          <img src={Img7} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Take a virtual Tour</h2>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
