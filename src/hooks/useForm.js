import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    const handleInputChangeEasy = (e) => {

        setValues({
            ...values,
                [ e.name ] : e.label
        });

    }

    return [ values, handleInputChange,handleInputChangeEasy, reset ];

}
