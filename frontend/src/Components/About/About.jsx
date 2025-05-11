import React from "react";
import "./About.css";
import about_img from "../../Assets/about.png";
import play_icon from "../../Assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{
          setPlayState((true))
        }} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          As we celebrate our rich history, [College Name] continues to look
          forward with optimism and ambition. Our commitment to academic
          excellence, research innovation, and community service remains
          steadfast.
        </p>

        <p>
          Throughout the decades, Edusity experienced tremendous growth. The
          1950s and 1960s saw the construction of new academic buildings,
          dormitories, and recreational facilities. This period also marked the
          introduction of various new programs and departments, catering to the
          evolving educational needs of society.
        </p>

        <p>
          The turn of the millennium brought about numerous milestones for
          [College Name]. In [Year], the college achieved university status,
          reflecting its expanded academic offerings and research capabilities.
        </p>
      </div>
    </div>
  );
};

export default About;
