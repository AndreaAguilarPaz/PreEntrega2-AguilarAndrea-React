
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../utils/fnPedirDatos'
import { ItemList} from '../../components/ItemList/ItemList'




export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState ([])
    
    const [cargando,setCargando] = useState (true)

    const {categoriaId}= useParams()
    console.log(categoriaId)
    
    useEffect(()=>{
        setCargando(true)

        pedirDatos()
        .then((data)=> { 
            const items= categoriaId 
                            ? data.filter (prod => prod.categoria === categoriaId)
                            : data
            setProductos(items ) 
        
        })
        .finally (()=> setCargando(false))
    },[categoriaId])


    return( 
        <>
            {   cargando ?
                ( <h2 className='text-center text-1xl'> En un ratito vas a poder ver los productos... </h2>)
                : (<ItemList productos={productos}/>)
            }
        
        </>
    )
}

