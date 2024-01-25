import { useParams } from "react-router-dom"
import './CriptoPage.css'
import CriptoInfo from "./info/CriptoInfo.jsx"
import CriptoHistory from "./info/CriptoHistorial.jsx"
import usePetitions from "../../hooks/usePetition.js"
const CriptoPage = () => {
    const params = useParams()
    const API_URL = import.meta.env.VITE_API_URL
    const [cripto, cargandoCripto] = usePetitions(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetitions(`assets/${params.id}/history?interval=d1`)
    if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>

    return (
        <div className="cripto-page-container">
            {cripto && <CriptoInfo cripto={cripto} />}
            {history && <CriptoHistory history={history} />}
        </div>
    )
}
export default CriptoPage