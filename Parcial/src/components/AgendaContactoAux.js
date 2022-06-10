import React, { Fragment } from 'react'
import '../Styles.css'
import { Link } from "react-router-dom";

import Delete from "./Delete"

export const AgendaContactoAux = ({ contactos }) => {
    React.useEffect(() => {
        console.log("useEffect(); desde AgendaContactoAux")
        console.log(contactos)
    }, [])

    return (
        <Fragment>
            {
                !contactos ? 'no hay contactos' :
                    contactos.map((contacto, id) =>
                        <Fragment key={id}>
                            <div className="grid-item">
                                <img src={contacto.fotourl} alt="imagen" />
                            </div>
                            <div className="grid-item">{contacto.apellido}</div>
                            <div className="grid-item">{contacto.nombre}</div>
                            <div className="grid-item">{contacto.telefono}</div>
                            <div className="grid-item">{contacto.email}</div>
                            <div className="grid-item">
                                <Link to={`/formulario/${contacto.id}`}>
                                    <button className="btn btn-primary">Modificar
                                    </button>
                                </Link>
                            </div>
                            <div className="grid-item">
                                <button className="btn btn-danger" onClick={(e) => Delete(contacto.id)}> Eliminar</button>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    )

}

export default AgendaContactoAux;