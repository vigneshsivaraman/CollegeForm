import React from "react";
import "./Hero.css";
import dark_arrow from "../../Assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          <q>Educational inequality</q> remains a significant issue, with disparities
          in access to quality education often linked to socioeconomic status,
          race, and geographic location. Addressing these inequalities requires
          a multifaceted approach, including policy reforms, increased funding
          for underserved schools, and targeted support programs for
          disadvantaged students.
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  );
};

export default Hero;
