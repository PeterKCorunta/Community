import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticleContainer from './Components/ArticleContainer';
import { useState, useEffect, useContext } from 'react';
import { RatioContext } from './Components/RatioContext';
import { IdContext } from './Components/IdContext';
import { articles} from './Modules/articles';
import SectionContainer from './Components/SectionContainer';
import History from './Components/History';
import Projects from './Components/Projects';
import Slider from './Components/Slider';
import { slides } from './Modules/slides';
import { SlideContext } from './Components/SlideContext';
// import { Button } from '@react-ui-org/react-ui'

function App() {
  const [toggle, setToggle] = useState(false)
  const [searchlist, setSearchList] = useState([])
  const [animCharacter, setAnimCharacter] = useState("")
  const [n, setN] = useState(0)
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [imageid, setImageId] = useState(0);
  const [imageidx, setImageIdx] = useState(0);
  const [slidepics, setSlidepics] = useState(slides)
  const [picid, setPicId] = useState(0)
  const [slideleft, setSlideLeft] = useState(false)

  function filterlist(selectedtitleId){
    const filteredlist = [...articles].filter(i=>{
      return i.id=== selectedtitleId
  })
    setSearchList(filteredlist)
    // setToggle((filteredlist[0].title==="The Journey"))
    
    setN(n=>n=0)
    setAnimCharacter("")
  }

  function addN(value){
    setN(n=>value)
  }

  function setCharacter(text, n){
    setAnimCharacter(p=>p+text[n])
  }
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    // Update the viewportWidth when the window is resized
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach event listener for the resize event
    window.addEventListener('resize', handleResize);
   
    // Cleanup function
    return (() => {
      // Detach event listener when the component is unmounted
      window.removeEventListener('resize', handleResize);
    });
  }, []); // Run this effect only once on component mount

  
  useEffect(() => {
    
    const handleScroll = () => {
      setToggle(scrollY >= 480);
      setScrollY(window.scrollY);
    };
      // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);
  
     // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, [scrollY]); // Empty dependency array ensures the effect runs only once on mount
  
    const AddSlide = (id_slide) =>{ 
      
      setSlideLeft(false)
         setSlidepics(prev=>([...[...prev].filter(i=>{return i.pic !== slides[(id_slide >= slides.length)?( id_slide-1 % (slides.length)) : id_slide-1].pic}), {id: id_slide, pic: slides[(id_slide >= slides.length)?( id_slide-1 % (slides.length)) : id_slide-1].pic}]))
        //setSlidepics(prev=>([...prev, {id: id_slide, pic: slides[(id_slide >= slides.length)?( id_slide-1 % (slides.length)) : id_slide-1].pic}]))
  
      console.log(slidepics)
    }

    
    const RemoveSlide = (id_slide) =>{
      setSlideLeft(true)
      
      // setSlidepics(prev=>([{id: id_slide, pic: slides[(id_slide >= slides.length)?( id_slide-1 % (slides.length)) : id_slide-1].pic}, ...[...prev].filter(i=>{return i.id !== id_slide})]))
      // setSlidepics(prev=>([{id: id_slide, pic: slides[(id_slide >= slides.length)?( id_slide % (slides.length)) : id_slide].pic}, ...prev]))
      
      
      
      
    }
    
    const updateSlide = (id_slide) =>{
      
      // const modifySlide = mySlide.filter(i=>{
      //   return (i.id !== id_slide)
      // })

      // setSlidepics([...modifySlide])
      //  AddSlide(id_slide)
      // setSlidepics(prev=>([...[...prev].filter(i=>{return i.id > id_slide}), {id: id_slide, pic: slides[(id_slide >= slides.length)?( id_slide % (slides.length)) : id_slide].pic}]))
      // if (e.target.id <= id_slide) {
      //   // e.target.setAttribute('style', `transform: translate(${(slides.length - e.target.id) * 100}%)`);
      //    e.target.setAttribute('id', id_slide + slides.length)
      //    e.target.remove()
      //    AddSlide(id_slide)
      //   // console.log(e.target)
      //   // console.log(e.target.children.length)
      //  setPicId(n=>id_slide-1)
      // }
      // else{
      // }
      // setSlidepics(([...modifySlide]))
      // console.log(slidepics)
    }

  return (
    <div className="App">
      <Header/>
      <RatioContext.Provider value={viewportWidth}>
        <IdContext.Provider value={searchlist}>
          <div className='first_layer'>
            <ArticleContainer handleSearch={filterlist}/>
            <SectionContainer handleSearch={filterlist} n={n} animCharacter={animCharacter} handleAnim={setCharacter} handleaddN={addN}/>
          </div>
        </IdContext.Provider>
      </RatioContext.Provider>
      <History/>
      {/* {scrollY} */}
      <Projects toggle={scrollY >= 290} />
      <div className='main_sliderContainer'>
        <nav className='navSliderBtns'>
          <legend className='gallery_legend'><h2 className='gallery_title'>Gallery</h2></legend>
          <button className='remove' onClick={()=>{(picid >=1 ) && setPicId(n=>n-1); RemoveSlide(picid % slides.length+1)}}>PREVIOUS</button>
          <button className='add' onClick={()=>{setPicId(n=>n+1); AddSlide(picid % slides.length+1)}}>NEXT</button>
        </nav>
        <SlideContext.Provider value={slidepics}>
          <Slider imageno={picid % slides.length+1} slideUpdate={updateSlide} toggle={slideleft}/>
        </SlideContext.Provider>
        {`Length is: ${picid % slides.length+1}`}
       
      </div>
      <legend>Great day</legend>
      <Footer/>
    </div>
  );
}

export default App;
