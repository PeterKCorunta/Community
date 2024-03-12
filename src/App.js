import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticleContainer from './Components/ArticleContainer';
import { useState, useEffect } from 'react';
import { RatioContext } from './Components/RatioContext';
import { IdContext } from './Components/IdContext';
import { articles } from './Modules/articles';
import SectionContainer from './Components/SectionContainer';

function App() {

  // const [selectedtitleId, setSelectedtitleId] = useState(article.id)
  const [searchlist, setSearchList] = useState([])

  function filterlist(selectedtitleId){
    const filteredlist = [...articles].filter(i=>{
      return i.id=== selectedtitleId
  })
    setSearchList(filteredlist)
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
            <SectionContainer handleSearch={filterlist}/>
          </div>
        </IdContext.Provider>
      </RatioContext.Provider>
      {/* {ratio} */}
      <Footer/>
    </div>
  );
}

export default App;
