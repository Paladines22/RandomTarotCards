import { useState, useEffect } from 'react'
import './App.css'
import Cards from './assets/components/Cards'
import cards from './assets/data/cards.jsx'

function App() {

  function randomCard (){
    let index =Math.floor(Math.random( ) * cards.length)
    return index
  } 

  const [index, setIndex] =useState(randomCard(cards.length))

  const colors = ["linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)", "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%", "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%", "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%",
  " linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)", "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%", "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%", "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%", "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%", "linear-gradient(132deg, #F4D03F 0%, #16A085 100%" ];

  const changeIndex  = () => {
    const newRandom = Math.floor(Math.random( ) * cards.length)
    setIndex(newRandom)
  }

  const colorChange = Math.floor(Math.random()* colors.length);
  const color = colors[colorChange];
  document.body.style=`background-image: ${color}`

  return (
    <div className="App">
      <Cards 
      cardsData={cards[index]}/>
      <div className='container-boton'>
          <button onClick={changeIndex}><img className='icon-img' src="/random.png" alt="" /></button>
      </div>
    </div>
  ) 
}

export default App

