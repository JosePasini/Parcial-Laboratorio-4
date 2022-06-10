import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Delete = ( id ) => {
    console.log("ID:::", id)
    const deleteData = async () => {

        // eslint-disable-next-line no-restricted-globals
        let confirmed = confirm(`Seguro que desea eliminar el contacto con id ${id}`);

        if (id && confirmed) {
            console.log("ID:::", id)

            const idParam = Number(id)
            const urlDelete = `http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=${idParam}`
            const resp = await fetch(urlDelete, {
                method: 'DELETE',
                contentType: 'application/json'
            })
            if (resp.status >= 200 && resp.status <= 300) alert("Contacto eliminado satisfactoriamente",resp.status)
            
            return resp.body
        }

    }
    deleteData();

}
export default Delete;
