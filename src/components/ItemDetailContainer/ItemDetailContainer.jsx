import { useEffect, useState } from "react"
import { pedirDatos } from "../../utils/fnPedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ItemList } from "../ItemList/ItemList"


export const ItemDetailContainer =()=> {
    const [cargando, setCargando ] = useState(true)
    const [articulo, setArticulo] = useState (null)
    const [productos, setProductos]= useState  ([]) 

    const {articuloId}= useParams ()

    console.log(articuloId)
   

    useEffect (()=> {
        setCargando(true)

        pedirDatos()
        .then ((data)=>{
            setProductos(data);
            setArticulo(data.find(prod => prod.id ===Number(articuloId)))
        })
        .finally(()=> setCargando(false))
    },[articuloId])

    return(
        <div>
          {   cargando ?
                ( <h2 className='text-center text-1xl'> En un ratito vas a poder ver los productos... </h2>)
                : (<ItemList articulo={articulo}/>)
            }
        </div>
    )
}