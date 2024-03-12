import React, { useContext } from 'react'
import { articles } from '../Modules/articles'
import Article from './Article'
import { useState, useEffect } from 'react'
import { RatioContext } from './RatioContext'

function ArticleContainer() {

    const [selectedid, setSelectedId] = useState(0)

    var client_width = useContext(RatioContext)
    
  return (

    <div className='articlecontainer'>
        <nav className='nav_article'>
            <h2 className='myarticle'>{client_width}</h2>
            <legend>
                <button onClick={()=>{(selectedid>=1) && setSelectedId(prev=>prev-1)}}>-</button>
                <button onClick={()=>{(selectedid<articles.length-2) && setSelectedId(prev=>prev+1)}}>+</button>
            </legend>
        </nav>
        <div className='article_flexcontainer'>
            {articles.map((i, index)=>{
                return <div style={selectedid?
                     {transform:`translateX(${selectedid * -100}%)`, transition: `transform 1s ease`}
                    :{transform:`translateX(${selectedid * 100}%)`, transition: `transform 1s ease`}}>
                            <Article key={i.author} article={i}/>
                       </div>
            })}  
        </div>
    </div>
    
  )
}

export default ArticleContainer