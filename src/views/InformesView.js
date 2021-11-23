import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { excelDaylyGenerator, excelRangeGenerator } from '../actions/informs';
import { DatePickerInform } from '../components/DatePickerInform';
import { ExcelDayly } from '../components/ExcelDayly';
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { ExcelRangeInform } from '../components/ExcelRangeInform';
registerLocale('es', es)

export const InformesView = () => {
  const dispatch = useDispatch()
  const inform = useSelector(state => state.inform)
  const { loading } = useSelector(state => state.view);
  const [date, setDate] = useState(new Date())
  const [dateRange, setDateRange] = useState({date1:new Date(), date2:new Date()})
  const fecha=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  const beginDate = dateRange.date1.getFullYear()+'-'+(dateRange.date1.getMonth()+1)+'-'+dateRange.date1.getDate();
  const endDate = dateRange.date2.getFullYear()+'-'+(dateRange.date2.getMonth()+1)+'-'+dateRange.date2.getDate();
  const handleFormButon = () => {
    dispatch(excelDaylyGenerator(fecha));
  }
  const handleDownloadRangeButton = () => {
    dispatch(excelRangeGenerator({beginDate,endDate}))
  }
  return (

      <div className="container">
          <h1>Pagina de Informes</h1>
          <div className="container-fluid">              
            <div className="row align-items-start justify-content-evenly">
              <div className="col">
                <h6>Seleccione el dia del cual desea el informe</h6>
                <DatePickerInform date = { date } setDate = { setDate } />
                {inform.readyToDownload ? <ExcelDayly date={fecha}/>:<></>}
                <button 
                  className="btn btn-primary btn-lg mt-3" 
                  onClick={ handleFormButon }
                  disabled={loading}
                >
                  Descargar Informe Diario
                </button>
              </div>
              <div className="col">                  
                <h6>Seleccione el intervalo de fechas para el informe</h6>
                <label>Desde</label>
                <DatePicker 
                  locale="es" 
                  selected={dateRange.date1} onChange={(date1) => setDateRange({...dateRange,date1})} disabled = {loading}/>
                
                <label>Hasta:</label>
                <DatePicker 
                  locale="es" 
                  selected={dateRange.date2} onChange={(date2) => setDateRange({...dateRange,date2})} disabled = {loading}/>
                  
                <button 
                  className="btn btn-primary btn-lg mt-3" 
                  onClick={ handleDownloadRangeButton }
                  disabled={loading}
                >
                  Descargar Informe
                </button>
                {inform.readyToDownload2 ? <ExcelRangeInform/>:<></>}
              </div>
              <div className="col">
                
                
              </div>
            </div>
          </div>
          {/*
          <ExcelFile  filename="prueba" element={<button>Download Data With Styles</button>}>

              <ExcelSheet dataSet={multiDataSet} name="Employees">
              </ExcelSheet>
          </ExcelFile>*/}
          
      </div>

    )
}
