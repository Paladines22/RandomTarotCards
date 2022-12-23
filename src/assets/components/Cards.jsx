
const Cards =({cardsData}) => {

  const {img, name, number, propiedad, clave} = cardsData
  
  return (
    <div className="cards">
      <img src={`./src/assets/img/${img}`}></img>
      <h4>{name}</h4>
      <h4>{number}</h4>
      <h5>{propiedad}</h5>
      <h5>{clave}</h5>
    </div>
  )
}

export default Cards