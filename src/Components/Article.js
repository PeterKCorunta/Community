import React from 'react'

function Article({article}) {
  return (
    <div className='article_frame'>
        <h2>{article.id}</h2>
        <h3>{article.title}</h3>
        <p className='author_description'>{article.description}</p>
        <h3 className='author_title'>{article.author}</h3>
    </div>
  )
}

export default Article