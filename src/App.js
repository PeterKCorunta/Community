import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticleContainer from './Components/ArticleContainer';
import { useState, useEffect } from 'react';
import { RatioContext } from './Components/RatioContext';
import { IdContext } from './Components/IdContext';
import { articles } from './Modules/articles';
import SectionContainer from './Components/SectionContainer';
import History from './Components/History';

function App() {
  const [toggle, setToggle] = useState(false)
  const [searchlist, setSearchList] = useState([])
  const [animCharacter, setAnimCharacter] = useState("")
  const [n, setN] = useState(0)

  function filterlist(selectedtitleId){
    const filteredlist = [...articles].filter(i=>{
      return i.id=== selectedtitleId
  })
    setSearchList(filteredlist)
    setToggle((filteredlist[0].title==="The Journey"))
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

  return (
    <div className="App">
      <Header/>
      <RatioContext.Provider value={viewportWidth}>
        <IdContext.Provider value={searchlist}>
          <div className='first_layer'>
            <ArticleContainer handleSearch={filterlist}/>
            <SectionContainer handleSearch={filterlist} toggle={toggle} n={n} animCharacter={animCharacter} handleAnim={setCharacter} handleaddN={addN}/>
          </div>
        </IdContext.Provider>
      </RatioContext.Provider>
      <History/>
      <Footer/>
    </div>
  );
}

export default App;
