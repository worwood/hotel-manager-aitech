import React from 'react'

import ReactExport from 'react-export-excel';
import { useSelector } from 'react-redux';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export const ExcelRangeInform = () => {
    
    const {dataRange} = useSelector(state => state.inform)
    return (
        <ExcelFile  filename={'Informe'} hideElement={true}>
            <ExcelSheet data={dataRange} name="Parte Diario">
                
                <ExcelColumn label="Doc. Número" value="pasaporte_CI"/>
                <ExcelColumn label="NACIONALIDAD" value="nacionalidad"/>
                <ExcelColumn label="FECHA DE INGRESO" value="check_in"/>
                <ExcelColumn label="FECHA DE SALIDA" value="check_out"/>                
                <ExcelColumn label="No Factura" value="factura"/>
                <ExcelColumn label="N° PIEZA" value="id_habitacion"/>
                <ExcelColumn label="NOMBRE Y APELLIDO" value="fullName"/>
                <ExcelColumn label="NIT" value="nit"/>
                <ExcelColumn label="SEXO" value="sexo"/>
                <ExcelColumn label="EDAD" value="edad"/>
                <ExcelColumn label="Celular" value="celular"/>
                <ExcelColumn label="DESTINO" value="destino"/>
                <ExcelColumn label="TEMP" value="temperatura"/>
                <ExcelColumn label="OXI" value="oxigenacion"/>
            </ExcelSheet>
        </ExcelFile>
    )
}
