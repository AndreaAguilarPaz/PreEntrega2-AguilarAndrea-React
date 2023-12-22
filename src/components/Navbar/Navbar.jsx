import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import './Navbar.css';
import logo from '../../assets/imgs/logo.jpg';
import carrito from '../../assets/imgs/carrito.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = ()=>{
    return (
        <header className="headerContainer">
            <div className="header">
                <img src={logo} alt ="logo" className="logo"/>
                <h1 className="brand">PLINA BEBE</h1>
                <nav className="navbar">
                    
                    
                    <Link to={"/"} className="p-5 text-white hover:text-yellow">Todos los productos</Link>

                    <Link to={"/productos/cunas"} className="p-5 text-white hover:text-yellow">Cunas</Link>

                    <Link to="/productos/MueblesDeBebe" className="p-5 text-white hover-text-yellow"> Muebles de Bebe</Link>

                    <Link to="/productos/Juguetes" className="p-5 text-white hover:text-yellow"> Juguetes</Link>
                    
                    <li><img src={carrito} alt="carrito" className="p-1 w-20"/> 1 </li>
                    

                </nav>
                
            </div>
        </header>
    )
    
}

export default Navbar