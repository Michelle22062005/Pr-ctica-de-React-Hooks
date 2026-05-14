import { useRef, useEffect, useState } from "react";

export default function Buscador() {
  const inputRef = useRef(null);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if(inputRef.current){
        inputRef.current.focus();
    }
    
  }, []);

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div  style={{
                border: "1px solid #ccc",
                padding: "20px",
                maxWidth: "700px",
                margin: "20px auto",
                borderRadius: "8px",
            }}>
                <h2>Input con foco automático</h2>
      <input
        ref={inputRef}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
        style={{marginRight:"5px"}}
      />
      <button onClick={enfocarInput}>
        Enfocar buscador
      </button>
      <p>Texto actual: {texto}</p>
    </div>
  );
}