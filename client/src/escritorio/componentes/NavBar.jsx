import React from 'react'

export const NavBar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
        <span className='navbar-brand'>
            &nbsp;
            App Pedidos - Tomas Martinez Visintini
        </span>

        <button className='btn btn-outline-danger'>
            <i className="fa-solid fa-right-from-bracket"></i>
            <span> Salir</span>
        </button>
    </div>
  )
}
