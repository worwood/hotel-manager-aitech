import React, { useState } from 'react'
import Modal from 'react-modal';
import './modal_forms.scss'



  Modal.setAppElement('#root');
export const FormModal = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const closeModal = () => {
        setIsOpen(false);
    }
    return (


        <Modal
            isOpen={isOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            //style={customStyles}
            className="mymodal"
            overlayClassName="myoverlay"
        >
            <h2>Formulario de entradas y salidas</h2>
            <hr/>
            <form>
                <div className="mb-2">
                    <label htmlFor="ci-pasaporte" className="form-label-sm">CI o Pasaporte</label>
                    <input type="text" className="form-control" id="ci-pasaporte" placeholder="00000000-00" autoFocus={true} />
                </div>
                <div className="mb-2">
                    <label htmlFor="nombres" className="form-label-sm">Nombres</label>
                    <input type="text" className="form-control" id="nombres" placeholder="" disabled/>
                </div>
                <div className="mb-2">
                    <label htmlFor="apellidos" className="form-label-sm">Apellidos</label>
                    <input type="text" className="form-control" id="apellidos" placeholder="" disabled/>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="edad" className="form-label-sm">Edad</label>
                            <input type="text" className="form-control" id="edad" placeholder="" disabled/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="sexo" className="form-label-sm">Sexo</label>
                            <input type="text" className="form-control" id="sexo" placeholder="" disabled/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="nacionalidad" className="form-label-sm">Nacionalidad</label>
                            <input type="text" className="form-control" id="nacionalidad" placeholder="" disabled/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="celular" className="form-label-sm">Celular</label>
                            <input type="text" className="form-control" id="celular" placeholder="" disabled/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="temperatura" className="form-label-sm">Temperatura</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="temperatura" placeholder="" />
                            <span className="input-group-text" id="basic-addon1">°C</span>
                        </div>
                    </div>
                    <div className="col">
                            <label htmlFor="oxigenacion" className="form-label-sm">Oxigenacion</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="oxigenacion" placeholder="" />
                            <span className="input-group-text" id="basic-addon1">%</span>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="habitacion" className="form-label-sm">Habitacion</label>
                            <input type="text" className="form-control" id="habitacion" placeholder="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-2">
                            <label htmlFor="factura" className="form-label-sm">No de Factura</label>
                            <input type="text" className="form-control" id="factura" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="destino" className="form-label-sm">Destino</label>
                    <input type="text" className="form-control" id="destino" placeholder=""/>
                </div>                
                <div className="mb-4">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Entrada</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Salida</label>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary btn-lg ">
                        Registrar
                    </button>
                </div>

            </form>
        </Modal>
    )
}
