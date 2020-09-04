import React from 'react'

const Gastos = ({gasto}) => {
  const {nombre, cantidad} = gasto

  return(
    <li className="gastos">
      <p>
        {nombre}
        <span className="gasto">${cantidad}</span>

      </p>
    </li>
  )
}

export default Gastos