import React from 'react'

const ButtomBox = ({colorRandom, handleClick}) => {
  return (
        <div className='btn'><button style={{background:colorRandom}}className='box__btn' onClick={handleClick}>&#62;</button></div>
    
    
  )
}

export default ButtomBox