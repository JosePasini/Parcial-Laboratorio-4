import React, { useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'


export const Formulario = () => {
    const [data, setData] = useState({
        id: null,
        apellido: '',
        nombre: '',
        email: '',
        telefono: 0,
        fotourl: '',
    })

    let { id } = useParams();
    let bandera = false;
    let method = 'POST'

    if (id) {
        data.id = Number(id)
        bandera = true;
        method = 'PUT'
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        setData(
            {
                ...data,
                [event.target.name]: event.target.value
            })
    }

    const respuestaServidor = (status) => {
        if (status >= 200 && status <= 300) {
            alert(`Operacion exitosa: ${status}`)
        } else {
            alert(`Error: ${status}`)
        }
    }

    const enviarDatos = async (event) => {
        try {
            event.preventDefault();
            data.telefono = Number(data.telefono)
            const requestOptions = {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
            if (bandera) {
                const url = 'http://168.194.207.98:8081/api_contacto/put_contacto.php'
                const resp = await fetch(url, requestOptions)
                respuestaServidor(resp.status);

            } else {
                const url = "http://168.194.207.98:8081/api_contacto/post_contacto.php"
                const resp = await fetch(url, requestOptions)
                respuestaServidor(resp.status);
            }

        } catch (e) {
            console.log("Error", e)
        }
    }

    return (
        <Fragment>
            <NavBar />
            <h1 align="center">Agregar Instrumento</h1>
            <form className="form-control col-md-8" onSubmit={enviarDatos}>
                <div className="col-md-2" align="center">
                    <input
                        placeholder="Ingrese apellido"
                        className="form-control"
                        name="apellido"
                        type="text"
                        required="requerido"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-2">
                    <input placeholder="Ingrese nombre"
                        className="form-control"
                        name="nombre"
                        type="text"
                        required="requerido"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-2">
                    <input placeholder="Ingrese email"
                        className="form-control"
                        name="email"
                        type="text"
                        required="requerido"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-2">
                    <input placeholder="Ingrese telefono"
                        className="form-control"
                        name="telefono"
                        type="number"
                        required="requerido"
                        onChange={handleInputChange}>
                    </input>
                </div>

                <div className="col-md-2">
                    <input placeholder="Ingrese url imagen"
                        className="form-control"
                        name="fotourl"
                        type="text"
                        required="requerido"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-2">
                    <input placeholder="Ingrese descripcion"
                        className="form-control"
                        name="descripcion"
                        type="text"
                        required="requerido"
                        onChange={handleInputChange}>
                    </input>
                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary" type="submit">Enviar
                    </button>
                </div>

            </form>
            <div className="col-md-2">
                <a href="/">
                    <button className="btn btn-secondary">Volver
                    </button>
                </a>
            </div>
        </Fragment>
    )
}

export default Formulario;