import React from 'react'
import { slides } from '../Modules/slides'

function Slider({slide, imageno, nox}) {
    
  return (
    <div className={imageno<=(slide.id)?'slider_container':''}
          style={imageno<=(slide.id)?{transform:`translateX(${((imageno * -100))}%)`, opacity: `1`, zIndex: `-999`, transition:`all 1s ease`}
                         :{transform: `translateX(${((slides.length+(nox - imageno))) * (100 * (imageno)/(imageno))}%)`, zIndex: `-999`, transition:`all 1s ease`}}>
                          
        <img className="slide_img" src={slide.pic} alt={`Slide${slide.id}`}/>
        {/* <h1>{((5+(nox - imageno)))}</h1> */}
        {slide.id}
    </div>
  )
}

export default Slider