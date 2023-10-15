import React from 'react'
import '../styles/Skills.css'

const SkillsItems = ({imgUrl,title}) => {
  return (
    <div className='item'>
    <img src={imgUrl} alt='Image'/>
    <h5>{title}</h5>
  </div>
  )
}

export default SkillsItems
