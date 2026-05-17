
import { useUser } from "../hooks/useUser";
export function LogoutButton() {
    const { logout, isAuthenticated } = useUser();
    const handleLogout = () => {
        logout();
    }
    if (!isAuthenticated) return null;

    return(
        <button onClick={handleLogout}>
            Log out
        </button>
    )
}