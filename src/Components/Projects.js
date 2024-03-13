import React from 'react'
import pic1 from '../Pictures/pic1.jpg'

function Projects({toggle}) {

    const Greeting = ({text}) =>{
        return <p className='edition'>{text}</p>
    } 

    const Gallery = ({img}) => {
        return (
                <>
                <img className='gallery_img' src={img}></img>
                <img className='gallery_img' src={img}></img>
                <img className='gallery_img' src={img}></img>
                <img className='gallery_img' src={img}></img>
                </>
        )
    }

  return (
    <div id='projects' className='projects_container'>
        <legend>
            <h2 className='projects_title'>PROJECTS</h2>
        </legend>
        <div className={`slide ${toggle? 'slidein': 'slideout'}`}><Greeting text={"Welcome to my new edition"}/></div>
        <div className={`slide ${toggle? 'slideindelay': 'slideoutdelay'}`}><Greeting text={"I'm so glad you could join our community and make a lot of contributions"}/></div>
        <div className={`slide_gallery ${toggle? 'slideindelay2': 'slideoutdelay2'}`}><Gallery img={pic1} /></div>
    </div>
  )
}

export default Projects