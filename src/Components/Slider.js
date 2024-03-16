import React from 'react'
// import { slides } from '../Modules/slides'
import { SlideContext } from '../Components/SlideContext';
import { useContext} from 'react';

function Slider({slide, imageno, nox, slideUpdate, toggle}) {

  const mypics = useContext(SlideContext)
  // Calculate the total number of slides
  // const totalSlides = slides.length;

  // Calculate the index of the currently displayed slide
  const currentIndex = imageno//(imageno % (totalSlides+1));
    
  return (
    
    <div
      className="slider_container">
      
      
      {mypics.map((slide, index) => (
        <div key={index} id={slide.id} className="slide_item" onTransitionEnd={(e)=>{slideUpdate(mypics, currentIndex)}} style={(toggle===false)?{
          transform: `translateX(${currentIndex * -100}%)`, // Translate based on currentIndex
          transition: 'transform 0.5s ease',  // Add transition for smoother animation
         }:
        {transform: `translateX(${currentIndex * -100}%)`, // Translate based on currentIndex
        transition: 'transform 0.5s ease', // Add transition for smoother animation
      }}>
          <img className="slide_img" src={slide.pic} alt={`Slide ${index + 1}`} />
          <h1>{mypics.length}</h1>
          
        </div>
      ))}

      {console.log(mypics.length)}
    </div>
  )
}

export default Slider