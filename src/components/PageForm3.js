import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerInOut, registerPost } from '../actions/registerForm';
import { uiPage } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

export const PageForm3 = () => {
    const {id,nit} = useSelector(state => state.registerForm);
    const initialInOut = {
        temperature: '',
        oxygenation: '',
        room: '',
        invoice: '',
        destination: '',
        inOutVal: '',
        nit: nit,

    }
    const [dateIn, setDateIn] = useState(new Date())
    const [dateOut, setDateOut] = useState(new Date())
    const checkInVal=dateIn.getFullYear()+'-'+(dateIn.getMonth()+1)+'-'+dateIn.getDate();
    const checkOutVal=dateOut.getFullYear()+'-'+(dateOut.getMonth()+1)+'-'+dateOut.getDate();
    
    const [inOut,handleInputInOut] = useForm(initialInOut)
    const dispatch = useDispatch();    
    const { loading } = useSelector(state => state.view);
    const register = (e) => {
        e.preventDefault();
        dispatch(registerPost({...inOut,id,checkInVal,checkOutVal}));
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
                
                <div className="mb-3">
                    <label htmlFor="destino" className="form-label-sm">NIT</label>
                    <input 
                        type="numeric" 
                        className="form-control" 
                        id="nit" 
                        placeholder=""
                        name="nit"
                        value={inOut.nit}
                        onChange={handleInputInOut}
                    />
                </div> 
                <div className="row mb-2">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="check-in" className="form-label-sm">Check-In</label>
                            <DatePicker 
                                id="check-in"
                                name="check-in"
                                locale="es" 
                                selected={dateIn} 
                                onChange={(date) => setDateIn(date)} 
                                disabled = {loading}
                                className="pt-1"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="check-out" className="form-label-sm">Check-Out</label>
                            <DatePicker 
                                id="check-out"
                                name="check-out"
                                locale="es" 
                                selected={dateOut} 
                                onChange={(date) => setDateOut(date)} 
                                disabled = {loading} 
                                className="pt-1"
                            />
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
