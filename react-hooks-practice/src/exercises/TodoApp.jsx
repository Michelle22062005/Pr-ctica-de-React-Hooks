import { useTask } from "../hooks/useTask";
import { useTaskState } from "../hooks/useTaskState";

export default function TodoApp() {
    const { tasks, deleteTask, toggleCompleted, setTasks } = useTask();
    const {
        task,
        errors,
        filter,
        handleChange,
        validateForm,
        resetTask,
        setFilter
    } = useTaskState();
  

    const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
});
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const newTask = {
            id: Date.now(),
            title: task.title.trim(),
            completed: task.completed,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        resetTask();
    };

    return (
        <div style={{border: "1px solid #ccc", padding: "15px", borderRadius: "5px"}}>
            <h2>Lista de Tareas</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Título de la tarea"
                    value={task.title}
                    onChange={handleChange}
                />
                {errors.title && <p>{errors.title}</p>}

                <input
                    type="checkbox"
                    name="completed"
                    checked={task.completed}
                    onChange={handleChange}
                />

                <button type="submit">Agregar tarea</button>
            </form>

            <div style={{ marginTop: "20px" }}>
                <h2>Filtrar Tareas</h2>
                <button onClick={(e) => setFilter("completed")} style={{ marginLeft: "10px", background:"#4CAF50", color:"white" }}>Tasks completadas</button>
                <button onClick={(e) => setFilter("pending")} style={{ marginLeft: "10px", background:"#f44336", color:"white" }}>Tasks pendientes</button>
                <button onClick={() => setFilter("all")} style={{ marginLeft: "10px", background:"#2196F3", color:"white" }}>Todas las tareas</button>

                {/* Lista filtrada */}
      <div>
        {filteredTasks.map((task) => (
          <p key={task.id}>
            {task.title} — {task.completed ? "Completada" : "Pendiente"}
          </p>
        ))}
      </div>
            </div>

            {tasks.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            textAlign: "center",
                        }}
                    >
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Completada</th>
                                <th>Acción</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tasks.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>
                                        {item.completed ? "Sí" : "No"}
                                    </td>
                                    
                                    <td>
                                        <button
                                            onClick={() =>
                                                toggleCompleted(item.id)
                                            }
                                        >
                                            {item.completed
                                                ? "Marcar pendiente"
                                                : "Marcar completada"}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deleteTask(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}