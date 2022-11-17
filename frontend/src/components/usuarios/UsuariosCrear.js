import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const URI = 'http://localhost:4200/usuario/crear'

const CompProductosCrear = () => {

  //CREAMOS LOS OBJ QUE SE VAN A ENGANCHAR AL STATE --> HOOK
  const [nombre,setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [contraseña, setContraseña] = useState('')
  

  const navigate = useNavigate()

  //METODO GUARDAR
  const insert = async(e) =>{
    e.preventDefault()
    await axios.post(URI,{
        nombre:nombre,
        correo:correo,
        telefono:telefono,
        contraseña:contraseña,
        direccion:direccion,

    })
    //SI HAY UN STATUS 200
    navigate('/')
  }

  return(
    <div>
      <h2>Creacion de productos</h2>
      <form onSubmit={insert} className='mt-2 ml-4 mr-4'>
        <label className='form-label'>Ingrese el nombre completo:</label>
        <input
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
        type='text'
        className='form-control'
        />
        <label className='form-label'>Ingrese el correo:</label>
        <input
        value={correo}
        onChange={(e)=>setCorreo(e.target.value)}
        type='text'
        className='form-control'
        />
        <label className='form-label'>Ingrese el numero telefonico:</label>
        <input
        value={telefono}
        onChange={(e)=>setTelefono(e.target.value)}
        type='text'
        className='form-control'
        />
        <label className='form-label'>Ingrese la contraseña:</label>
        <input
        value={contraseña}
        onChange={(e)=>setContraseña(e.target.value)}
        type='text'
        className='form-control'
        />
        <label className='form-label'>Ingrese su dirección:</label>
        <input
        value={direccion}
        onChange={(e)=>setDireccion(e.target.value)}
        type='text'
        className='form-control'
        />
        <button type='submit' className='btn btn-primary mt-2 ml-2'>crear</button>
      </form>
    </div>
  )

}
export default CompProductosCrear