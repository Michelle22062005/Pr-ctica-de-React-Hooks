import { useUser } from "../hooks/useUser";

interface ProtectedViewProps {
    children: React.ReactNode;
}
export function ProtectedView({ children }: ProtectedViewProps) {
    const { isAuthenticated } = useUser();

    if (!isAuthenticated) {
        return <p>You must log in to see the content</p>
    }

    return <>{children}</>;
}