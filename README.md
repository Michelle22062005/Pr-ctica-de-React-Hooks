# React Hooks Practice 🪝

Un proyecto de práctica para aprender y dominar los hooks de React. Incluye varios componentes interactivos que demuestran diferentes conceptos de React Hooks, formularios, estado local y persistencia de datos.

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool y dev server
- **JavaScript (ES6+)** - Lenguaje de programación
- **CSS** - Estilos
- **localStorage** - Persistencia de datos
- **ESLint** - Linting y code quality

## 📁 Estructura del Proyecto

```
src/
├── exercises/          # Componentes principales
│   ├── SmartCounter.jsx    # Contador inteligente
│   ├── RegisterForm.jsx    # Formulario de registro
│   ├── UserSearch.jsx      # Búsqueda de usuarios
│   └── TodoApp.jsx         # Aplicación de tareas
├── hooks/             # Hooks personalizados
│   ├── useTask.js         # Gestión de tareas con localStorage
│   ├── useTaskState.js    # Estado del formulario de tareas
│   ├── useFetch.js        # Hook para fetch (en desarrollo)
│   └── useForm.js         # Hook genérico para formularios (en desarrollo)
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

## 🪝 Hooks Personalizados

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

- **localStorage** para TodoApp
- Datos sobreviven recargas de página
- Manejo robusto de errores
- Logs de debug en consola

### Validación de Formularios

- Validación en tiempo real
- Mensajes de error específicos
- Estados visuales (colores, estilos)
- Prevención de envíos inválidos

### Arquitectura de Hooks

- Separación de responsabilidades
- Reutilización de lógica
- Estado centralizado
- Efectos secundarios manejados

### Responsive Design

- Diseño adaptable
- Estilos CSS modernos
- Interfaz intuitiva

## 📚 Conceptos Aprendidos

- ✅ `useState` - Gestión de estado local
- ✅ `useEffect` - Efectos secundarios
- ✅ Custom Hooks - Lógica reutilizable
- ✅ Formularios controlados
- ✅ Validación de datos
- ✅ localStorage API
- ✅ Manejo de eventos
- ✅ Props y estado
- ✅ Componentes funcionales
- ✅ JSX y expresiones

## 🔧 Próximas Mejoras

- [ ] Completar hooks `useFetch` y `useForm`
- [ ] Añadir tests unitarios
- [ ] Implementar TypeScript
- [ ] Añadir routing con React Router
- [ ] Conectar con API real
- [ ] Añadir autenticación
- [ ] Tema oscuro/claro
- [ ] PWA (Progressive Web App)

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
