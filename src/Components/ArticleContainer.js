import React from 'react'
import { articles } from '../Modules/articles'
import Article from './Article'

function ArticleContainer() {

  return (

    <div>
        {articles.map((i, index)=>{
            return <Article key={i.author} article={i}/>
        })}
        
    </div>
  )
}

export default ArticleContainer