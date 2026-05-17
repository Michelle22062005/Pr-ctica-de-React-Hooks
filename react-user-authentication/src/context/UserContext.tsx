import {createContext, useState, useEffect } from "react";
//Tipo de usuario
interface User {
    name: string;
    email: string;
    role: "admin" | "student" | "guest";
}
// Tipo de constexto
interface UserContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User) => void;
    logout: () => void;
}

//crear el contexto
export const UserContext = createContext<UserContextType | undefined>(undefined);

//Proveedor global
export const UserProvider=({children}: {children: React.ReactNode;}) => {
    const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

    useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
    
    //iniciar sesión
    const login = (userData: User) => {
        setUser(userData);
      
    };
    //cerrar sesion
    const logout = ()=>{
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, isAuthenticated: user != null, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}