# React Hooks Practice 🪝

Un proyecto completo de práctica para aprender y dominar los hooks de React. Incluye **15+ componentes interactivos** que demuestran diferentes conceptos de React Hooks, desde básicos hasta avanzados: formularios, estado local, persistencia, Context API, useReducer, consumo de APIs, y más.

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework principal con hooks avanzados
- **Vite** - Build tool y dev server rápido
- **JavaScript (ES6+)** - Lenguaje de programación moderno
- **Context API** - Estado global sin prop drilling
- **localStorage** - Persistencia de datos del lado cliente
- **Fetch API** - Consumo de APIs externas
- **CSS** - Estilos modernos y responsive
- **ESLint** - Linting y code quality

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── StatsBar.jsx        # Estadísticas de usuarios
│   ├── UserFilters.jsx     # Filtros para usuarios
│   ├── UserForm.jsx        # Formulario de usuario
│   └── UserTable.jsx       # Tabla de usuarios
├── exercises/          # Componentes principales
│   ├── SmartCounter.jsx    # Contador inteligente
│   ├── RegisterForm.jsx    # Formulario de registro
│   ├── UserSearch.jsx      # Búsqueda de usuarios
│   ├── TodoApp.jsx         # Aplicación de tareas
│   ├── ThemeContextApp.jsx # Tema claro/oscuro con Context API
│   ├── AuthContextApp.jsx  # Autenticación simulada con Context API
│   ├── ContactForm.jsx     # Hook personalizado para formularios
│   ├── PostList.jsx        # Consumo de API con estados de carga y error
│   ├── UserDashboard.jsx   # Dashboard integrador de usuarios
│   ├── FocusInput.jsx      # Input con foco automático
│   ├── Timer.jsx           # Temporizador
│   ├── ShoppingCart.jsx    # Carrito de compras
│   ├── ProductFilter.jsx   # Filtro de productos
│   ├── TaskReducer.jsx     # Gestión de tareas con useReducer
│   └── UserList.jsx        # Lista de usuarios
├── hooks/             # Hooks personalizados
│   ├── useTask.js         # Gestión de tareas con localStorage
│   ├── useTaskState.js    # Estado del formulario de tareas
│   └── useLocalStorage.js # Hook para persistencia en localStorage
│   └── useLocalStorage.js # Hook para persistencia en localStorage
├── App.jsx           # Componente principal
├── main.jsx          # Punto de entrada
└── index.css         # Estilos globales
```

## 🎯 Componentes Desarrollados

### 1. SmartCounter

**Ubicación:** `src/exercises/SmartCounter.jsx`

Contador inteligente con funcionalidades avanzadas:

- Incremento/decremento básico
- Reset a cero
- Incremento personalizado
- Historial de operaciones
- Persistencia en localStorage

### 2. RegisterForm

**Ubicación:** `src/exercises/RegisterForm.jsx`

Formulario de registro con validación completa:

- Campos: Nombre, Email, Contraseña, Confirmar Contraseña
- Validación en tiempo real
- Mensajes de error específicos
- Estados de validación visual
- Prevención de envío con errores

**Validaciones implementadas:**

- Nombre requerido y formato válido
- Email con formato correcto
- Contraseña mínimo 8 caracteres
- Confirmación de contraseña

### 3. UserSearch

**Ubicación:** `src/exercises/UserSearch.jsx`

Sistema de búsqueda de usuarios:

- Búsqueda por nombre o rol
- Filtrado en tiempo real
- Sección separada para resultados
- Botón "Mostrar todos" independiente
- Datos mock incluidos

### 4. TodoApp

**Ubicación:** `src/exercises/TodoApp.jsx`

Aplicación completa de gestión de tareas:

- Crear nuevas tareas
- Marcar como completadas/pendientes
- Eliminar tareas
- Filtrado por estado (completadas/pendientes/todas)
- **Persistencia automática con localStorage**
- Validación de formularios
- Arquitectura con hooks personalizados

### 5. ThemeContextApp

**Ubicación:** `src/exercises/ThemeContextApp.jsx`

Sistema de tema claro/oscuro usando Context API:

- **Context API** para estado global del tema
- Alternar entre tema claro y oscuro
- Tres componentes que reaccionan al cambio de tema
- Indicador visual del tema actual
- Evita prop drilling con useContext

**Componentes incluidos:**

- Header con indicador de tema
- Card que cambia colores según tema
- Botón toggle para cambiar tema

### 6. AuthContextApp

**Ubicación:** `src/exercises/AuthContextApp.jsx`

Sistema de autenticación simulada con Context API:

- Context para estado de autenticación
- Login/logout simulado
- Protección de rutas basada en estado
- Gestión de usuario autenticado
- Interfaz condicional según estado de auth

### 7. ContactForm

**Ubicación:** `src/exercises/ContactForm.jsx`

Hook personalizado para formularios:

- Hook `useForm` genérico y reutilizable
- Validación automática de campos
- Manejo de estado del formulario
- Reset automático después del envío
- Mensajes de error personalizados

### 8. PostList

**Ubicación:** `src/exercises/PostList.jsx`

Consumo de API con manejo de estados:

- Hook `useFetch` personalizado
- Estados de carga, éxito y error
- Fetch a API externa (JSONPlaceholder)
- Manejo robusto de errores
- Loading states con indicadores visuales

### 9. UserDashboard

**Ubicación:** `src/exercises/UserDashboard.jsx`

Dashboard completo de gestión de usuarios:

- **Persistencia completa con localStorage**
- Estadísticas en tiempo real (useMemo)
- Sistema de filtros avanzado
- Formulario de agregar usuarios
- Tabla interactiva con acciones
- Arquitectura modular con componentes separados

**Funcionalidades:**

- Agregar nuevos usuarios
- Activar/desactivar usuarios
- Eliminar usuarios
- Filtrar por nombre/email/rol/estado
- Estadísticas automáticas
- Datos sobreviven recargas

### 10. FocusInput

**Ubicación:** `src/exercises/FocusInput.jsx`

Input con foco automático:

- useRef para referencia al input
- useEffect para foco automático
- Botón para enfocar manualmente
- Texto que muestra el valor actual
- Demostración de manipulación del DOM

### 11. Timer

**Ubicación:** `src/exercises/Timer.jsx`

Temporizador interactivo:

- Contador con useState y useEffect
- Intervalos con cleanup automático
- Botones de iniciar/detener/reiniciar
- Formato de tiempo legible
- Prevención de memory leaks

### 12. ShoppingCart

**Ubicación:** `src/exercises/ShoppingCart.jsx`

Carrito de compras funcional:

- Lista de productos con stock
- Agregar/quitar del carrito
- Cálculo automático de totales
- Gestión de inventario
- Estados de stock (disponible/sin stock)

### 13. ProductFilter

**Ubicación:** `src/exercises/ProductFilter.jsx`

Sistema de filtrado de productos:

- Filtros por categoría y precio
- Búsqueda por nombre
- Resultados dinámicos
- Interfaz intuitiva
- Estado sincronizado

### 14. TaskReducer

**Ubicación:** `src/exercises/TaskReducer.jsx`

Gestión de tareas con useReducer:

- useReducer para estado complejo
- Actions para agregar/editar/eliminar/completar
- Estado centralizado
- Patrón de reducer puro
- Comparación con useState múltiple

### 15. UserList

**Ubicación:** `src/exercises/UserList.jsx`

Lista de usuarios con funcionalidades:

- Fetch de datos de API externa
- Estados de carga y error
- Filtrado y búsqueda
- Interfaz responsive
- Manejo de datos asíncronos

## � Componentes Reutilizables

### StatsBar

**Ubicación:** `src/components/StatsBar.jsx`

Componente de estadísticas para el dashboard:

- Estadísticas calculadas automáticamente
- Diseño visual con colores diferenciados
- Total, activos, inactivos y administradores
- Layout responsive con flexbox

### UserFilters

**Ubicación:** `src/components/UserFilters.jsx`

Sistema de filtros para usuarios:

- Búsqueda por nombre o email
- Filtro por rol (select dropdown)
- Filtro por estado (activo/inactivo)
- Interfaz unificada y responsive

### UserForm

**Ubicación:** `src/components/UserForm.jsx`

Formulario para agregar usuarios:

- Validación completa de campos
- Estados de error específicos
- Reset automático después del envío
- Campos: nombre, email, rol, estado activo

### UserTable

**Ubicación:** `src/components/UserTable.jsx`

Tabla interactiva de usuarios:

- Renderizado condicional de filas
- Botones de acción (activar/desactivar/eliminar)
- Estados visuales diferenciados
- Callbacks para acciones del padre

### useLocalStorage

**Archivo:** `src/hooks/useLocalStorage.js`

Hook para persistencia automática en localStorage:

```jsx
const [value, setValue] = useLocalStorage(key, initialValue);
```

**Funcionalidades:**

- Sincronización automática con localStorage
- Estado local y persistencia simultánea
- Manejo robusto de errores
- Inicialización desde localStorage
- Actualización bidireccional

### useTask

**Archivo:** `src/hooks/useTask.js`

Hook para gestión completa de tareas:

```jsx
const { tasks, deleteTask, toggleCompleted, setTasks } = useTask();
```

**Funcionalidades:**

- Estado de tareas con localStorage
- Funciones CRUD completas
- Persistencia automática
- Manejo de errores

### useTaskState

**Archivo:** `src/hooks/useTaskState.js`

Hook para estado de formularios de tareas:

```jsx
const {
  task,
  errors,
  filter,
  handleChange,
  validateForm,
  resetTask,
  setFilter,
} = useTaskState();
```

**Funcionalidades:**

- Estado del formulario
- Validación de campos
- Manejo de cambios
- Reset del formulario

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Entrar al directorio
cd react-hooks-practice

# Instalar dependencias
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

### Vista previa del build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎨 Características Técnicas

### Persistencia de Datos

- **localStorage** para TodoApp y UserDashboard
- Hook `useLocalStorage` personalizado y reutilizable
- Datos sobreviven recargas de página
- Manejo robusto de errores
- Sincronización automática estado-almacenamiento

### Context API

- Tema claro/oscuro global
- Autenticación simulada
- Estado global sin prop drilling
- useContext para consumo de contextos
- Proveedores centralizados

### Gestión de Estado Avanzada

- useReducer para estado complejo
- Context API para estado global
- Custom hooks para lógica reutilizable
- Estados derivados con useMemo
- Optimización de re-renders

### Consumo de APIs

- Hook `useFetch` personalizado
- Estados de carga, éxito y error
- Manejo de errores robusto
- Loading states visuales
- Fetch a APIs externas

### Validación de Formularios

- Validación en tiempo real
- Mensajes de error específicos
- Estados visuales (colores, estilos)
- Prevención de envíos inválidos
- Hooks personalizados para formularios

### Arquitectura de Hooks

- Separación de responsabilidades
- Reutilización de lógica
- Estado centralizado
- Efectos secundarios manejados
- Composición de hooks

### Responsive Design

- Diseño adaptable
- Estilos CSS modernos
- Interfaz intuitiva

## 📚 Conceptos Aprendidos

### Hooks Básicos

- ✅ `useState` - Gestión de estado local
- ✅ `useEffect` - Efectos secundarios
- ✅ `useRef` - Referencias al DOM
- ✅ `useMemo` - Memorización de valores
- ✅ `useCallback` - Memorización de funciones

### Hooks Avanzados

- ✅ `useReducer` - Estado complejo con actions
- ✅ `useContext` - Consumo de Context API
- ✅ Custom Hooks - Lógica reutilizable

### Context API

- ✅ `createContext` - Creación de contextos
- ✅ `Context.Provider` - Proveedores de contexto
- ✅ `useContext` - Hook para consumir contexto
- ✅ Estado global sin prop drilling

### Formularios y Validación

- ✅ Formularios controlados
- ✅ Validación de datos en tiempo real
- ✅ Estados de error y éxito
- ✅ Manejo de eventos de formulario

### Persistencia y APIs

- ✅ localStorage API
- ✅ Fetch API con async/await
- ✅ Manejo de estados de carga
- ✅ Tratamiento de errores

### Arquitectura y Patrones

- ✅ Componentes funcionales
- ✅ Props y estado
- ✅ Composición vs herencia
- ✅ Separación de responsabilidades
- ✅ Reutilización de componentes

## 🔧 Próximas Mejoras

- [ ] Añadir tests unitarios
- [ ] Implementar TypeScript
- [ ] Añadir routing con React Router
- [ ] Conectar con API real (backend propio)
- [ ] Añadir más temas (no solo claro/oscuro)
- [ ] PWA (Progressive Web App)
- [ ] Internacionalización (i18n)
- [ ] Tema del sistema automático
- [ ] Modo offline con Service Workers

## 📝 Notas de Desarrollo

Este proyecto fue creado como ejercicio de aprendizaje de React Hooks. Cada componente demuestra diferentes patrones y técnicas de React moderno, desde el manejo básico de estado hasta la persistencia avanzada de datos.

## 🤝 Contribución

Siéntete libre de:

- Reportar bugs
- Sugerir mejoras
- Añadir nuevos componentes
- Mejorar la documentación

---

**Desarrollado con ❤️ usando React + Vite**
