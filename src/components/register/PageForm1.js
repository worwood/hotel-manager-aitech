import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkPassport } from '../../actions/registerForm';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';


export const PageForm1 = () => {
    const [validatorPass, setValidatorPass] = useState(true)
    const [passport,handleInputPassport] = useForm({passportId: ''})
    const { numberPeople,maxNumber } = useSelector(state => state.registerForm)
    const { loading } = useSelector(state => state.view)
    const dispatch = useDispatch();
    const nextPage = (e) => {
        e.preventDefault();
        //setpage(page => page + 1);
        if(validator.isLength(passport.passportId,{min:3,max: undefined} )){
            dispatch(checkPassport(passport.passportId));
        }
        else{
            console.log('mal')
            //
        }
    }
    return (
        <form>
            <h3> Paso 1: Registro de la persona {maxNumber-numberPeople+1} / {maxNumber}</h3>
            <div className="mb-2">
                <label htmlFor="pasaport" className="form-label-sm">CI o Pasaporte</label>
                <input 
                    type="text"                 
                    className="form-control" 
                    id="passport" 
                    placeholder="00000000-00" 
                    autoFocus={true} 
                    name='passportId'
                    value= { passport.passportId}
                    onChange={handleInputPassport}
                />
                <div className="invalid-feedback">
                    Por favor ingrese un pasaporte o CI valido.
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button 
                    className="btn btn-primary btn-lg " 
                    onClick={ nextPage }
                    disabled={ loading }>
                    Siguiente
                </button>
            </div>

        </form>
    )
}
