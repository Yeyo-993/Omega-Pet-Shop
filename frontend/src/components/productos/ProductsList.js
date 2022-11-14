import axios from 'axios'

//HOOKS --> GANCHOS --> Gestionar los estados del componente
import { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'

const URI = 'http://localhost:4200/'

const CompProductsList = () => {
    const [productos, setProducto] = useState([])
    useEffect(() => {
        getProductosMascota()
    }, [])

    //CRECION DE METODOS DEL COMPONENTE
    //METODO PARA LISTAR LAS RUTAS DE VUELO
    const getProductosMascota = async () => {
        const res = await axios.get(`${URI}producto/buscarall/`)
        console.log('COLECCION DATOS ->',res.data)

        //REALIZAMOS CONVERSION DE DATOS PARA
        //ORGANIZAR LA ESTRUCTURA DE VISUALIZACION
        //--OPCION PARA VALIDAR
        /*const datosEstruturados = [];
        for(var i in res.data ){
            datosEstruturados.push(i,res.data[i]);
        }
        console.log('DATOS ESTRUCTURADOS->',datosEstruturados[1])*/

        setProducto(res.data['cualquier_cosa'])
    }

    //METODO PARA ELIMINAR RUTA DE VUELO
    const deleteProductosMascotas = async (id) =>{
        axios.delete(`${URI}producto/borrar/${id}`)
        //SI ESTATUS 200
        getProductosMascota()
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={'/producto/buscarall'} className='btn btn-primary mt-2 ml-2 mb-1'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table table-dark'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Edad</th>
                                <th>Cantidad</th>
                                <th>Tamaño</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody className='table-primary'>

                            {console.log(`PORQUE NO IMPRIMES-->`, productos)}

                            {productos.map(element =>(
                                <tr key={element._id}>
                                    <td>{element.nombre}</td>
                                    <td>{element.marca}</td>
                                    <td>{element.edad}</td>
                                    <td>{element.cantidad}</td>
                                    <td>{element.tamano}</td>
                                    <td>{element.precio}</td>
                                    <td>
                                    <Link to={`/producto/actualizar/${element._id}`} className="fa-solid fa-pen-to-square"></Link>  
                                    &nbsp;&nbsp;&nbsp;
                                    <Link onClick={()=>deleteProductosMascotas(element._id)} className="fa-solid fa-trash-can" style={{color:'#ff6262'}}></Link>
                                    </td>
                                </tr>
                             ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompProductsList
