import React from 'react';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { useSelector } from 'react-redux';
registerLocale('es', es)

export const DatePickerInform = ({date, setDate}) => {
    const { loading } = useSelector(state => state.view);
    
    return (
        <>
            <DatePicker locale="es" selected={date} onChange={(date) => setDate(date)} disabled = {loading}/>
        </>
    )
}
