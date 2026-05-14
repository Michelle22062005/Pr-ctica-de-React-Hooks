import { useState, useEffect } from "react";

//custom hook
function useFetch(url) {
    const [data, setData] = useState(null);     // Estado para los datos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null);     // Estado de error
    useEffect(() => {
        setData(null);
        setLoading(true);
        setError(null);

         const controller= new AbortController();
    // Función asíncrona para obtener datos
    const fetchData = async () => {
      try {
        const response = await fetch(url, {signal: controller.signal} // Agregar signal para abortar la solicitud si es necesario
        );
        // Validar respuesta HTTP
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
            }
        const json = await response.json();
        setData(json); // Guardar datos en el estado
      } catch (err) {
        if(err.name !== "AbortError") {
             setError(err.message); // Guardar mensaje de error
        }
      } finally {
        setLoading(false); // Finalizar estado de carga
      }
    };

    fetchData();
    return()=> controller.abort();
  }, [url]); // [] asegura que se ejecute solo al montar el componente
    return { data, loading, error };
    }

    //componentes
      const URLS = [
  "https://jsonplaceholder.typicode.com/posts",
"https://jsonplaceholder.typicode.com/users",];

export default function PostList() {
  const [url, setUrl] = useState(URLS[0]);
  const { data, loading, error } = useFetch(url);

    return(
        <div style={{border: "1px solid #ccc", padding: "15px", borderRadius: "5px", margin: "20px auto", maxWidth: "500px"
        }}>
            <h2>Hook personalizado para consumir APIs</h2>
            {/* Botones para demostrar que re-ejecuta al cambiar URL */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
        {URLS.map((u) => (
          <button
            key={u}
            onClick={() => setUrl(u)}
            style={{
              padding: "6px 14px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: url === u ? "bold" : "normal",
            }}
          >
            {u.includes("posts") ? "Posts" : "Usuarios"}
          </button>
        ))}
      </div>

      {/* Estados */}
      {loading && <p>Cargando datos...</p>}
      {error && <p style={{ color: "#e24b4a" }}>Error: {error}</p>}

      {/* Datos */}
      {data && (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {data.slice(0, 8).map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px 14px",
                marginBottom: "8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              <strong>{item.title ?? item.name}</strong>
              {item.email && <span style={{ color: "#888", fontSize: "13px" }}> — {item.email}</span>}
            </li>
          ))}
        </ul>
      )}
        </div>
    )
}