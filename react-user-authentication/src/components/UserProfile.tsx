import { useUser } from "../hooks/useUser";
export function UserProfile() {
    const { user, isAuthenticated } = useUser();

    if(!isAuthenticated){
        return <p>There is not authenticated user</p>
    }
    return (
        <div>
            <h2>Perfil de usuario</h2>
            <p>Nombre: {user!.name}</p>
            <p>Email: {user!.email}</p>
            <p>Rol: {user!.role}</p>
        </div>
    )

}