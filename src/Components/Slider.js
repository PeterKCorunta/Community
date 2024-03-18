import React from 'react'
import { slides } from '../Modules/slides'
import { SlideContext } from '../Components/SlideContext';
import { useContext} from 'react';

function Slider({slide, imageno, nox, slideUpdate, toggle, myslide}) {

  const mypics = useContext(SlideContext)
  // Calculate the total number of slides
  // const totalSlides = slides.length;

  // Calculate the index of the currently displayed slide
  const currentIndex = imageno//(imageno % (totalSlides+1));

  const newslide = mypics.map((pic, index) => ({
    ...pic,
    id: index + 1
  }));
  
  console.log(newslide)
    
  return (
    
    <div
      className="slider_container">
      
      
      {mypics.map((slide, index) => (
        <div key={slide.id} id={index+1} className="slide_item" onTransitionEnd={(e)=>{slideUpdate(currentIndex-1)}}>
    {/* //  style={((toggle===false) && currentIndex)?{
    //       transform: `translateX(${(currentIndex) * 0}%)`, // Translate based on currentIndex
    //       transition: 'transform 1.5s ease',  // Add transition for smoother animation
    //      }:
    //     {transform: `translateX(${currentIndex * 0}%)`, // Translate based on currentIndex
    //     transition: 'transform 1.5s ease', // Add transition for smoother animation
    //   }}> */}
       
          <img key={index} id={index+1} className="slide_img" 
          src={slide.pic} alt={`Slide ${index + 1}`} />
          <h1>{mypics.length}</h1>
          {console.log(mypics)}
        </div>
        
      ))}

      
    </div>
  )
}

export default Slider