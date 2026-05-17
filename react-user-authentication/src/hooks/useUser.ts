import React from "react";
import { UserContext } from "../context/UserContext";
export function useUser(){
    const context = React.useContext(UserContext);

    if(context === undefined){
        throw new Error(" useUser debe usarse dentro de UserProvider");
    }
    return context;
}