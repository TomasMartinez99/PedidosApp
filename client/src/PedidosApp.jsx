import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { CsvAdministracion } from './paginas/CsvAdministracion';

export const PedidosApp = () => {

  return (
      <Routes>
          { <Route path='/' element={ <CsvAdministracion /> } /> }
      </Routes>
  )
}
