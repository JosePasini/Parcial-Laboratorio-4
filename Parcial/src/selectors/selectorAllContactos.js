const url = 'http://168.194.207.98:8081/api_contacto/get_contactos.php'
export const selectorAllContactos = async () => {
        const data = await fetch(url);
        const resp = await data.json();
        console.log("contactos resp:", resp)
        if (resp) return resp;
        return resp;
}

export default selectorAllContactos;
