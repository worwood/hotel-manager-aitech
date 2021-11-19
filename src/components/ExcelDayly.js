import React from 'react'
import ReactExport from 'react-export-excel';
import { useSelector } from 'react-redux';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
export const ExcelDayly = ({date}) => {

    const {data} = useSelector(state => state.inform)


    return (
                <ExcelFile  filename={'Informe-'+date} hideElement={true}>
                    <ExcelSheet data={data} name="Parte Diario">                        
                        <ExcelColumn label="CHECK IN"
                                    value={(col) => col.entrada_salida ? col.fecha : ""}/>
                        <ExcelColumn label="CHECK OUT"
                                    value={(col) => col.entrada_salida ? "" : col.fecha}/>
                        <ExcelColumn label="N° PIEZA" value="id_habitacion"/>
                        <ExcelColumn label="NOMBRE Y APELLIDO" value="fullName"/>
                        <ExcelColumn label="SEXO" value="sexo"/>
                        <ExcelColumn label="NACIONALIDAD" value="nacionalidad"/>
                        <ExcelColumn label="EDAD" value="edad"/>
                        <ExcelColumn label="Celular" value="celular"/>
                        <ExcelColumn label="DESTINO" value="destino"/>
                        <ExcelColumn label="TEMP" value="temperatura"/>
                        <ExcelColumn label="OXI" value="oxigenacion"/>
                        <ExcelColumn label="Doc. Número" value="pasaporte_CI"/>
                        <ExcelColumn label="No Factura" value="factura"/>
                    </ExcelSheet>
                </ExcelFile>
    )
}