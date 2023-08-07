import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { IngresoPagina } from '../auth';
import { EscritorioPagina } from '../escritorio';

export const AppRouter = () => {
  
    const authStatus = "authenticated";

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
                ? <Route path='/auth/*' element={ <IngresoPagina /> } />
                : <Route path='/auth/*' element={ <EscritorioPagina /> } />
            }
            
            <Route path='/*' element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
