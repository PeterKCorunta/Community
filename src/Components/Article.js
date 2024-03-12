import React from 'react'
import { articles } from '../Modules/articles'
import { useState, useContext } from 'react'
import { IdContext } from './IdContext'

function Article({article, handleSearch}) {
    

  return (
    <div className='article_frame'>
        <h2 className='article_id'>{article.id}</h2>
        <h3 onClick={()=>{handleSearch(article.id)}} className='article_title'><a className='article_linktitle' href='#article'>{article.title}</a></h3>
        <p className='author_description'>{article.description}</p>
        <h3 className='author_title'>{article.author}</h3>
    </div>
  )
}

export default Article