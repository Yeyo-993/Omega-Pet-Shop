import axios from 'axios'
import {useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const URI = 'http://localhost:4200/'

const CompProductosEditar = ()=>{
    const [nombre, setNombre] = useState('')
    const [marca, setMarca] = useState('')
    const [edad, setEdad] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [tamano, setTamaño] = useState('')
    const [precio, setPrecio] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    //METODO PARA EDITAR
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
        //RESULT STATUS 200
        navigate('/')
    }
    useEffect(()=>{
        getProductoById()
    },[])

    const getProductoById = async()=>{
        const res = await axios.get(`${URI}producto/buscar/${id}`)
            console.log('Elemento Buscado-->',res.data)
            setNombre(res.data.message.nombre)
            setMarca(res.data.message.marca)
            setEdad(res.data.message.edad)
            setCantidad(res.data.message.cantidad)
            setTamaño(res.data.message.tamano)
            setPrecio(res.data.message.precio)
    }
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Omega Pet Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to={'/'} className="nav-item"><i class="nav-link">Home</i></Link>
                        <Link to={'/listar'} className="nav-item"><i class="nav-link">Productos</i></Link>
                        <Link to={'/producto/crear'} className="nav-item"><i class="nav-link">Registrarse</i></Link>
                        <Link to={'/producto/crear'} className="nav-item"><i class="nav-link">Iniciar Sesion</i></Link>
                    </ul>
                </div>
            </div>
        </nav>
            <h3>Editar productos</h3>
            <form onSubmit={update}>
                <label className='form-label'>Ingrese el nombre del producto:</label>
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
                <button type='submit' className='btn btn-success'>Editar</button>
            </form>
        </div>
    )

}
export default CompProductosEditar