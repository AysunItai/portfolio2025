import React,{useState,useEffect,useRef} from 'react';

import Slide from '../components/Slide.jsx';

const Testimonials = ({test,data}) => {
const [currentIndex, setCurrentIndex] = useState(0);

const slideTrackRef = useRef(null);

const updateSlider = () => {
    const slideWidth = slideTrackRef.current.offsetWidth;
    console.log(slideWidth);
    slideTrackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

const goToSlide = (index) => {
    if (index >= 0 && index<data.length) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);


  return (
    <div className='testimonials-container'>
      <p>{test}</p>
      <div className="slider-container">
      <div className="slider-track" ref={slideTrackRef}>
        {data.map((slide, index) => (
          <div className="slide" key={index}>
            <Slide
              text={slide.text}
              author={slide.author}
              title={slide.title}
              image={slide.image}
            />
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        {data.map((_, index) => (
          
          <div
            className={`slider-button ${index === currentIndex ? 'active' : ''}`}
            key={index}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>

    
    </div>
  );
};

export default Testimonials;
