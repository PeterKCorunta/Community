import React from 'react'
import { IdContext } from './IdContext'
import { useContext, useState, useEffect } from 'react'

function SectionContainer({toggle, animCharacter, n, handleAnim, handleaddN}) {
    
    const filterContextlist = useContext(IdContext)

    const Greeting = ({text}) =>{
        return <p className='edition'>{text}</p>
    } 

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
    }, [animCharacter])

  return (
    <ul className='sectionlist'>
        {filterContextlist.map(i=>{ 
            return <li key={i.id+1}>
                        <h2 className='sectiontitle'>{i.title}</h2>
                        <h3 className='desc_section'>{i.description}</h3>   
                   </li>
        })}
        
        <div className={`slide ${toggle? 'slidein': 'slideout'}`}><Greeting text={"Welcome to my new edition"}/></div>
        <div className={`slide ${toggle? 'slideindelay': 'slideoutdelay'}`}><Greeting text={"I'm so glad you could join our community and make a lot of contributions"}/></div>
        <p className='lesson'>{animCharacter}</p>
    </ul>
  )
}

export default SectionContainer