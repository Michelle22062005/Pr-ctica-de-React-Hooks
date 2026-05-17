import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login =(name) => setUser({ name });
    const logout = () => setUser(null);
     
    const value = { user, login, logout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    return context;
}

//pantalla de login
function LoginScreen(){
    const { login } = useAuth();
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim()) login(name.trim());
    };
    return(
        <div style={{ display:"flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "40px auto" }}>
            <h2>Iniciar sesion</h2>
            <input 
            type="text" 
            placeholder="Escribe tu nombre" 
            value={name} 
            onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} 
            style={{padding:"8px 12px", borderRadius:"6px", border: "1px solid #ccc", fontSize: "14px"}}/>
            <button onClick={handleSubmit} style={{ padding: "8px 20px", borderRadius: "6px", cursor: "pointer" }}>Entrar</button>
        </div>
    )
}

// pantalla del Perfil
function ProfileScreen(){
    const { user, logout } = useAuth();
    return(
         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "2rem" }}>
      <h2>Perfil</h2>
      <p>Bienvenido, <strong>{user.name}</strong></p>
      <Greeting /> {/* Componente adicional que también accede al contexto */}
      <button
        onClick={logout}
        style={{ padding: "8px 20px", borderRadius: "6px", cursor: "pointer", marginTop: "1rem" }}
      >
        Cerrar sesión
      </button>
    </div>
    )
}

// 4. Componente extra que consume el contexto independientemente
function Greeting() {
  const { user } = useAuth();
  return (
    <p style={{ color: "#888", fontSize: "14px" }}>
      Sesión activa como: <em>{user.name}</em>
    </p>
  );
}
function AppContent() {
    const { user } = useAuth();
    return user ? <ProfileScreen /> : <LoginScreen />
}

export default function AuthApp(){
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "40px auto" }}>
            <h2>Autenticación simulada con Context API</h2>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </div>
    )
}