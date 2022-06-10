import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Indice = () => {
    return (
        <Fragment>
            <div className="grid-container">
                <div className="grid-item"><Link to={`/getByApellido/A`}>A</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/B`}>B</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/C`}>C</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/D`}>D</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/E`}>E</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/F`}>F</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/G`}>G</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/H`}>H</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/I`}>I</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/J`}>J</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/K`}>K</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/L`}>L</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/M`}>M</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/N`}>N</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/Ñ`}>Ñ</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/O`}>O</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/P`}>P</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/Q`}>Q</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/R`}>R</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/S`}>S</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/T`}>T</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/U`}>U</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/V`}>V</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/W`}>W</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/X`}>X</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/Y`}>Y</Link></div>
                <div className="grid-item"><Link to={`/getByApellido/Z`}>Z</Link></div>
            </div>
            <div>
                <a href="/">
                    <button className="btn btn-secondary">Volver

                    </button>
                </a>
            </div>
        </Fragment>
    )
}

export default Indice;
