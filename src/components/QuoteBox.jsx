import React from 'react'
import ButtomBox from './ButtomBox'
import QuoteColor from './QuoteColor'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {
  return (
    <section style={{color:colorRandom}}className='box'>
      <QuoteColor 
      colorRandom={colorRandom}
      handleClick={handleClick}/>
        <p className='box__quote'>{quoteRandom.quote}</p>
        <h1 className='box__author'>{quoteRandom.author}</h1>
        <ButtomBox 
        colorRandom={colorRandom}
        handleClick={handleClick}/>
    </section>
  )
}

export default QuoteBox