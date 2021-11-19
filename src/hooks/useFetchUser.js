import { getUser } from "../helpers/getUser";
import { useState, useEffect } from "react";


export const useFetchUser = ( passport ) => {
    const [state, setstate] = useState(
        {
            user: [],
            loading:true,
        }
    );

    useEffect(() => {
        getUser(passport).then( usr => {
            console.log(usr);  
            setstate({user: usr,
                    loading: false,
                }); 
    });
    }, [passport])
    return state;
}