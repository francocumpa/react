import { Navigate, Outlet } from "react-router-dom"
import './App.css'
import Menu from "./menu/Menu.jsx"

const App = () => {
    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' />
    }
    return (
        <div className="app-container">
            <Menu />
            <Outlet />
        </div>
    )
}
export default App