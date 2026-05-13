import { useState } from "react";

export function useTaskState(){
     const [task, setTask] = useState({
        id: "",
        title: "",
        completed: false,
      
    });
    const [errors, setErrors] = useState({});
    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setTask((prevTask) => ({
            ...prevTask,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const resetTask = () => {
        setTask({ id: "", title: "", completed: false });
        setErrors({});
    };
    const validateForm = () => {
        const newErrors = {};

        if (!task.title.trim()) {
            newErrors.title = "El título es requerido";
        } else if (task.title.trim().length < 3) {
            newErrors.title = "El título debe tener al menos 3 caracteres";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    return{
        task,
        errors,
        filter,
        setFilter,
        handleChange,
        validateForm,
        resetTask
    }
}