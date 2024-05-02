import URL from "./constante.js";

const iniciarSesion = async (alias,password) => {
    const data = await fetch(URL+"/api/usuario/login",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({alias:alias,password:password})
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Usuario o contraseña incorrectos');
    }

};

const registrarUsuario = async (nombre,apellidos,alias,email,password) => {
    const data = await fetch(URL+"/api/usuario/registro",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre:nombre,apellidos:apellidos,alias:alias,email:email,password:password})
    })
    if(data.ok){
        const json = await data.json();
        return json;
    }else{
        throw new Error('Error al registrar usuario');
    }

}

export { iniciarSesion, registrarUsuario };