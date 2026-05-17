
import { useUser } from "../hooks/useUser";
export function LoginButton() {
    const { login, isAuthenticated } = useUser();
    const handleLogin = () => {
        login({
            name: "Maria Perez",
            email: "maria.perez@example.com",
            role: "admin",
        })
    }
    if (isAuthenticated) return null;

    return(
        <button onClick={handleLogin}>
            Log in
        </button>
    )
}