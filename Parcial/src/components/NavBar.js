import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
export const NavBar = () => {
    return (
        <Fragment>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Tabla de Contactos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/formulario">Nuevo contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Link to={"/formulario"} >
                    <button className="btn btn-primary">Crear Nuevo Contacto</button>
                </Link>
            </div>
        </Fragment>
    )
}
export default NavBar