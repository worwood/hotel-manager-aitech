import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';
import { FormModal } from '../components/FormModal';


export const RegisterView = () => {


    const dispatch = useDispatch();

    const handleFormButon = () => {
        dispatch( uiOpenModal() )
    }

    return (
        <>
            <h1>Pagina de Registros</h1>

            <button className="btn btn-primary btn-lg" onClick={ handleFormButon }>Registrar Nuevo ingreso</button>
            
            <FormModal />
        </>
    )
}
