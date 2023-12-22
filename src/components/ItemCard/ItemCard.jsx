import { Boton } from "../../utils/boton"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Link } from "react-router-dom"

export const ItemCard = ({articulo})=> {
    return (
        <article  className="w-80">
            <img src={articulo.imagen} alt={articulo.nombre}/>
            <h4 className='text-2xl font-semibold'>{articulo.nombre}</h4>
            <p>{articulo.descripcion}</p>
            <p className='font-bold'>Precio: $ {articulo.precio}</p>
                    
            <Boton >
               <Link to = {`/articulo/${articulo.id}`} >Ver más</Link> 
                </Boton>
        </article>
    )
}