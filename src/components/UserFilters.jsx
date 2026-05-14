
export function Filters({ search, onSearch, roleFilter, onRoleFilter, statusFilter, onStatusFilter, roles }){
    return(
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Buscar por nombre o correo..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        style={{ flex: "2 1 200px", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
 
      <select
        value={roleFilter}
        onChange={(e) => onRoleFilter(e.target.value)}
        style={{ flex: "1 1 120px", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
      >
        <option value="all">Todos los roles</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
 
      <select
        value={statusFilter}
        onChange={(e) => onStatusFilter(e.target.value)}
        style={{ flex: "1 1 120px", padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc" }}
      >
        <option value="all">Todos</option>
        <option value="active">Activos</option>
        <option value="inactive">Inactivos</option>
      </select>
    </div>
    )
}