import React from 'react'

function Article({article}) {
  return (
    <div>
        <h2>{article.id}</h2>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <h3>{article.author}</h3>
    </div>
  )
}

export default Article