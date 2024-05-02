import React, { useState } from 'react'
import Pregunta from './Pregunta'
import { postRespuestas } from '../services/services.examenes'
import { useOutletContext } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export default function Examen({ examen}) {
    const navigate = useNavigate();

    const [usuario] = useOutletContext();
    const [respuestas, setRespuestas] = useState([])
    

    const enviarRespuestas = async (e) => {
        e.preventDefault()
        const result = await postRespuestas(respuestas, examen.id, usuario)
        if (result) {
            navigate("/examenes");
        }

    }
        
    return (
        <>

            {examen != undefined ? examen.preguntas.map((pregunta, index) => (
                <Pregunta pregunta={pregunta} respuestas={respuestas} setRespuestas={setRespuestas} numeroPregunta={index} key={index} />
            )) : ''}
            {examen != undefined ? (respuestas.length !== examen.preguntas.length) ? <button style={{ backgroundColor: 'gray' }}>Enviar Respuestas</button> : <button onClick={(e) => enviarRespuestas(e)} disabled={validar} style={{ backgroundColor: validar ? 'gray' : '#007bff' }}>Enviar Respuestas</button> : ''}

        </>
    )
}