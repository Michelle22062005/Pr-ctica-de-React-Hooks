import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);
export const ThemeProvider = ({ children })=>{
    const [theme, setTheme] = useState("light"); // Estado inicial
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    const value = { theme, toggleTheme}
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    ) 
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
    }
    return context;
}

//Componente 1
function Header(){
    const { theme } = useTheme();
    return(
        <header style={{background: theme === "light" ? "#f0f0f0" : "#222", padding: "1rem"}}>
            <p>Tema Actual: <strong>{theme}</strong></p>
        </header>
    )
}
//Componente 2
function Card(){
    const { theme } = useTheme();
    return(
        <div style={{
      background: theme === "light" ? "#fff" : "#444",
      color: theme === "light" ? "#000" : "#fff",
      padding: "1rem", margin: "1rem", borderRadius: "8px",
      border: "1px solid #ccc"
    }}>
      Soy una tarjeta
    </div>
    )
}
// Componente 3
function ToggleButton(){
    const { theme, toggleTheme } = useTheme();
    return(
        <button onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "1px solid #ccc",
        cursor: "pointer",
        borderRadius: "6px"
      }}>
        Cambiar a modo { theme === "light" ? "Oscuro" : "Claro"}
        </button>
    )
}

export default function ThemeApp() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "40px auto" }}>
         <h2> Tema claro y oscuro con Context API</h2>
      <ThemeProvider>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
          <Header />
          <Card />
          <ToggleButton />
        </div>
      </ThemeProvider>
    </div>
  );
}