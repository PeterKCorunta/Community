import React from 'react'
import { IdContext } from './IdContext'
import { useContext } from 'react'

function SectionContainer() {

    const filterContextlist = useContext(IdContext)

  return (
    <ul className='sectionlist'>
        {filterContextlist.map(i=>{
            return <li key={i.id+1}><h2 className='sectiontitle'>{i.title}</h2></li>
        })}
    </ul>
  )
}

export default SectionContainer