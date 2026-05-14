import { useState, useEffect} from "react"
import { useRef } from "react"

export default function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer=()=>{
        if(intervalRef.current !== null) return; // Evita iniciar múltiples intervalos
        intervalRef.current = setInterval(()=>{setTime((prevTime) => prevTime + 1);}, 1000);
    }
   const pauseTimer=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current = null;
   }

   const resetTimer= () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
   }
   useEffect(() =>{
    return () =>{clearInterval(intervalRef.current)}
   }, [])

    return(
        <div style={{ margin: "20px auto", maxWidth: "320px", border: "1px solid #ccc", padding: "15px", borderRadius: "5px", textAlign: "center" }}>
            <h2>Temporizador con pausa y reinicio</h2>
        
        <p style={{fontSize: "24px", fontWeight: "bold" }}>
        {time} segundos
        </p>
 
      <div>
        <button onClick={startTimer}>Iniciar</button>
        <button onClick={pauseTimer}>Pausar</button>
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
        </div>
    )
}