import { useOutletContext } from "react-router-dom";
import { registrarUsuario } from "../services/services.usuarios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Registro() {

    const navigate = useNavigate();


    const [usuario,setUsuario] = useOutletContext();
    const [error, setError] = useOutletContext();


    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validar = async (e) => {
        e.preventDefault();
        if (alias != '' && password != '' && email != '' && nombre != '' && apellidos != '' && passwordPattern.test(password) && emailPattern.test(email)) {
            try {
                const data = await registrarUsuario(nombre, apellidos, alias, email, password);
                setUsuario(data);
                navigate("/examenes");
            } catch (error) {
                setError(error);
            }
        }if(!passwordPattern.test(password)){
            setError(new Error('Tu contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número. Tu email debe ser válido.'));
            console.log(password)
        }if(!emailPattern.test(email)){
            
            setError(new Error('Tu email debe ser válido.'));
        }
    }

    return (
        <div>
            <h1>Registro</h1>
            <form>
                <label>Nombre</label>
                <input type="nombre" onChange={(e) => setNombre(e.target.value)} id="nombre" name="nombre" required></input>
                <label>Apellidos</label>
                <input type="apellidos" onChange={(e) => setApellidos(e.target.value)} id="apellidos" name="apellidos" required></input>
                <label>Alias</label>
                <input type="alias" onChange={(e) => setAlias(e.target.value)} id="alias" name="alias" required></input>
                <label>Email</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)} id="email" name="email" required></input>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" required></input>

                <button onClick={(e) => validar(e)}>LogIn</button>
            </form>
            {error ? <h3>{error.message}</h3> : ''}
        </div>
    )
}