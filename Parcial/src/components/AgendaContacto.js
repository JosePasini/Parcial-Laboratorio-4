import React, { useEffect, useState, Fragment } from 'react'
import '../Styles.css'

// Componentes
import NavBar from '../components/NavBar'
import AgendaContactoAux from '../components/AgendaContactoAux'
import Indice from '../components/Indice'

// Selectores
import selectorAllContactos from '../selectors/selectorAllContactos'

export const AgendaContacto = () => {

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        const getContactos = async () => {
            const contactos = await selectorAllContactos();
            setContactos(contactos);
            return contactos;
        }
        getContactos();

    }, [])

    return (

        <Fragment>
            <NavBar />
            <div className="container">

                <div className="grid-container-agenda">
                    <div className="grid-item-agenda">Foto</div>
                    <div className="grid-item-agenda">Apellido</div>
                    <div className="grid-item-agenda">Nombre</div>
                    <div className="grid-item-agenda">Telefono</div>
                    <div className="grid-item-agenda">Email</div>
                    <div className="grid-item-agenda">Editar</div>
                    <div className="grid-item-agenda">Eliminar</div>
                    {
                        !contactos ? 'no hay contactos' :
                            <AgendaContactoAux contactos={contactos} />
                    }
                </div>
            </div>
            <div className="container">
                <h3>Búsqueda por Índice</h3>
                <Indice />
            </div>
        </Fragment>

    )
}

export default AgendaContacto;