import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerInOut, registerPost } from '../actions/registerForm';
import { uiPage } from '../actions/ui';
import { useForm } from '../hooks/useForm';

export const PageForm3 = () => {

    const initialInOut = {
        temperature: '',
        oxygenation: '',
        room: '',
        invoice: '',
        destination: '',
        inOutVal: '',
    }
    
    const {id} = useSelector(state => state.registerForm);
    const [inOut,handleInputInOut,resetInOut] = useForm(initialInOut)
    const dispatch = useDispatch();    
    const { loading } = useSelector(state => state.view);
    const register = (e) => {
        e.preventDefault();
        dispatch(registerPost({...inOut,id}));
        dispatch(uiPage(3));
    }
        
    const beforePage = (e) => {
        e.preventDefault();
        dispatch(uiPage(2));

    }

    return (
        <div>
            <form>
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
                
                <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="habitacion" className="form-label-sm">Habitacion</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="habitacion" 
                                placeholder=""
                                name="room"
                                value={inOut.room}
                                onChange={handleInputInOut}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="factura" className="form-label-sm">No de Factura</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="factura" 
                                placeholder=""
                                name="invoice"
                                value={inOut.invoice}
                                onChange={handleInputInOut}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="destino" className="form-label-sm">Destino</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="destino" 
                        placeholder=""
                        name="destination"
                        value={inOut.destination}
                        onChange={handleInputInOut}
                    />
                </div>                
                <div className="mb-4">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="inOutVal" 
                            id="inlineRadio1" 
                            value={1}
                            onChange={handleInputInOut}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio1">Entrada</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="inOutVal" 
                            id="inlineRadio2" 
                            value = ""
                            onChange={handleInputInOut}
                        />
                        <label className="form-check-label" htmlFor="inlineRadio2">Salida</label>
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
