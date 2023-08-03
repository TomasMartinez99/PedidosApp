import React from 'react'
import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'

export const PedidosApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
