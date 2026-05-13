import { useState } from "react";
import { useEffect } from "react";
export default function UserSearch() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showAllUsers, setShowAllUsers] = useState(false);
    const [error, setError] = useState(null);

    const datas=[
        {id: 1, name: "Ana", role: "Frontend"},
        {id: 2, name: "Bob", role: "User"},
        {id: 3, name: "Charlie", role: "Moderator"},
    ]

    useEffect(()=>{

    },[datas])

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSearch = () => {
        if (!query.trim()) {
            setError("Por favor, escribe algo para buscar");
            return;
        }
        
        try {
            // Filtra el array localmente
            const resultados = datas.filter((user) => 
                user.name.toLowerCase().includes(query.toLowerCase()) || 
                user.role.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(resultados);
            setShowAllUsers(false); // Oculta la sección de "todos"
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleShowAll = () => {
        setShowAllUsers(true);
        setSearchResults([]); // Limpia resultados de búsqueda
        setQuery(""); // Limpia el input
        setError(null);
    }

    return(
        <div style={{ margin: "20px", maxWidth: "500px", margin: "20px auto", padding: "15px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Buscador de usuarios</h2>
            
            {/* SECCIÓN DE BÚSQUEDA */}
            <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#020101", borderRadius: "5px" }}>
                <h2>Buscar usuarios</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} style={{ display: "flex", alignItems: "center" }}>
                    <input 
                        type="search" 
                        placeholder="Search users..." 
                        value={query} 
                        onChange={handleInputChange}
                        style={{ padding: "8px", width: "70%", marginRight: "10px" }}
                    />
                    <button type="submit" style={{ padding: "8px 16px" }}>Search</button>
                </form>

                {/* Resultados de búsqueda */}
                {searchResults.length > 0 && (
                    <div style={{ marginTop: "15px" }}>
                        <h3>Resultados ({searchResults.length}):</h3>
                        <ul>
                            {searchResults.map((user) => (
                                <li key={user.id}>{user.name} - {user.role}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {searchResults.length === 0 && query && (
                    <p style={{ color: "orange" }}>No se encontraron usuarios</p>
                )}
            </div>

            {/* BOTÓN MOSTRAR TODOS */}
            <div style={{ marginBottom: "30px" }}>
                <button 
                    onClick={handleShowAll}
                    style={{ padding: "10px 20px", backgroundColor: "#020101", color: "white", cursor: "pointer", borderRadius: "4px" }}
                >
                    Mostrar todos los usuarios
                </button>
            </div>

            {/* SECCIÓN DE TODOS LOS USUARIOS */}
            {showAllUsers && (
                <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", backgroundColor: "#020101" }}>
                    <h2>Todos los usuarios ({datas.length})</h2>
                    <ul>
                        {datas.map((user) => (
                            <li key={user.id}>{user.name} - {user.role}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* ERRORES */}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
        </div>
    )
}