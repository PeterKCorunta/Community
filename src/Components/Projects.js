import React from 'react'
import pic1 from '../Pictures/pic1.jpg'

function Projects({toggle}) {

    const Greeting = ({text}) =>{
        return <p className='edition'>{text}</p>
    } 

    const Gallery = ({img}) => {
        return (
                <div className='mygallery'>
                    <a href="#" className='gallery_img'>
                        <img className='gallery_img'src={img} alt="gallery_pic"></img>
                        <figcaption className='captionImg'>PROJECT 1</figcaption> 
                    </a>
                    <a href="#" className='gallery_img'>
                        <img className='gallery_img'src={img} alt="gallery_pic"></img>
                        <figcaption className='captionImg'>PROJECT 2</figcaption> 
                    </a>
                    <a href="#" className='gallery_img'>
                        <img className='gallery_img'src={img} alt="gallery_pic"></img>
                        <figcaption className='captionImg'>PROJECT 3</figcaption> 
                    </a>
                    <a href="#" className='gallery_img'>
                        <img className='gallery_img'src={img} alt="gallery_pic"></img>
                        <figcaption className='captionImg'>PROJECT 4</figcaption> 
                    </a>
                </div>
        )
    }

    const Citation = ({citeText}) => {
        return(
                <div>
                    <cite>{citeText}</cite>
                </div>
        )
    }

  return (
    <div id='projects' className='projects_container'>
        <legend>
            <h2 className='projects_title'>PROJECTS</h2>
        </legend>
        <div className={`slide ${toggle? 'slidein': 'slideout'}`}><Greeting text={"Welcome to my Projects"}/></div>
        <div className={`slide ${toggle? 'slideindelay': 'slideoutdelay'}`}><Greeting text={"Click on any of the images to navigate to check out the project."}/></div>
        <div className={`slide_gallery ${toggle? 'slideindelay2': 'slideoutdelay2'}`}><Gallery img={pic1} /></div>
        <div className={`fade_text ${toggle? 'fadeIn': 'fadeOut'}`}><Citation citeText={"A man who travels is more knowledgeable than a man who is confined"} /></div>
    </div>
  )
}

export default Projects