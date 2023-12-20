import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/apply.png";
import { admissions } from "../../TestData";
import { LinkRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./apply.scss";
export const Apply = () => {
  return (
    <div className="apply-div">
      <Banner
        pageTitle="How to Apply"
        banner={LandingImg}
        links={admissions}
        mainpage="Admissions"
      />
      <div className="flexy col-md-10 offset-md-1">
        <div className="col-md-8">
          <p>
            Admission is strictly by merit, without bias of sex, religion,
            ethnic or cultural background. Entry age into our crèche is from 3
            months, Play Group is from 18 months, Nursery is from 2 years, Year
            1 is from 5 years and Year 7 at least 10 years old as at December
            31st of the admission year.
          </p>
          <h2>Steps on how to apply</h2>
          <h6 className="mt4">Step 1: Make payment online</h6>
          <ul className="list-unstyled">
            <li>Early Years Foundation Stage (EYFS) : N10,000</li>
            <li>Junior School (Primary Section): N15, 000 </li>
            <li>High School (Secondary Section): N20, 000</li>
          </ul>
          <h6>
            Step 2: The following hard copies should be submitted to Admissions
            office or scanned to admissions
            <br />
            <Link to={"#"}>@supremeeducation.com</Link>
          </h6>
          <ul className="list-unstyled">
            <li>2 recent Passport Photographs</li>
            <li>Birth certificate </li>
            <li>Immunization records</li>
            <li>Last result from present school.</li>
          </ul>
          <h6>
            Step 3: An assessment for Junior School and a highly competitive
            entrance examination for High School is taken.
          </h6>
          <h6>
            Step 4: An interview is conducted for successful candidates and
            their parents.
          </h6>
          <h6>
            Step 5: A letter of offer of admission is issued and acceptance of
            offer communicated through the payment of acceptance fees.
          </h6>
          <h6>
            Step 6: Evidence of payment should be brought to the Accounts
            department or scanned and mailed to{" "}
            <Link to={""} style={{ color: "#d33" }}>
              admissions@supremeeducation.com{""}
            </Link>
            or send to <Link>WhatsApp</Link>
          </h6>
          <div className="info-corner mt5">
            <p>
              Year 9 and Year 12 students are strongly advised to be in the
              hostel because of early morning and evening extra classes.
            </p>
          </div>
          <div className="info-corner2 mt5">
            <p>
              You can Also make payment online <Link>HERE</Link>
            </p>
            <ol>
              <li>Download Past Questions</li>
              <li>
                {" "}
                Complete Online form and submit.{" "}
                <Link to={""}>(Click here for online admission form)</Link>
              </li>
            </ol>
          </div>
          <div className="info-corner3 mt5">
            <p>
              Requests for transfer to Years 8, 9, 10, 11, will be at the
              discretion of Management after consideration of transcripts and
              letters of reference from the applicant’s previous school. Further
              enquiries can be made at the school.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-div4">
            <h4>Supreme Exam Dates</h4>
            <ul>
              <li>
                Scholarship Entrance Examination into Year 7 (Saturday 9th
                March, 2024)
              </li>
              <li>
                Supplementary Entrance Examination into Year 7 (Saturday 11th
                May, 2024)
              </li>
              <li>Transfer Examination to other Classes (July, 2024)</li>
            </ul>
          </div>{" "}
          <div className="info-div4">
            <h4>Supreme Exam Dates</h4>
            <ul>
              <li>
                Scholarship Entrance Examination into Year 7 (Saturday 9th
                March, 2024)
              </li>
              <li>
                Supplementary Entrance Examination into Year 7 (Saturday 11th
                May, 2024)
              </li>
              <li>Transfer Examination to other Classes (July, 2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
