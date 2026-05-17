// estadisticas derivadas de los usuarios
export function StatsBar({ stats }){
   const items = [
    { label: "Total", value: stats.total, color: "#6c757d" },
    { label: "Activos", value: stats.active, color: "#28a745" },
    { label: "Inactivos", value: stats.inactive, color: "#dc3545" },
    { label: "Admins", value: stats.admins, color: "#007bff" },
  ];
  return(
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
      {items.map(({ label, value, color }) => (
        <div
          key={label}
          style={{
            flex: "1 1 100px",
            padding: "16px",
            borderRadius: "8px",
            background: color,
            color: "white",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>{value}</div>
          <div style={{ fontSize: "13px", opacity: 0.9 }}>{label}</div>
        </div>
      ))}
    </div>
  )
}