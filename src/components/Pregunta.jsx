import React, { useState } from 'react'
import Error from './Error'

const Pregunta = () => {

  const [cant, setCant] = useState(0)
  const [error, setError] = useState(false)


  const definiPresupuesto = e => {
    setCant(parseInt(e.target.value, 10))
    }

  const handleSubmit = e => {
    e.preventDefault()

    //validaciones
    if(cant < 1 || isNaN(cant)) {
      setError(true)
      return
    }
    setError(false)

  }
  return(
    <>
    <h2>Coloca tu presupuesto</h2>
   
    {error 
      ? <Error
          message='Error al ingresar Presupuesto'
        /> 
      : null}

    <form
      onSubmit={handleSubmit}
    >
      <input 
        type='number' 
        placeholder='Coloca tu presupuesto'
        className='u-full-width'
        onChange={definiPresupuesto}
      />
      <input 
        type='submit' 
        value='Definir presupuesto'
        className='button-primary u-full-width'
      />

    </form>

    </>
  )
}

export default Pregunta