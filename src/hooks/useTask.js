import { useState } from "react";
import { useEffect } from "react";

export function useTask() {
    const [tasks, setTasks] = useState([]);  
    const [isLoaded, setIsLoaded] = useState(false);

    // Cargar datos del localStorage al montar
    useEffect(() => {
        try {
            const savedTasks = localStorage.getItem("tasks");
            if (savedTasks) {
                const parsedTasks = JSON.parse(savedTasks);
                setTasks(parsedTasks);
                console.log("Tasks loaded from localStorage:", parsedTasks);
            } else {
                console.log("No tasks found in localStorage");
            }
        } catch (error) {
            console.error("Error loading tasks from localStorage:", error);
            setTasks([]);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Guardar en localStorage cuando tasks cambie (solo después de cargar)
    useEffect(() => {
        if (isLoaded) {
            try {
                localStorage.setItem("tasks", JSON.stringify(tasks));
                console.log("Tasks saved to localStorage:", tasks);
            } catch (error) {
                console.error("Error saving tasks to localStorage:", error);
            }
        }
    }, [tasks, isLoaded]);

    const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const toggleCompleted = (id) => {
        const updatedTasks = tasks.map((item) =>
            item.id === id
                ? { ...item, completed: !item.completed }
                : item
        );

        setTasks(updatedTasks);
    };
    return{
        tasks,
        deleteTask,
        toggleCompleted,
        setTasks
    }
}