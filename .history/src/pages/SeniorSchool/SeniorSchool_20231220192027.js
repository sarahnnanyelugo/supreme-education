import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/high1.png";
import Img from "../../assets/images/high2.png";
import Img2 from "../../assets/images/high3.png";
import Img3 from "../../assets/images/high4.png";
import Img4 from "../../assets/images/yusuf.png";
import Dot from "../../assets/images/dot2.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const SeniorSchool = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="High School"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            We are a co-educational private school located within a residential
            estate. The school welcomed its first set of students in October
            1991. The school has thrived for more than three decades and
            celebrates continuous improvement. Supreme Schools currently enrols
            over 700 students across the primary, middle, and high schools from
            within and outside Nigeria.
          </p>
          <br />
          <p>
            {" "}
            Our academic programs are organized on a trimester schedule. Our
            students offered subjects such as
          </p>
          <div className="flexy">
            <ul className="list-unstyled col-md-3">
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Mathematics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                English
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Physics
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Chemistry
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Biology
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Economics
              </li>{" "}
            </ul>{" "}
            <ul className="list-unstyled">
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                French
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Photography
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Food & Nutrition
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Civic Education
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                Global Perspectives
              </li>{" "}
              <li>
                <img height="24px" width="24px" alt="icon" src={Dot} />
                and others
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>

      <div className="flexy col-md-10 offset-md-1">
        <div className="col-md-6">
          <p>
            {" "}
            We run a blended curriculum that is centered on both the Nigerian
            and British curriculum. Hence, our students write Cambridge
            Checkpoint and BECE external examinations in Year 9. Supreme
            students typically graduate at the end of Year 12 after sitting for
            West African Senior School Certificate Examination (WASSCE)while few
            would proceed to A level schools across the globe. IGCSE and SAT are
            optional examinations.
          </p>
        </div>
        <div className="col-md-6">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>
      <div className="flexy col-md-10 offset-md-1">
        {" "}
        <div className="col-md-6 math">
          {" "}
          <img src={Img2} width="90%" alt="pics" />
        </div>
        <div className="col-md-6">
          <h2>High Schools’ Curriculum</h2>
          <p>
            {" "}
            We run a blended curriculum that is centered on both the Nigerian
            and British curriculum. Hence, our students write Cambridge
            Checkpoint and BECE external examinations in Year 9. Supreme
            students typically graduate at the end of Year 12 after sitting for
            West African Senior School Certificate Examination (WASSCE)while few
            would proceed to A level schools across the globe. IGCSE and SAT are
            optional examinations.
          </p>
        </div>
      </div>
      <div className="col-md-8 offset-md-1 mt7">
        <p>
          In addition, as a parent at Supreme Education Foundation School, you
          are not left behind; we encourage active involvement from parents in
          their child’s learning journey and our signature events: Colour Day,
          Tea Party, and EYFS Production. Your role further keeps you grounded
          in our practices towards raising future leaders that will positively
          shape society. We keep you abreast of what’s happening in school via
          daily communication, parent-teacher conferences, and a family
          enrichment program to ensure a collaborative approach to your child’s
          education.
        </p>
        <p>
          We warmly encourage you to visit us today to experience for yourself
          the ambience around the school, the health facilities, and the quality
          of education given to all our children. Together, let’s build a strong
          foundation for your child’s success!
        </p>
        <p>
          We invite you to be a part of this transformative journey. Come, visit
          us, and let’s build the foundation for your child’s success together.
          We look forward to welcoming you into the Supreme Education Foundation
          School family, where every child’s potential is recognized,
          celebrated, and nurtured. Your child’s journey to success begins here.
        </p>
        <h3 className="mt4">Principal of EYFS</h3>
        <div className="col-md-4">
          {" "}
          <img src={Img4} width="100%" alt="pics" />
          <h6>Mrs. Olabisi Osibowale</h6>
        </div>
      </div>
    </div>
  );
};
