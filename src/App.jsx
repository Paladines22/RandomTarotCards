import { useState } from 'react'
import './App.css'
import Cards from './assets/components/Cards'
import cards from './assets/data/cards.jsx'

function App() {

  function randomCard (){
    let index =Math.floor(Math.random( ) * cards.length)
    return index
  } 

  const [index, setIndex] =useState(randomCard())

  const changeIndex  = () => {
    const newRandom = Math.floor(Math.random( ) * cards.length)
    setIndex(newRandom)
  }

  return (
    <div className="App">
      <Cards 
      cardsData={cards[index]}/>
      <div className='container-boton'>
          <button onClick={changeIndex}>Aleatorio</button>
      </div>
    </div>
  )
}

export default App
