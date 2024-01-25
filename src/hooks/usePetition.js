import axios from "axios"
import { useEffect, useState } from "react"
const usePetitions = (endpoint) => {
    const API_URL = import.meta.env.VITE_API_URL
    const [data, setData] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setCargando(true)
        axios.get(`${API_URL}${endpoint}`)
            .then((data) => {
                setData(data.data.data)
                setCargando(false)

            })
            .catch(() => {
                setCargando(false)
                console.error("La peticion fallo")
            })

    }, [])
    return [data, cargando]
}
export default usePetitions
