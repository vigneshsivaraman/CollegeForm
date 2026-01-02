import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Testimonials.css';
import next_icon from '../../Assets/next-icon.png';
import back_icon from '../../Assets/back-icon.png';
import user_1 from '../../Assets/user-1.png';
import user_2 from '../../Assets/user-2.png';
import user_3 from '../../Assets/user-3.png';
import user_4 from '../../Assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, img: user_1, name: 'William Jackson', company: 'Edusity, USA' },
    { id: 2, img: user_2, name: 'William Jackson', company: 'Edusity, USA' },
    { id: 3, img: user_3, name: 'William Jackson', company: 'Edusity, USA' },
    { id: 4, img: user_4, name: 'William Jackson', company: 'Edusity, USA' },
  ];

  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  const totalSlides = slides.length;
  const maxIndex = totalSlides - visibleSlides;
  const slideWidthPercent = 100 / visibleSlides;



  
  const updateTransform = useCallback(
    (idx, animate = true) => {
      const sliderEl = slider.current;
      if (!sliderEl) return;

      sliderEl.style.transition = animate
        ? 'transform 0.5s ease-in-out'
        : 'none';
      sliderEl.style.transform = `translateX(-${idx * slideWidthPercent}%)`;
    },
    [slideWidthPercent],
  );

  const slideForward = () => {
    if (isTransitioning || index >= maxIndex) return;
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const slideBackward = () => {
    if (isTransitioning || index <= 0) return;
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    updateTransform(index);

    const sliderEl = slider.current;
    if (!sliderEl) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    sliderEl.addEventListener('transitionend', handleTransitionEnd);
    return () =>
      sliderEl.removeEventListener('transitionend', handleTransitionEnd);
  }, [index, updateTransform]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : 2);
      setIndex(0); // reset slider on resize
    };
  
    window.addEventListener('resize', handleResize);
  
    // run once initially
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div className="Testimonials">
      {index > 0 && (
        <img
          src={back_icon}
          alt="back"
          className="back-btn"
          onClick={slideBackward}
        />
      )}

      {index < maxIndex && (
        <img
          src={next_icon}
          alt="next"
          className="next-btn"
          onClick={slideForward}
        />
      )}
      <div className="slider">
        <ul ref={slider} className="slider-track">
          {slides.map((slide, i) => (
            <li key={i}>
              <Slide {...slide} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Slide = ({ img, name, company }) => (
  <div className="slide">
    <div className="user-info">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <span>{company}</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolore in
      eaque nisi! Quis, laudantium. Eligendi ratione odit voluptates officia?
    </p>
  </div>
);

export default Testimonials;
