import { Boton } from "../../utils/boton"

export const ItemDetail =( {articulo})=> {
    return(
        <div>
            <h4 className='text-2xl font-semibold'>{articulo.nombre}</h4>
            <img src={articulo.imagen} alt={articulo.nombre}/>
            
            <p>{articulo.descripcion}</p>
            <p className='font-bold'>Precio: $ {articulo.precio}</p>
                    
            <Boton className="bg-green-300" >Agregar al carrito</Boton>
        </div>
    )
}