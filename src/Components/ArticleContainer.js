import React from 'react'
import { articles } from '../Modules/articles'
import Articles from './articles'

function ArticleContainer() {

  return (

    <div>
        {articles.map((i, index)=>{
            return <Articles key={i.author} article={i}/>
        })}
        
    </div>
  )
}

export default ArticleContainer