import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerClean, registerPostUser} from '../../actions/registerForm';
import { uiPage } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import Select from 'react-select'
import countryList from 'react-select-country-list'

export const PageForm2 = () => {
    const initialUser = {
        name: '',
        lastName: '',
        correo: '',
        edad: '',
        gender: '',
        citizen: '',
        cellphone: '',
    };
    const { numberPeople,maxNumber } = useSelector(state => state.registerForm);
    const [user,handleInputUser,handleInputChangeEasy] = useForm(initialUser);
    const dispatch = useDispatch();
    const {newReg, 
            nombre, 
            apellidos,
            correo,
            edad,
            genero,
            nacionalidad,
            celular,
            passaporte,
            } = useSelector(state => state.registerForm);
    const { loading } = useSelector(state => state.view);  
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
        setValue(value)
        handleInputChangeEasy({...value, name: 'citizen'})
        //console.log({...value, name: 'citizen'})
        //handleInputUser()
    }
    const nextPage = (e) => {
        e.preventDefault();
        newReg ? dispatch(registerPostUser({...user,passaporte})) : dispatch(uiPage(3));
        
    };
        
    const beforePage = (e) => {
        e.preventDefault();
        dispatch(uiPage(1));
        dispatch(registerClean());}
    return (
        <form>
            <h3> Paso 2: Registro de la persona {maxNumber-numberPeople+1} / {maxNumber} </h3>
            <div className="mb-2">
                    <label htmlFor="nombres" className="form-label-sm">Nombres</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombres" 
                        placeholder=""
                        name="name"
                        value={ newReg ? user.name : nombre}
                        onChange={handleInputUser}
                        disabled={ !newReg }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="apellidos" className="form-label-sm">Apellidos</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="apellidos" 
                        placeholder=""
                        name="lastName"
                        value={ newReg ? user.lastName : apellidos}
                        onChange={handleInputUser}
                        disabled={!newReg}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="correo" className="form-label-sm">Correo Electronico</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="correo" 
                        placeholder=""
                        name="correo"
                        value={ newReg ? user.correo : correo}
                        onChange={handleInputUser}
                        disabled={!newReg}
                    />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="edad" className="form-label-sm">Edad</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="edad" 
                                placeholder=""
                                name="edad"
                                value={ newReg ? user.edad : edad }
                                onChange={handleInputUser}
                                disabled={!newReg}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="celular" className="form-label-sm">Celular</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="celular" 
                                placeholder=""
                                name="cellphone"
                                value={ newReg ? user.cellphone : celular }
                                onChange={handleInputUser}
                                disabled={!newReg}
                            
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="nacionalidad" className="form-label-sm">Nacionalidad</label>
                    <Select 
                        options={options} 
                        value={ newReg ? value : {label: 'Bolivia'} } 
                        onChange={changeHandler} 
                        isDisabled={!newReg} 
                        placeholder={"Seleccione la nacionalidad...."}/>
                    {/* <Select options={options} value={newReg ? user.citizen : nacionalidad} onChange={handleInputUser} name="citizen" 
                        disabled={!newReg} /> */}
                    {/* <input 
                        type="text" 
                        className="form-control" 
                        id="nacionalidad" 
                        placeholder=""
                        name="citizen"
                        value={ newReg ? user.citizen : nacionalidad }
                        onChange={handleInputUser}
                        disabled={!newReg}
                    /> */}
                </div>
                <div>                    
                    <label className="form-label-sm">Genero</label>
                </div>
                <div className="mb-4">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="genero" 
                            id="genero1" 
                            value={1}
                            onChange={handleInputUser}
                            disabled = {!newReg}
                            checked= {newReg ? user.genero==="1" : (genero===1)}
                            
                        />
                        <label className="form-check-label" htmlFor="genero1">Masculino</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="genero" 
                            id="genero2" 
                            value={2}                            
                            onChange={handleInputUser}
                            disabled = {!newReg}
                            checked= {newReg ? user.genero==="2" : (genero===2)}
                        />
                        <label className="form-check-label" htmlFor="genero2">Femenino</label>
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
                    onClick={nextPage}
                    disabled={loading}
                >
                    Siguiente
                </button>
            </div>

        </form>
    )
}
