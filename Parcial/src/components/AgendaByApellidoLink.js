import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// Componentes
import AgendaContactoAux from '../components/AgendaContactoAux'
import Indice from '../components/Indice'
import NavBar from './NavBar';

export const AgendaByApellidoLink = () => {
    const { letra } = useParams();
    console.log("LETRA:::", letra)
    const [data, setData] = useState()
    const buscarData = async () => {
        if (letra) {
            const urlGetByApe = `http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=${letra}`
            const resp = await fetch(urlGetByApe, { method: 'GET', contentType: 'application/json' })
            const data = await resp.json();
            setData(data)
            return data
        }
    }
    useEffect(() => {
        buscarData();
    }, [letra]);

    return (
        <Fragment>
            <NavBar />
            <div className="container">

                <div className="grid-container-agenda">
                    <div className="grid-item-agenda">Foto</div>
                    <div className="grid-item-agenda">Apellido</div>
                    <div className="grid-item-agenda">Nombre</div>
                    <div className="grid-item-agenda">Teléfono</div>
                    <div className="grid-item-agenda">Email</div>
                    <div className="grid-item-agenda">Modificar</div>
                    <div className="grid-item-agenda">Eliminar</div>

                    {
                        !data ?
                            <h3>No se encontraron coincidencias con la letra</h3>
                            :
                            <AgendaContactoAux contactos={data} />
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

export default AgendaByApellidoLink;