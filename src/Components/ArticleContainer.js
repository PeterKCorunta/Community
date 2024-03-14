import React, { useContext } from 'react'
import { articles } from '../Modules/articles'
import Article from './Article'
import { useState} from 'react'
import { RatioContext } from './RatioContext'

function ArticleContainer({initialWidth, handleSearch}) {

    const [selectedid, setSelectedId] = useState(0);
    const [selectedtext, setSelectedText] = useState("");

    var client_width = Math.ceil(useContext(RatioContext) / 1335)

    function searchTitle(){
        [...articles].filter(i=>{
            return (i.title.toLowerCase().includes(selectedtext.toLowerCase())) && setSelectedId(i.id>1?(client_width>=2)?i.id-2:i.id-1:(i.id-1))})
    }
    
  return (

    <div className='articlecontainer'>
        <nav className='nav_article'>
            <h2 className='myarticle'>Enter Search</h2>
            <input className='search_title' type='text' placeholder="Enter title" onChange={(e)=>{setSelectedText(e.target.value)}} value={selectedtext} />
            <button className='searchBtn' onClick={searchTitle}>Search</button>
            <legend>
                <button onClick={()=>{(selectedid>=1) && setSelectedId(prev=>prev-1)}}>-</button>
                <button onClick={()=>{(selectedid<articles.length - client_width) && setSelectedId(prev=>prev+1)}}>+</button>
            </legend>
        </nav>
        <div className='article_flexcontainer'>
            {articles.map((i, index)=>{
                return <div key={i.id} style={selectedid?
                     {transform:`translateX(${selectedid * -100}%)`, transition: `transform 1s ease`}
                    :{transform:`translateX(${selectedid * 100}%)`, transition: `transform 1s ease`}}>
                            <Article key={i.author} article={i} handleSearch={handleSearch}/>
                       </div>
            })}  
        </div>
    </div>
    
  )
}

export default ArticleContainer