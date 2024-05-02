import { iniciarSesion } from "../services/services.usuarios.js";
import { useState } from "react";
import '../style/LogIn.css'
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate();
   

    const [usuario,setUsuario] = useOutletContext();
    const [error, setError] = useOutletContext();

    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
    

    const validar = async (e) => {
        e.preventDefault();
        
        if(alias != '' && password != ''){
            try {
                const data = await iniciarSesion(alias, password);
                if (data) {
                    setUsuario(data);
                    navigate("/examenes");
                } 
            } catch (error) {
                setError(error);
            }
        }
    }

    
    return (
        <div>
            <h1>Iniciar Sesion</h1>
            <form>
                <label>Email</label>
                <input type="alias" onChange={(e)=>setAlias(e.target.value)} id="alias" name="alias" required></input>
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} id="password" name="password" required></input>
                <button onClick={(e)=> validar(e)}>LogIn</button>
            </form>
            {error ? <h3>{error.message}</h3> : ''}
        </div>
        
    )
    
}