import { useReducer, useState, useEffect, useRef } from "react";

const initialState = {
  tasks: [
    { id: 1, title: "Leer sobre useReducer", completed: true },
    { id: 2, title: "Construir un todo con reducer", completed: false },
    { id: 3, title: "Comparar con useState múltiples", completed: false },
  ],
  nextId: 4,
};

function reducer(state, action) {
  switch (action.type) {
    case "AGREGAR":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.nextId, title: action.payload.title, completed: false },
        ],
        nextId: state.nextId + 1,
      };
    case "COMPLETAR":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "EDITAR":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id
            ? { ...t, title: action.payload.title }
            : t
        ),
      };
    case "ELIMINAR":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case "ELIMINAR_COMPLETADAS":
      return {
        ...state,
        tasks: state.tasks.filter((t) => !t.completed),
      };
    default:
      return state;
  }
}

function TaskItem({ task, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const saveEdit = () => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== task.title) {
      dispatch({ type: "EDITAR", payload: { id: task.id, title: trimmed } });
    } else {
      setDraft(task.title);
    }
    setEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "COMPLETAR", payload: task.id })}
      />

      {editing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
            if (e.key === "Escape") { setDraft(task.title); setEditing(false); }
          }}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? "line-through" : "none", flex: 1 }}>
          {task.title}
        </span>
      )}

      {!task.completed && (
        <button onClick={() => setEditing(true)}>Editar</button>
      )}
      <button onClick={() => dispatch({ type: "ELIMINAR", payload: task.id })}>
        Eliminar
      </button>
    </div>
  );
}

export default function TaskReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    dispatch({ type: "AGREGAR", payload: { title: trimmed } });
    setInput("");
  };

  const completedCount = state.tasks.filter((t) => t.completed).length;

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h2>Ejercicio Reducer</h2>
      <p>{completedCount} de {state.tasks.length} completadas</p>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Nueva tarea..."
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {state.tasks.map((task) => (
          <TaskItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={() => dispatch({ type: "ELIMINAR_COMPLETADAS" })}
          style={{ marginTop: "16px" }}
        >
          Eliminar completadas ({completedCount})
        </button>
      )}
    </div>
  );
}