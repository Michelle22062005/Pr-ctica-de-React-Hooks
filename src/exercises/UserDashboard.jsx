import { useMemo, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { StatsBar } from "../components/StatsBar";
import { Filters } from "../components/UserFilters";
import { UserForm } from "../components/UserForm";
import { UsersTable } from "../components/UserTable";

const INITIAL_USERS = [
  {
    id: 1,
    name: "Ana Pérez",
    email: "ana@email.com",
    role: "admin",
    active: true,
  },
  {
    id: 2,
    name: "Luis Gómez",
    email: "luis@email.com",
    role: "editor",
    active: true,
  },
  {
    id: 3,
    name: "Marta Ruiz",
    email: "marta@email.com",
    role: "viewer",
    active: false,
  },
  {
    id: 4,
    name: "Carlos Díaz",
    email: "carlos@email.com",
    role: "admin",
    active: false,
  },
];

export default function DashboardUsers() {
  const [users, setUsers] = useLocalStorage("Dashboard-users", INITIAL_USERS);

  // Estado de filtros (efímero, no se persiste)
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // ── Datos derivados con useMemo
  const stats = useMemo(
    () => ({
      total: users.length,
      active: users.filter((u) => u.active).length,
      inactive: users.filter((u) => !u.active).length,
      admins: users.filter((u) => u.role === "admin").length,
    }),
    [users],
  );

  // Lista de roles únicos para el selector de filtro
  const roles = useMemo(() => [...new Set(users.map((u) => u.role))], [users]);

  // Usuarios filtrados según búsqueda, rol y estado
  const filteredUsers = useMemo(() => {
    const term = search.toLowerCase();
    return users.filter((u) => {
      const matchSearch =
        !term ||
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term);
      const matchRole = roleFilter === "all" || u.role === roleFilter;
      const matchStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && u.active) ||
        (statusFilter === "inactive" && !u.active);
      return matchSearch && matchRole && matchStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  // ── Handlers ────────────────────────────────────────────────────────
  const handleAdd = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const handleToggle = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, active: !u.active } : u)),
    );
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "32px 20px",
        fontFamily: "sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h1 > Dashboard integrador de usuarios</h1>
      <p style={{ color: "#6c757d", marginBottom: "28px" }}>
        {users.length} usuarios · datos guardados en localStorage
      </p>

      {/* Estadísticas — calculadas con useMemo */}
      <StatsBar stats={stats} />

      {/* Formulario — maneja su propio estado local */}
      <UserForm onAdd={handleAdd} />

      {/* Filtros — estado controlado desde el padre */}
      <Filters
        search={search}
        onSearch={setSearch}
        roleFilter={roleFilter}
        onRoleFilter={setRoleFilter}
        statusFilter={statusFilter}
        onStatusFilter={setStatusFilter}
        roles={roles}
      />

      {/* Tabla — solo presenta datos, dispara callbacks */}
      <UsersTable
        users={filteredUsers}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
