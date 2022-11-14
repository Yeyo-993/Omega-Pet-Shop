import axios from 'axios'
import {useEffect,useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:4200/'

const CompProductsEditar = ()=>{
    const [nombre,setNombre] = useState('')
    const [marca, setMarca] = useState('')
    const [edad, setEdad] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [tamano, setTamaño] = useState('')
    const [precio, setPrecio] = useState('')


    const navigate = useNavigate()
    const {id} = useParams()

    //METODO EDITAR
    const update = async (e)=>{
        e.preventDefault()
        await axios.put(`${URI}producto/actualizar/${id}`,{
            nombre:nombre,
            marca:marca,
            edad:edad,
            cantidad:cantidad,
            tamano:tamano,
            precio:precio
        })
        //RESULT STATUS = 200
        navigate('/')
    }

    useEffect(()=>{
        getProductoById()
    },[])

    const getProductoById = async()=>{
        const res = await axios.get(`${URI}producto/buscar/${id}`)
        console.log('ElementoBuscado-->',res.data)
        setNombre(res.data.result.nombre)
        setMarca(res.data.result.marca)
        setEdad(res.data.result.edad)
        setCantidad(res.data.result.cantidad)
        setTamaño(res.data.result.tamano)
        setPrecio(res.data.result.precio)
    }

    return(
        <div>
            <h3>Editar productos</h3>
            <form onSubmit={update}>
                <input
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                type='text'
                className='form-control'
                />
                <label className='form-label'>Ingrese la marca:</label>
                <input
                value={marca}
                onChange={(e)=>setMarca(e.target.value)}
                type='text'
                className='form-control'
                />
                <label className='form-label'>Ingrese la edad:</label>
                <input
                value={edad}
                onChange={(e)=>setEdad(e.target.value)}
                type='text'
                className='form-control'
                />
                <label className='form-label'>Ingrese la cantidad de productos:</label>
                <input
                value={cantidad}
                onChange={(e)=>setCantidad(e.target.value)}
                type='text'
                className='form-control'
                />
                <label className='form-label'>Ingrese el tamaño del producto:</label>
                <input
                value={tamano}
                onChange={(e)=>setTamaño(e.target.value)}
                type='text'
                className='form-control'
                />
                <label className='form-label'>Ingrese el precio del producto:</label>
                <input
                value={precio}
                onChange={(e)=>setPrecio(e.target.value)}
                type='text'
                className='form-control'
                />
                <button type='submit' className='btn btn-success mt-2 ml-2'>Editar</button>
            </form>
        </div>
    )
}

export default CompProductsEditar