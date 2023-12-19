import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/ceo-landing.png";
import FounderImg from "../../assets/images/ceo.png";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { about } from "../../TestData";
import "./who-we-are.scss";
export const WhoWeAre = () => {
  return (
    <div className="founder-div">
      <Banner
        pageTitle="Who we are"
        banner={LandingImg}
        links={about}
        mainpage="About Us"
        currentPage="OUR CEO"
      />
      <div className="flexy  col-md-10 offset-md-1">
        <div className="col-md-7 mt7" style={{ lineHeight: "35px" }}>
          <p>
            {" "}
            You are welcome to this exciting world of learners. Supreme
            Education Foundation is born from a strong partnership between our
            families, our community, and the professional educators that make us
            up.
          </p>
          <p>
            The world is fast changing and the new generation is resilient at
            keeping up. You will agree with me that globalization, the advent of
            information technology and of course the development of a
            knowledge-based economy are leading to change in an unprecedented
            rate and scale.
          </p>
          <p>
            At Supreme, we have carefully integrated the Nigeria curriculum with
            the British curriculum. Our lessons are delivered using the British
            methodology of critical thinking and problem solving. Educators at
            SEF have hereby inspired a deeper learning culture by focusing on
            children’s ability to provide solutions with acquired knowledge and
            not just memorizing facts, but doing so in the context and curiosity
            of the world children live in and making meaningful connections that
            help learning become a transformational process.
          </p>
          <br />
          <p>
            Through the years from Creche to Year 12 (senior secondary school
            3), our children experience a balanced curriculum that prepares them
            for the world at large. No wonder our alumni are everywhere in the
            world and thriving because they have been upstretched with a
            learning culture that builds on prior knowledge, hence they are
            equipped to be lifelong learners. Our facilities are constantly
            updated to accommodate our learning adventures. The children are
            motivated to learn and the educators are excited to impact
            knowledge.{" "}
          </p>
          <br />
          <p>
            {" "}
            Supreme is a purposeful and progressive educational institution. I
            am happy to be a part of the most dynamic and transformative
            Education organisation. Join us today and you will agree with me
            that our learning system is indeed SUPREME!
          </p>
        </div>
        <div className="col-md-4 offset-md-1 mt7">
          <img src={FounderImg} alt="pic" width="100%" />
          <center>
            <h5 className="mt1">
              <strong>ADEWUYI OLUBUKOLA</strong>
            </h5>
          </center>
        </div>
      </div>
      <div className="flexy col-md-10 offset-md-1 founder-div">
        <div className="col-md-6 eyfs">
          {" "}
          <img src={Img6} alt="sch-images" width="100%" className="col-md-11" />
          <div className="overlay">
            {" "}
            <h2>Who we are</h2>
            <button>Learn more</button>
          </div>
        </div>
        <div className="col-md-6 eyfs">
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
