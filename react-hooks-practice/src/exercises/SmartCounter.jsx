import { useState } from "react";
import '../App.css'

export default function SmartCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        if (count >= 10) {
            alert("El contador ha llegado a 10")
            setCount(10)
        }
    };
    const decrement = () => {
        setCount(count - 1)
        if (count < 1) {
            alert("No puede bajar mas")
            setCount(0)
        }
    }
    const reiniciar = () => {
        setCount(0)
    }

    return (
        <div style={{ margin: "20px auto", maxWidth: "320px", border: "1px solid #ccc", padding: "15px", borderRadius: "5px" }}>
            <h2>Contador inteligente</h2>
            <h2>{count}</h2>
            <button onClick={() => increment()} style={{ border: "none", backgroundColor: "blue", color: "white" }}
            >Incrementar</button>
            <button onClick={() => decrement()} style={{ border: "none", backgroundColor: "blue", color: "white", margin: "5px" }}>Disminuir</button>
            <button onClick={() => reiniciar()} style={{ border: "none", backgroundColor: "blue", color: "white" }}>Reiniciar</button>
        </div>
    )
}


