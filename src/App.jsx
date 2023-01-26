import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from  './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const  randomElementFromArray = array => {
    const indexRandom = Math.floor(Math.random() * array.length)
    return array[indexRandom]
  }

  const [quoteRandom, setquoteRandom] = useState(randomElementFromArray(quotes))
const [colorRandom, setcolorRandom] = useState(randomElementFromArray (colors
  ))

  const handleClick = () => { 
    setquoteRandom(randomElementFromArray(quotes))
    setcolorRandom(randomElementFromArray(colors))
  }

  return (
    <div style={{backgroundColor:colorRandom}}className="App">
      <QuoteBox quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
 
