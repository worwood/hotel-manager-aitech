import React from 'react'
import { FormModal } from '../components/FormModal';


export const RegisterView = () => {
    return (
        <>
            <h1>Pagina de Registros</h1>

            <button className="btn btn-primary btn-lg">Registrar Nuevo ingreso</button>
            
            <FormModal />
        </>
    )
}
