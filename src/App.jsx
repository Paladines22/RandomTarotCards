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

  return (
    <div className="App">
      <Cards 
      cardsData={cards[index]}/>
      <button>Aleatorio!</button>
    </div>
  )
}

export default App
