
const Cards =({cardsData}) => {

  const {img, name, number, propiedad, clave} = cardsData
  
  return (
    <div className="cards-container">
      <div className="card">
        <img src={`./src/assets/img/${img}`}></img>
        <div className="text">
          <h3>{name}</h3>
          <h4>{number}</h4>
          <h4>{propiedad}</h4>
          <h4 className="clave">{clave}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cards