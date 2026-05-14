
export function UsersTable({ users, onToggle, onDelete }) {
  if (users.length === 0) {
    return <p style={{ color: "#6c757d", textAlign: "center", marginTop: "20px" }}>No hay usuarios que coincidan.</p>;
  }
 
  const th = { padding: "10px 14px", background: "#343a40", color: "white", textAlign: "left" };
  const td = { padding: "10px 14px", borderBottom: "1px solid #dee2e6" };
 
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Nombre</th>
            <th style={th}>Email</th>
            <th style={th}>Rol</th>
            <th style={th}>Estado</th>
            <th style={th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ background: user.active ? "white" : "#f8f9fa" }}>
              <td style={td}>{user.name}</td>
              <td style={td}>{user.email}</td>
              <td style={td}>
                <span style={{
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  background: user.role === "admin" ? "#cce5ff" : "#e2e3e5",
                  color: user.role === "admin" ? "#004085" : "#383d41",
                }}>
                  {user.role}
                </span>
              </td>
              <td style={td}>
                <span style={{ color: user.active ? "#28a745" : "#dc3545", fontWeight: 500 }}>
                  {user.active ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td style={{ ...td, display: "flex", gap: "8px" }}>
                <button
                  onClick={() => onToggle(user.id)}
                  style={{
                    padding: "4px 10px", borderRadius: "4px", border: "none", cursor: "pointer",
                    background: user.active ? "#ffc107" : "#28a745", color: "white", fontSize: "12px",
                  }}
                >
                  {user.active ? "Desactivar" : "Activar"}
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  style={{
                    padding: "4px 10px", borderRadius: "4px", border: "none", cursor: "pointer",
                    background: "#dc3545", color: "white", fontSize: "12px",
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}