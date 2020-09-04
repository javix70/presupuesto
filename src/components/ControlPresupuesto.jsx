import React from 'react'
import { revisarPresupuesto } from '../helper'


const ControlPresupuesto = ({presupuesto, restante}) => {
  return(
    <>
      <div className="aler alert-primary">
        Presupuesto {presupuesto}
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante {restante}
      </div>

    </>
  )
}
export default ControlPresupuesto