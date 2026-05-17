
import { useUser } from "../hooks/useUser";
export function Navbar(){
    const { user, isAuthenticated } = useUser();

    return(
        <nav>
            {isAuthenticated ?(
                <span>Bienvenido, {user!.name}</span>
            ) : (
                <span>No has iniciado sesión</span>
            )}
        </nav>
    )

}