import React from "react";
import { Banner } from "../../components/Banner/Banner";
import LandingImg from "../../assets/images/junior-sch.png";
import Img from "../../assets/images/speech.png";
import Img2 from "../../assets/images/mental.png";
import Img3 from "../../assets/images/math.png";
import Img4 from "../../assets/images/kay.png";
import { academicss } from "../../TestData";
import { Link } from "react-router-dom";
import Img6 from "../../assets/images/play.png";
import Img7 from "../../assets/images/tour.png";
import { academics } from "../../TestData";
import "./eyfs.scss";
export const JuniorSchool = () => {
  return (
    <div className="eyfs-div">
      <Banner
        pageTitle="Junior School"
        banner={LandingImg}
        links={academics}
        mainpage="Academics"
      />
      <div className=" col-md-10 offset-md-1 mt flexy">
        <div className=" col-md-8">
          <p>
            Supreme Education School is a Sunshine school where everyone is
            valued and included. Shaping and inspiring children for the future
            has always been a critical part of the Supreme Education Foundation
            School vision, and our curriculum brings it to life. We are here to
            care for, educate and encourage your child to do more and be more
            always.
          </p>
          <br />
          <p>
            Our children are secured right from the start of life as we run the
            full Early Years Foundation Stage curriculum. No child is left
            behind at Supreme as all the learning goals in the seven (7) areas
            of the children’s development matters are carefully monitored by
            qualified early years practitioners.
          </p>

          <p>
            After-school program at Supreme caters for all children. We offer a
            conducive environment for them to relax, eat, do homework,
            extracurricular activities like music and movement, painting, and
            swimming. We provide critical pathways into key stage 1 that will
            best suit the needs and skills of each child.
          </p>
          <br />
          <p>
            Inclusion is an integral part of the school. Learning is
            differentiated to ensure all the children are achieving. Children
            with special education needs are well provided for with an
            individual education plan to guarantee progression.
          </p>
        </div>
        <div className="col-md-4">
          {" "}
          <img src={Img} width="100%" alt="pics" />
        </div>
      </div>

      <div className="flexy col-md-10 offset-md-1">
        <div className="col-md-6">
          <p>
            At the junior school, we run a broad and balanced curriculum that
            caters for all students. To bridge the gap in the Nigerian
            Curriculum, there is an infusion of the British curriculum. We
            follow the English National Curriculum for literacy, numeracy and
            science. We apply 21st Century researches and intervention methods
            through visual, auditory and kinesthetic experiences in everyday
            life, which help to enhance students’ strengths and building blocks
            that will afford them a functional and independent life.
          </p>
          {/* <img src={Img2} width="96%" alt="pics" /> */}
        </div>
        <div className="col-md-6">
          {" "}
          <img src={Img3} width="96%" alt="pics" />
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
