import React, { useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../Assets/next-icon.png";
import back_icon from "../../Assets/back-icon.png";
import user_1 from "../../Assets/user-1.png";
import user_2 from "../../Assets/user-2.png";
import user_3 from "../../Assets/user-3.png";
import user_4 from "../../Assets/user-4.png";

const Testimonials = () => {

//   const slider = useRef();
//   let tx = 0;

// const slideForward = ()=>{
//   if(tx > -50){
//     tx -=25;
//   }
//   slider.current.style.transform = `translateX(${tx}%)`;
// }


// const slideBackward = ()=>{
//   if(tx < 0){
//     tx +=25;
//   }
//   slider.current.style.transform = `translateX(${tx}%)`;
// }


const slider = useRef();
const [tx, setTx] = useState(0);

const slideForward = () => {
  if (tx > -75) { // -25% * (4 slides - 1) = -75%
    const newTx = tx - 25;
    setTx(newTx);
    slider.current.style.transform = `translateX(${newTx}%)`;
  }
};

const slideBackward = () => {
  if (tx < 0) {
    const newTx = tx + 25;
    setTx(newTx);
    slider.current.style.transform = `translateX(${newTx}%)`;
  }
};

  return (
    <div className="Testimonials">
{tx > -75 && (
        <img src={next_icon} alt="next" className="next-btn" onClick={slideForward} />
      )}
      {tx < 0 && (
        <img src={back_icon} alt="back" className="back-btn" onClick={slideBackward} />
      )}
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                dolore in eaque nisi! Quis, laudantium. Eligendi ratione odit
                voluptates officia?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                dolore in eaque nisi! Quis, laudantium. Eligendi ratione odit
                voluptates officia?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                dolore in eaque nisi! Quis, laudantium. Eligendi ratione odit
                voluptates officia?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                dolore in eaque nisi! Quis, laudantium. Eligendi ratione odit
                voluptates officia?
              </p>
            </div>
          </li>


        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
