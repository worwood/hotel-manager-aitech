import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import '../modal_forms.scss'
import { PageForm0 } from './PageForm0';
import { PageForm1 } from './PageForm1';
import { PageForm2 } from './PageForm2';
import { PageForm3 } from './PageForm3';



  Modal.setAppElement('#root');
export const FormModal = () => {
    
    const {modalOpen} = useSelector(state => state.ui);

    const dispatch = useDispatch();
    const { modalPage } = useSelector(state => state.ui)
  
    return (


        <Modal
            isOpen={modalOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={()=>{
                dispatch( uiCloseModal() )
            }}
            //style={customStyles}
            className="mymodal"
            overlayClassName="myoverlay"
        >
            <h2>Formulario de entradas y salidas</h2>
            <hr/>
            { modalPage === 0 && <PageForm0/>}
            { modalPage === 1 && <PageForm1/>}
            { modalPage === 2 && <PageForm2/>}
            { modalPage === 3 && <PageForm3/>}
            
        </Modal>
    )
}
