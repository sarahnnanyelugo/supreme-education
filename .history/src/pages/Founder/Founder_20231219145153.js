import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/banner.png";
import FounderImg from "../../assets/images/founder.png";
import { about } from "../../TestData";
export const Founder = () => {
  return (
    <div className="founder-div">
      <Banner banner={LandingImg} links={about} />
      <div className="flexy  col-md-10 offset-md-1">
        <div className="col-md-8 mt5">
          <p>
            {" "}
            Supreme Education Foundation School started more as a movement than
            a traditional school. After twenty-five years of service with the
            West African Examinations Council, I yearned to provide a platform
            for children to go through secondary education with joy, ease,
            eagerness, and achieve great success. It was important to me that
            they were also cultured, have respect and love for themselves, their
            country and the fear of God.{" "}
          </p>
          <p>
            {" "}
            On October 17, 1991, we opened our doors to thirteen (13) students –
            ten in JSS 1, two in JSS 2, and one in SS1. We started on our
            temporary site at 6, Celestial Church Street, Agidingbi, Ikeja. By
            the end of the first year, our enrolment had gone up to thirty (30)
            students and twenty-three (23) teachers. Our first set of students
            graduated in 1993. We moved to our permanent site at Emmanuel Keshi
            Street, Magodo GRA, Phase 2 in October 2001, with over two hundred
            (200) students. The school currently maintains a population of about
            eight hundred (800) students.
          </p>
          <p>
            Our Junior School was established on our permanent site in 2007
            because we realized that a supreme foundation needed to get started
            from early childhood. It has been over two decades of continuous
            improvement and refinement towards our vision of attaining the
            highest standards of excellence in academics and total development
            of our students. Our strength has been in the synergy of our school
            community – parents, students, staff, towards this common goal. We
            hold the fear of God as our most important core value, and we teach
            this to our students.{" "}
          </p>
          <p>
            We have seen our students attain great feats in academics, sports,
            leadership, arts, and in their personal development. Our greatest
            sense of accomplishment has been in seeing our students flourish in
            their lives and careers after school. They have taken their places
            in contributing to change in Nigeria, and in every place they are
            located all over the world. We have a commitment to keep innovating
            to ensure we provide a 21st century education that prepares our
            students for their future. We welcome you to join this vibrant
            community.
          </p>

          <p></p>
          <p></p>
        </div>
        <div className="col-md-4">
          <img src={FounderImg} alt="pic" width="100%" />
        </div>
      </div>
    </div>
  );
};
