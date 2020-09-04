import React, { useState } from 'react'
import shortid from 'shortid'
import Error from './Error'

const Formulario = ({setGasto,setCrearGasto}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  const handleSubmite = e => {
    e.preventDefault()

    //validaciones
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ){
      setError(true)
      return
    }
    setError(false)

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    //pasar el gasto al principal
    setGasto(gasto)
    setCrearGasto(true)
    setNombre('')
    setCantidad(0)

  } 
  return(
    <form
      onSubmit={handleSubmite}
    >
      {error 
      ? <Error
          message='Todos los campos son requeridos y los valores tienen que ser mayor a 0'
        /> 
      : null}
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input 
          type='text'
          className='u-full-width'
          placeholder='Ej. Comida'
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}

        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input 
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          value={cantidad}
          onChange={(e)=> setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input 
        type='submit'
        className='buttun-primary u-full-width'
        value='Agregar Gasto'

      />
    </form>
  )
}

export default Formulario