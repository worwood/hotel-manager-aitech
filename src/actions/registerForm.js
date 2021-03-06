import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { getUser } from "../helpers/getUser";
import { postRegister } from "../helpers/postRegister";
import { postUser } from "../helpers/postUser";
import { types } from "../types/types";
import { uiCloseModal, uiPage } from "./ui";
import { viewFinishLoading, viewStartLoading } from "./view";

const MySwal = withReactContent(Swal) 

export const checkPassport = (passport) =>{
    return (dispatch) => {
        dispatch( viewStartLoading())
        getUser(passport).then((user)=>{ 
            if (user) {
                

                dispatch(registerPassport(user))                
                dispatch( viewFinishLoading())                
                dispatch( uiPage(2))
            }
            else {    
                dispatch(registerNewPassport(passport))         
                dispatch( viewFinishLoading())                
                dispatch( uiPage(2))
            }
        })
    }
}

export const registerPostUser = (user) => {
    
    return (dispatch) => {
        dispatch( viewStartLoading())
        postUser(user).then(
            (user) => {
                dispatch(registerUser(user));
                dispatch( viewFinishLoading());
                dispatch( uiPage(3)); 

            }
        )
    }

}

export const registerPost = (reg) => {
    
    
    return (dispatch) => {
        
        dispatch( viewStartLoading());
        postRegister(reg)
            .then(
            () => {
                MySwal.fire({
                    title: <strong>Registro Exitoso</strong>,
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                  })
                if(reg.numberPeople === 1 || reg.numberPeople === '1'){
                    dispatch( viewFinishLoading());
                    dispatch( uiPage(0));
                    dispatch( registerClean() );
                    dispatch( uiCloseModal() );
                }
                else{
                    dispatch( viewFinishLoading());
                    dispatch( uiPage(1));
                    dispatch( registerCleanPartialy() );
                    dispatch( registerReduceNumber() );


                }

            }
        ).catch()
    }

}
export const registerInitial = (reg) => ({
    type: types.registerInitial,
    payload: reg
});

export const registerNewPassport = (passport) => ({
    type: types.registerNewPassport,
    payload: {
        passport
    }
});

export const registerPassport = (user) => ({
    type: types.registerPassport,
    payload: user
    
});

export const registerUser = (user) => ({
    type: types.registerUser,
    payload: user
});

export const registerInOut = (inOut) => ({
    type: types.registerInOut,
    payload: inOut
});

export const registerReduceNumber = () => ({
    type: types.registerReduceNumber,
});

export const registerCleanPartialy = () => ({
    type: types.registerCleanPartialy,
});

export const registerClean = () => ({
    type: types.registerClean,
});
