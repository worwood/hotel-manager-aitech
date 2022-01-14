import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';
import { FormModal } from '../components/register/FormModal';
import './register.scss'


export const RegisterView = () => {


    const dispatch = useDispatch();
    const handleFormButon = () => {
        dispatch( uiOpenModal() )
    }
    const [flujo, setFlujo] = useState([])
    useEffect(() => {
        getTopTen();
    }, [])
    const getTopTen = async () => {
        const response = await axios.post('https://hotelesaitechbeta.azurewebsites.net/api/flujos/inform10',{})
        setFlujo(response.data.data)
    }
    const removeData = (id) => {
        axios.post('https://hotelesaitechbeta.azurewebsites.net/api/flujos/delete',{id}).then(res => {
            const del = flujo.filter(e => id !== e.id)
            setFlujo(del)
        })
    }
    let headerElement = ['Id', 'Nombre Completo', 'Habitacion', 'Fecha-Hora', 'Temperatura','Oxigenacion', 'Borrar']
    const renderBody = () => {
        return flujo && flujo.map((e) => {
            return (
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.fullName}</td>
                    <td>{e.id_habitacion}</td>
                    <td>{e.Fecha_hora}</td>
                    <td>{e.temperatura}</td>
                    <td>{e.oxigenacion}</td>
                    <td className='opration'>
                        <button className='btn btn-danger' onClick={() => removeData(e.id)}>Borrar</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="container">
            <h1>Pagina de Registros</h1>
                <div className="container">
                    <button className="btn btn-primary btn-lg" onClick={ handleFormButon }>Registrar Nuevo ingreso</button>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col tabla-1' >
                            <h2 id='title-Table1'>Ultimos 10 ingresos</h2>
                            <table id='flujo-top-ten' className='tabla-1'>
                                <thead>
                                    <tr>
                                            {headerElement.map((key, index) =>{
                                                return(
                                                    <th key={index}> {key} </th>
                                                )
                                            })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderBody()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            <FormModal />
        </div>
    )
}
