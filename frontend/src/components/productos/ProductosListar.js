import axios from 'axios'

//HOOKS --> GANCHOS --> Gestionar los estados del componente
import {useState, useEffect} from 'react'
import { Router } from 'react-router-dom'

import {Link} from 'react-router-dom'
import { Title } from '../styles'

const URI = 'http://localhost:4200/'

const CompProductosListar = ()=>{
    const [productos, setProducto] = useState([])
    useEffect(()=>{
        getProductosMascota()
    },[])
    //CRECION DE METODOS DEL COMPONENTE
    //METODO PARA LISTAR LAS RUTAS DE VUELO
    const getProductosMascota = async ()=>{
        const res = await axios.get(`${URI}producto/buscarall/`)
        //console.log(res.data)

        //REALIZAMOS CONVERSION DE DATOS PARA
        //ORGANIZAR LA ESTRUCTURA DE VISUALIZACION


        setProducto(res.data['message'])
    }

    //METODO PARA ELIMINAR RUTA DE VUELO
    const deleteProductosMascotas= async(id) =>{
        axios.delete(`${URI}producto/borrar/${id}`)
        //SI ESTATUS 200
        getProductosMascota()
    }

    return(
        <div className='container'>
            <div className='row'>
                <Title>Listado de productos</Title>
                <div className='col'>
                    <Link to={'/producto/crear'} className='btn btn-primary mt-2 ml-2 mb-1'><i className="fa-solid fa-square-plus"></i></Link>
                    <table className='table table-dark'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Edad</th>
                                <th>Cantidad</th>
                                <th>Tamaño</th>
                                <th>Precio</th>
                                <th>Acción</th>
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
                                    <Link to={`/producto/actualizar/${element._id}`} className="fa-solid fa-file-pen text-bg-info"></Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <Link onClick={()=>deleteProductosMascotas(element._id)} className="fa-regular fa-trash-can text-bg-danger"></Link>
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

export default CompProductosListar