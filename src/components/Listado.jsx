import React from 'react'
import Gastos from './Gasto'

const Listado = ({gastos}) => {
  return(
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
        <Gastos
          key={gasto.id}
          gasto={gasto}

        />
      ))}
    </div>
  )
}

export default Listado