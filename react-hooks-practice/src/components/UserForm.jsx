import { useState } from "react";

// Agregar usuarios
const EMPTY = { name: "", email: "", role: "", active: false };
export function UserForm({ onAdd }) {
  const [user, setUser] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!user.name.trim() || user.name.trim().length < 2)
      e.name = "Nombre requerido (mín. 2 caracteres)";
    if (!user.email.trim() || !/\S+@\S+\.\S+/.test(user.email))
      e.email = "Email válido requerido";
    if (!user.role.trim()) e.role = "El rol es requerido";
    return e;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({
      id: Date.now(),
      name: user.name.trim(),
      email: user.email.trim(),
      role: user.role.trim().toLowerCase(),
      active: user.active,
    });
    setUser(EMPTY);
    setErrors({});
  };
  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };
  const errorStyle = { color: "#dc3545", fontSize: "12px", marginTop: "2px" };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f8f9fa",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "24px",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Agregar usuario</h3>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        <div>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Nombre *"
            value={user.name}
            onChange={handleChange}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>
        <div>
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email *"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>
        <div>
          <input
            style={inputStyle}
            type="text"
            name="role"
            placeholder="Rol (ej: admin) *"
            value={user.role}
            onChange={handleChange}
          />
          {errors.role && <p style={errorStyle}>{errors.role}</p>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            name="active"
            id="active"
            checked={user.active}
            onChange={handleChange}
          />
          <label htmlFor="active">Usuario activo</label>
        </div>
      </div>

      <button
        type="submit"
        style={{
          marginTop: "14px",
          padding: "10px 24px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Agregar
      </button>
    </form>
  );
}
