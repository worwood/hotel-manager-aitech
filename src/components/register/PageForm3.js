import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerPost } from '../../actions/registerForm';
import { uiPage } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const PageForm3 = () => {
    const initialInOut = {
        temperature: '',
        oxygenation: '',
    }     
    const { numberPeople,maxNumber } = useSelector(state => state.registerForm)
    const { id, nombre, room, invoice, checkIn, checkOut, destination, nit } = useSelector(state => state.registerForm)
    const [inOut,handleInputInOut] = useForm(initialInOut)
    const dispatch = useDispatch();    
    const { loading } = useSelector(state => state.view);
    const register = (e) => {
        e.preventDefault();
        dispatch(registerPost({...inOut, id, nombre, room, invoice, checkIn, checkOut, destination, nit, numberPeople}));
    }
        
    const beforePage = (e) => {
        e.preventDefault();
        dispatch(uiPage(2));

    }

    return (
        <div>
            <form>
            <h3> Paso 3: Registro de la persona {maxNumber-numberPeople+1} / {maxNumber}</h3>
                <div className="row">
                    <div className="col">
                        <label htmlFor="temperatura" className="form-label-sm">Temperatura</label>
                        <div className="input-group mb-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="temperatura" 
                                placeholder=""
                                name="temperature"
                                value={inOut.temperature}
                                onChange={handleInputInOut}
                            />
                            <span className="input-group-text" id="basic-addon1">°C</span>
                        </div>
                    </div>
                    <div className="col">
                            <label htmlFor="oxigenacion" className="form-label-sm">Oxigenacion</label>
                        <div className="input-group mb-2">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="oxigenacion" 
                                placeholder="" 
                                name="oxygenation"
                                value={inOut.oxygenation}
                                onChange={handleInputInOut}
                            />
                            <span className="input-group-text" id="basic-addon1">%</span>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-primary btn-lg "
                        onClick={beforePage}
                        disabled={loading}
                    >
                        Atras
                    </button>
                    <button 
                        className="btn btn-primary btn-lg "
                        onClick={register}
                        disabled={loading}
                    >
                        Registrar
                    </button>
                </div>

            </form>
        </div>
    )
}
