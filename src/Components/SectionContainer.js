import React from 'react'
import { IdContext } from './IdContext'
import { useContext, useState, useEffect } from 'react'

function SectionContainer({animCharacter, n, handleAnim, handleaddN}) {
    
    const filterContextlist = useContext(IdContext)

    useEffect(()=>{
        const characterfilter = (text) =>{
           
        filterContextlist.length > 0? (text= filterContextlist[0].lesson) : (text ="Welcome")
           if (n < text.length){
                handleaddN(n+1)
                handleAnim(text, n)
            }
            else{
                handleaddN(0)
            }

        }

        const timerId = setInterval(characterfilter, 75)

        return(()=>{
            clearInterval(timerId)
        })
    }, [animCharacter, n])

  return (
    <ul className='sectionlist'>
        {filterContextlist.map(i=>{ 
            return <li key={i.id+1}>
                        <h2 className='sectiontitle'>{i.title}</h2>
                        <h3 className='desc_section'>{i.description}</h3>   
                   </li>
        })}
        
        
        <p className='lesson'>{animCharacter}</p>
    </ul>
  )
}

export default SectionContainer