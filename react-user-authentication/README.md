# react-user-authentication

Entregable: este repositorio contiene una pequeña app de ejemplo con React + TypeScript (Vite) que demuestra un contexto de usuario global y componentes que consumen ese estado.

## Ejecutar el proyecto

Requisitos: `node` (16+), `npm` o `pnpm`/`yarn`.

Instalar dependencias y levantar el servidor de desarrollo:

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Estructura breve

- **src/**: código fuente principal
  - **context/**: [UserContext.tsx](src/context/UserContext.tsx#L1-L80) — proveedor del estado de usuario
  - **hooks/**: [useUser.ts](src/hooks/useUser.ts#L1-L50) — custom hook para consumir el contexto
  - **components/**: botones y vistas que usan el estado global (`LoginButton.tsx`, `LogoutButton.tsx`, `Navbar.tsx`, `ProtectedView.tsx`, `RoleContent.tsx`, `UserProfile.tsx`)
  - **App.tsx**, **main.tsx**: punto de entrada y montaje del `UserProvider`

## Cómo está implementado el contexto

- Archivo principal: [src/context/UserContext.tsx](src/context/UserContext.tsx#L1-L80)
- Tipos: se define una interfaz `User` y una interfaz `UserContextType` que expone `{ user, isAuthenticated, login, logout }`.
- `UserProvider`: usa `useState` para mantener `user` y `useEffect` para persistir en `localStorage` cuando cambia (persistencia simple en el cliente).
- Funciones públicas:
  - `login(userData)` — asigna el usuario en memoria (y se persiste por el efecto).
  - `logout()` — borra el usuario.
- El provider exporta `<UserContext.Provider value={{ user, isAuthenticated: user != null, login, logout }}>` para envolver la aplicación.

Referencias de implementación: [src/context/UserContext.tsx](src/context/UserContext.tsx#L1-L80)

## Cómo consumen los componentes el estado global

- Se expone un custom hook `useUser()` en [src/hooks/useUser.ts](src/hooks/useUser.ts#L1-L50). Este hook encapsula `useContext(UserContext)` y lanza un error si se usa fuera del `UserProvider`.
- Ejemplos de consumo:
  - `LoginButton.tsx` usa `{ login, isAuthenticated }` para iniciar sesión con datos simulados y ocultarse cuando ya hay un usuario.
  - `LogoutButton.tsx` usa `{ logout, isAuthenticated }` para cerrar sesión y ocultarse si no hay usuario.
  - `Navbar.tsx` muestra el nombre del usuario cuando `isAuthenticated` es `true`.
  - `ProtectedView.tsx` verifica `isAuthenticated` y muestra un mensaje si no hay sesión.
  - `RoleContent.tsx` comprueba `user.role` para renderizar contenido condicional según el rol (`admin`, `student`, `guest`).
  - `UserProfile.tsx` muestra `user.name`, `user.email` y `user.role`.

Referencias: [src/hooks/useUser.ts](src/hooks/useUser.ts#L1-L50), [src/components](src/components)

### 1. ¿Qué problema resuelve Context API en React?

- Resuelve el prop drilling — pasar datos manualmente por múltiples niveles de componentes que no los necesitan, solo para que lleguen a un componente hijo profundo.

---

### 2. ¿Cuándo usarías Context API y cuándo no?

Menciona al menos:

- dos casos donde Context API sea una buena opción
- un caso donde Context API podría no ser la mejor herramienta

\*✅ Buena opción:

Estado de autenticación — como en este ejercicio, donde user lo necesitan Navbar, UserProfile, ProtectedView al mismo tiempo
Preferencias globales — tema oscuro/claro, idioma, configuración de UI

❌ No es la mejor herramienta:

## Estados que cambian muy frecuentemente como posición del mouse o un timer — porque cada cambio re-renderiza todos los consumidores del contexto

### 3. ¿Qué hace el componente `Provider` dentro de Context API?

Explica cómo permite compartir valores con los componentes hijos.

\*Envuelve la app y pone valores disponibles para todos sus hijos mediante value:
tsx<UserContext.Provider value={{ user, login, logout }}>
{children}
</UserContext.Provider>
Cualquier componente dentro del árbol puede leer esos valores sin recibir props.

---

### 4. ¿Para qué sirve `useContext`?

Explica cómo un componente puede consumir datos del contexto usando este hook.

\*Permite que un componente lea el valor actual del contexto:
`
const context = useContext(UserContext);`
Cuando el valor del contexto cambia, el componente se re-renderiza automáticamente con el nuevo valor.

---

### 5. ¿Qué riesgos tiene usar Context API para manejar estados que cambian constantemente?

Explica el impacto en re-renderizados y rendimiento.

\*Cada vez que el valor del contexto cambia, todos los componentes que lo consumen se re-renderizan, aunque no usen el dato que cambió:
user cambia
│
├── Navbar → re-renderiza ⚠️
├── UserProfile → re-renderiza ⚠️
├── RoleContent → re-renderiza ⚠️
└── ProtectedView → re-renderiza ⚠️
Para estados de alta frecuencia es mejor usar useReducer con memo, o una librería especializada como Zustand.

---

### 6. ¿Por qué puede ser útil crear un custom hook como `useUser`?

Explica cómo mejora la legibilidad, reutilización y validación del uso correcto del contexto.

\*Tres razones concretas:
// 1. LEGIBILIDAD — más limpio que useContext directo
const { user } = useUser();
// vs
const context = useContext(UserContext);
if (!context) throw new Error(...);
const { user } = context;

// 2. REUTILIZACIÓN — misma línea en cualquier componente
const { user, login, logout } = useUser();

// 3. VALIDACIÓN — lanza error si se usa fuera del Provider
if (context === undefined) {
throw new Error("useUser debe usarse dentro de un UserProvider");
}

---

### 7. ¿Qué diferencia hay entre estado local y estado global?

Da un ejemplo concreto de cuándo usarías cada uno.

Estado local Estado globalDónde
viveDentro de un componente En el contexto, disponible para todos
Hook useState useContext
Ejemplo concretoMostrar/ocultar un modal Usuario autenticado
``
// LOCAL — solo le importa a este componente
const [isOpen, setIsOpen] = useState(false);

// GLOBAL — múltiples componentes lo necesitan
const { user } = useUser();`
``## Notas finales

- El ejemplo está pensado para demostrar conceptos: tipos, provider, persistencia simple y consumo desde componentes. No es un sistema de autenticación listo para producción.

Si quieres, puedo:

- Añadir ejemplos de llamadas a un backend (login real).
- Proteger rutas con `react-router`.
- Añadir tests unitarios para el contexto y el hook.
