import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { excelDaylyGenerator } from '../actions/informs';
import { DatePickerInform } from '../components/DatePickerInform';
import { ExcelDayly } from '../components/ExcelDayly';

export const InformesView = () => {
  const dispatch = useDispatch()
  const inform = useSelector(state => state.inform)
  const [date, setDate] = useState(new Date())
  const fecha=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  const handleFormButon = () => {
    dispatch(excelDaylyGenerator(fecha));
  }
  return (

      <div className="container">
          <h1>Pagina de Informes</h1>
          <div className="container-fluid">              
            <div className="row align-items-start justify-content-evenly">
              <div className="col">
                <DatePickerInform date = { date } setDate = { setDate } />
                {inform.readyToDownload ? <ExcelDayly date={fecha}/>:<></>}
                <button className="btn btn-primary btn-lg" onClick={ handleFormButon }>
                  Prue
                </button>
              </div>
              <div className="col">
                
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
