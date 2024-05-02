import { useEffect, useState } from "react";
import "../style/Pregunta.css"
import BotonPregunta from './BotonPregunta'
export default function preguntas({ pregunta, respuestas, setRespuestas, numeroPregunta, validar }) {

    const [selecionada, setSelecionada] = useState(null);

    const [resultado, setResultado] = useState(false);

    const comprobarRespuesta = () => {
        if (respuestas[numeroPregunta] == pregunta.respuesta) {
            setResultado(true)
        } else {
            setResultado(false)
        }

    }

    useEffect(comprobarRespuesta, [validar])
    
    return (
        <div className="secion-pregunta">
            <h2 className="Pregunta">{pregunta.texto}</h2>
            <ul>
                {pregunta.opciones.map((opcion, index) => (
                <BotonPregunta numeroPregunta={numeroPregunta} key={index} index={index} opcion={opcion} selecionada={selecionada} setSelecionada={setSelecionada} resultado={resultado} setRespuestas={setRespuestas} validar={validar}/>
            ))}
            </ul>

            <div className="seccion-resultado">
                {(!validar) ? <div /> : (resultado) ? <p style={{ color: 'green' }}>Respuesta Correcta: {pregunta.explicacion}</p> : <p style={{ color: 'red' }}>Respuesta Incorrecta, la respuesta era {pregunta.respuesta} porque {pregunta.explicacion}</p>}
            </div>
        </div>
    )


}