import { createContext, useEffect, useState } from "react";
const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({})
    useEffect(() => {
        setUsuario(
            {
                name: "Franco C.",
                registered: "24/01/2024"
            }
        )
    }, [])
    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContextProvider, UserContext }