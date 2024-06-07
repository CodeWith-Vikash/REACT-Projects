import React, { useRef, useState } from 'react';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';

const App = () => {
  const images = [
    'src/Images/pexels-darshak-pandya-574313.jpg',
    'src/Images/pexels-navneet-shanu-672630.jpg',
    'src/Images/pexels-pixabay-45201.jpg',
    'src/Images/pexels-sahil-prajapati-974320.jpg',
  ];

  const [current, setCurrent] = useState(0);
  const slideref = useRef(null);

  const handlePrev = () => {
    const newIndex = current > 0 ? current - 1 : images.length - 1;
    setCurrent(newIndex);
    slideref.current.style.transform = `translateX(-${newIndex * 350}px)`;
  };

  const handleNext = () => {
    const newIndex = current < images.length - 1 ? current + 1 : 0;
    setCurrent(newIndex);
    slideref.current.style.transform = `translateX(-${newIndex * 350}px)`;
    };
    const handledotclick=(index)=>{
      setCurrent(index)
      slideref.current.style.transform = `translateX(-${index * 350}px)`;
  }

  return (
    <div className="container">
      <div className="slider-container">
        <div className="slider" ref={slideref}>
          {images.map((src, index) => (
            <div key={index} className="slide">
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <div className="btns">
          <TbPlayerTrackPrevFilled size="2rem" color="yellow" className="btn1" onClick={handlePrev} />
          <TbPlayerTrackNextFilled size="2rem" color="yellow" className="btn2" onClick={handleNext} />
        </div>
        <div className="dots">
          {images.map((item,index)=>{
             return <div className={`dot ${current==index && 'active'}`} onClick={()=>handledotclick(index)} key={index}></div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
