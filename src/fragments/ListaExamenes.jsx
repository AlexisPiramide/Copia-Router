import { useOutletContext } from "react-router-dom";
import { useState,useEffect } from "react";
import { getExamenes,getExamen, getRespuestas } from '../services/services.examenes'

import ExamenBoton from "./ExamenBoton"
import Examen from "./Examen";

export default function ListaExamenes() {

    const [usuario, setUsuario] = useOutletContext();
    const [examenes, setExamenes] = useState([])
    const [examenSelecionado,setExamenSelecionado] = useState(null)
    const [examen, setExamen] = useState(undefined)
    const [tipo, setTipo] = useState(null)

    const recogeExamenes = async () => {
        const result = await getExamenes(usuario)
        
        setExamenes(result)
    }

    useEffect(() => {
        if (usuario) {
            recogeExamenes()
        }
    }, [])


    const verExamen = async () => {
        const result = await getExamen(examenSelecionado, usuario)
        console.log(result)
        setExamen(result)
    }

    const verRespuestas = async () => {
        const result = await getRespuestas(examenSelecionado, usuario)
        setExamen(result)
    }

    useEffect(effect => {
        if (tipo === 'Examen') {
            verExamen()
        } else if (tipo === 'Respuestas') {
            verRespuestas()
        }
       
    }, [examenSelecionado])

    useEffect(() => {
        console.log(examen,'useEffect')
    },[examen])


    /**Si se pulsa el volver no puedes volver a pulsar el mismo examen, FIX */
    return (
        <>  
            
            {!examen ? examenes.map((examenDibujar, index) => (
                <ExamenBoton key={index} examenDibujar={examenDibujar} examenSelecionado={examenSelecionado} setExamenSelecionado={setExamenSelecionado} setExamen={setExamen} setTipo={setTipo} />
            ))

            : 
                <div>
                    <button onClick={()=>setExamen(undefined)}>Volver</button>
                    <Examen examen={examen}/>
                </div>
        
            }
        </>
    )

}
