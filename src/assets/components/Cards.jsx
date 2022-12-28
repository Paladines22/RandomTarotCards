
const Cards =({cardsData}) => {

  const {img, name, number, propiedad, clave, } = cardsData
  
  const colors = ['#6257D3', '#196F3D', '#BA4A00', '#7B241C', '#283747', '#6C3483', '#F1C40F', '#57D3CF', '#D35782', '#FF0400'];
  const colorChange = Math.floor(Math.random()* colors.length);
  const color = colors[colorChange];

  return (
    <div className="cards-container">
      <div className="card">
        <img src={`/src/assets/img/${img}`}></img>
        <div className="text">
          <h3 style={{color:color}}>{name}</h3>
          <h4 style={{color:color}}>{number}</h4>
          <h4 style={{color:color}}>{propiedad}</h4>
          <h4 style={{color:color}} className="clave">{clave}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cards