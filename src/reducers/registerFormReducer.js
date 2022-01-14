import { types } from "../types/types";


const initialState = {
    maxNumber: 1,
    numberPeople: 1,
    passaporte: '',
    newReg: true,
    id: null,
    nombre: '',
    apellidos: '',
    correo: '',
    edad: '',
    genero: '',
    nacionalidad: '',
    celular: '',
    temperature: '',
    oxygenation: '',
    room: '',
    invoice: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    inOutVal: '',
    nit: '',
}

export const registerFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.registerInitial:
            return {
                ...state,
                numberPeople: action.payload.numberPeople,
                maxNumber: action.payload.numberPeople,
                room: action.payload.habitacion,
                nit: action.payload.nit,
                invoice: action.payload.noFactura,                
                destination: action.payload.destino,
                checkIn: action.payload.checkInVal,
                checkOut: action.payload.checkOutVal,
            }; 

        case types.registerNewPassport:
            
            return {
                ...state,
                passaporte: action.payload.passport
            };
        case types.registerPassport:
            
            return {
                ...state,
                newReg: false,
                passaporte: action.payload.pasaporte_CI,
                nombre: action.payload.nombres,
                apellidos: action.payload.apellidos,
                correo: action.payload.email,
                edad: action.payload.edad,
                genero: action.payload.sexo,
                nacionalidad: action.payload.nacionalidad,
                celular: action.payload.celular,
                nit: action.payload.nit,
                id: action.payload.id,
            };
        case types.registerUser:
            
            return {
                ...state,
                newReg: false,
                id: action.payload.id,
                nombre: action.payload.nombres,
                apellidos: action.payload.apellidos,
                correo: action.payload.nacionalidad,
                edad: action.payload.email,
                genero: action.payload.sexo,
                nacionalidad: action.payload.nacionalidad,
                celular: action.payload.celular
            };
            
        case types.registerInOut:
            
            return {
                ...state,
                temperature: action.payload.temperature,
                oxygenation: action.payload.oxygenation,
                room: action.payload.room,
                invoice: action.payload.invoice,
                destination: action.payload.destination,
                inOutVal: action.payload.inOutVal
            };
        case types.registerClean:
        
            return initialState;
        
        case types.registerCleanPartialy:        
            return {...state,
                        passaporte: '',
                        newReg: true,
                        id: null,
                        nombre: '',
                        apellidos: '',
                        correo: '',
                        edad: '',
                        genero: '',
                        nacionalidad: '',
                        celular: '',
                        temperature: '',
                        oxygenation: '',
                        inOutVal: '',              
                   };
        case types.registerReduceNumber:
             
            return {...state,
                        numberPeople: state.numberPeople-1
                    };
        default:
            return state;
    }
}