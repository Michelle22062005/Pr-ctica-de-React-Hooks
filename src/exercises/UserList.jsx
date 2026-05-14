import { useState, useEffect } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);     // Estado para los datos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null);     // Estado de error

  useEffect(() => {
    const constroller= new AbortController();
    // Función asíncrona para obtener datos
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users",
            {signal: constroller.signal} // Agregar signal para abortar la solicitud si es necesario
        );

        // Validar respuesta HTTP
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data); // Guardar datos en el estado
      } catch (err) {
        if(err.name !== "AbortError") {
             setError(err.message); // Guardar mensaje de error
        }
      } finally {
        setLoading(false); // Finalizar estado de carga
      }
    };

    fetchData();
    return()=>{
        constroller.abort();
    }
  }, []); // [] asegura que se ejecute solo al montar el componente

  // Renderizado condicional
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return(
        <div style={{border: "1px solid #ccc", padding: "15px", borderRadius: "5px", margin: "20px auto", maxWidth: "500px"
        }}>
            <h2>Consumo de API con estados de carga y error</h2>
            <ul>{users.slice(0,8).map((user)=>(
                <li key={user.id}>{user.name} - {user.email} - {user.address.city}</li>
            ))}</ul>
        </div>
    )
}