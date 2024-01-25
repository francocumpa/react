import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

const Perfil = () => {
    const usuario = useContext(UserContext)

    return (
        <div>
            <h1>Perfil de {usuario.name}</h1>
            <p>usuario desde: {usuario.registered}</p>
        </div>
    )
}
export default Perfil