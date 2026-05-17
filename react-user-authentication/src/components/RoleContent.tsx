import { useUser } from "../hooks/useUser";

export function RoleContent() {
  const { user, isAuthenticated } = useUser();

  if (!isAuthenticated) return null;

  switch (user!.role) {
    case "admin":
      return (
        <div>
          <h3>Panel de administración</h3>
          <p>Tienes acceso total al sistema</p>
        </div>
      );

    case "student":
      return (
        <div>
          <h3>Panel del estudiante</h3>
          <p>Accede a tus cursos y materiales</p>
        </div>
      );

    case "guest":
      return (
        <div>
          <h3>Vista de invitado</h3>
          <p>Contenido limitado, inicia sesión para ver más</p>
        </div>
      );

    default:
      return null;
  }
}