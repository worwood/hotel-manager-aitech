import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkPassport, registerPassport } from '../actions/registerForm';
import { useForm } from '../hooks/useForm';


export const PageForm1 = ({setpage}) => {
    const [passport,handleInputPassport] = useForm({passportId: ''})
    const {newReg, passaporte} = useSelector(state => state.registerForm);
    const { loading } = useSelector(state => state.view)
    const dispatch = useDispatch();
    const nextPage = (e) => {
        e.preventDefault();
        //setpage(page => page + 1);
        dispatch(checkPassport(passport.passportId));
    }
    return (
        <form>
            <h3> Pagina 1 </h3>
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
