import '../style/ExamenBoton.css';

export default function ExamenBoton({ examenDibujar, setExamenSelecionado,setTipo }) {
    return (
        <div className={examenDibujar.fecha_fin ? 'acabado' : 'nuevo'}>
            <h1>Examen {examenDibujar.id}</h1>
            <h2>Fecha Creacion {new Date(examenDibujar.fecha_inicio).toLocaleString()}</h2>
            {examenDibujar.fecha_fin ? <h2>{new Date(examenDibujar.fecha_fin).toLocaleString()}</h2> : ''}

            {examenDibujar.fecha_fin ? <button id={examenDibujar.id} onClick={(e) => [setExamenSelecionado(e.target.id), setTipo('Respuestas')]}>Ver Respuestas</button> : <button id={examenDibujar.id} onClick={(e) => [setExamenSelecionado(e.target.id), setTipo('Examen')]}>Ver examen</button>}

        </div>
    );
}