import React, { useState } from 'react'
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { registerInitial } from '../../actions/registerForm';
import { uiPage } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
registerLocale('es', es)

export const PageForm0 = () => {
    const initialRegister = {
        numberPeople: '',
        habitacion: '',
        destino: '',
        nit: '',
        noFactura: '',
    };
    const dispatch = useDispatch();    
    const [register, handleRegister]= useForm(initialRegister);
    const [dateIn, setDateIn] = useState(new Date())
    const [dateOut, setDateOut] = useState(new Date())
    const checkInVal=dateIn.getFullYear()+'-'+(dateIn.getMonth()+1)+'-'+dateIn.getDate();
    const checkOutVal=dateOut.getFullYear()+'-'+(dateOut.getMonth()+1)+'-'+dateOut.getDate();
    const { loading } = useSelector(state => state.view);
    const saveRegister = (e) => {
        e.preventDefault();
        dispatch(registerInitial({...register,checkInVal,checkOutVal}));
        dispatch(uiPage(1));
    }

    return (
        <form>
            <h3> Registro de Ingreso</h3>

            <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="numberPeopleId" className="form-label-sm">Numero de Personas</label>
                            <input 
                                type="number"
                                className="form-control" 
                                id="numberPeopleId" 
                                placeholder="00" 
                                autoFocus={true} 
                                name='numberPeople'
                                value={register.numberPeople}
                                onChange={handleRegister}
                            />                        
                            <div className="invalid-feedback">
                                Por favor ingrese un numero valido.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="habitacionId" className="form-label-sm">Habitacion</label>
                            <input 
                                type="number"                 
                                className="form-control" 
                                id="habitacionId" 
                                placeholder="Habitacion" 
                                name='habitacion'
                                value={register.habitacion}
                                onChange={handleRegister}
                            />                        
                            <div className="invalid-feedback">
                                Por favor ingrese un numero valido.
                            </div>
                        </div>
                    </div>
                </div>
            <div className="mb-2">
                <label htmlFor="destinoId" className="form-label-sm">Destino</label>
                <input 
                    type="text"
                    className="form-control" 
                    id="destinoId" 
                    placeholder="Destino Final" 
                    name='destino'
                    value={register.destino}
                    onChange={handleRegister}
                />
                <div className="invalid-feedback">
                    Por favor ingrese un destino valido.
                </div>
            </div>

            <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="nitId" className="form-label-sm">NIT</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="nitId" 
                                placeholder="00000000000"
                                name="nit"
                                value={register.nit}
                                onChange={handleRegister}
                            />
                            <div className="invalid-feedback">
                                Por favor ingrese un NIT valido.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="noFacturaId" className="form-label-sm">No de Factura</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="noFacturaId" 
                                placeholder="000000"
                                name="noFactura"
                                value={register.noFactura}
                                onChange={handleRegister}
                            />
                            <div className="invalid-feedback">
                                Por favor ingrese un numero de Factura.
                            </div>
                        </div>
                    </div>
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
            <div className="d-flex justify-content-end">
                <button 
                    className="btn btn-primary btn-lg "
                    onClick={saveRegister}
                    disabled={loading} 
                >
                    Siguiente
                </button>
            </div>

        </form>
    )
}
