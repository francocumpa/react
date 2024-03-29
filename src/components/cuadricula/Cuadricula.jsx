import usePetitions from '../../hooks/usePetition.js'
import Cripto from '../cripto/Cripto.jsx'
import './Cuadricula.css'
function Cuadricula() {
  const [criptos, cargando] = usePetitions(`assets`)
  if (cargando) return <span>Cargando ...</span>
  return (
    <div className="app-container">

      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
            <Cripto key={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} id={id} />
          ))
        }
      </div>

    </div>
  )
}

export default Cuadricula
