import { useState, } from "react";

// custom hook
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const [ errors, setErrors] = useState({});

    //actualiza un cmapo dinamicamente por su name
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        //limpiar error al escribir
        setErrors((prev) => ({ ...prev, [name]: "" }));
    }
      // Valida que ningún campo esté vacío, retorna true si todo es válido
      const validate = () =>{
        const newErrors = {};
        Object.keys(values).forEach((key) => {
            if(!values[key].trim()) newErrors[key] = "Este campo es requerido";
            if(key === "email" && values[key].trim() && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values[key])){
                newErrors[key] = "Email no es válido";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      }
      //Reinicia valores y errores al estado inicial
      const reset =() =>{ 
        setValues(initialValues);
        setErrors({});
      }
    return { values, errors, handleChange, validate, reset };

}
// Formilario de contacto
const INITIAL_FORM = { name: "", email: "", message: "" };
export default function ContactForm() {
    const { values, errors, handleChange, validate, reset } = useForm(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validate()) return;
        setSubmitted({ ...values });
        reset();
    };
    const inputStyle = (field) => ({
    padding: "8px 12px",
    borderRadius: "6px",
    border: `1px solid ${errors[field] ? "#e24b4a" : "#ccc"}`,
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  });

  const errorStyle = {
    color: "#e24b4a",
    fontSize: "12px",
    marginTop: "4px",
  };
  return(
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Hook personalizado para formularios</h2>
        <div style={{marginBottom: "1rem"}}>
            <label>Nombre</label>
            <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="tu nombre" style={inputStyle("name")} />
            {errors.name && <div style={errorStyle}>{errors.name}</div>}
        </div>
        <div style={{marginBottom: "1rem"}}>
            <label>Email</label>
            <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="tu@gmail.com" style={inputStyle("email")} />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>
        <div style={{marginBottom: "1rem"}}>
            <label>Mensaje</label>
            <textarea name="message" value={values.message} onChange={handleChange} placeholder="Escribe un mensaje" style={inputStyle("message")} />
            {errors.message && <div style={errorStyle}>{errors.message}</div>}
        </div>
        {/* Acciones */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={handleSubmit} style={{ padding: "8px 20px", cursor: "pointer", borderRadius: "6px" }}>
          Enviar
        </button>
        <button onClick={reset} style={{ padding: "8px 20px", cursor: "pointer", borderRadius: "6px" }}>
          Limpiar
        </button>
      </div>
      {/* Datos enviados */}
      {submitted && (
        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#eaf3de", borderRadius: "8px" }}>
          <strong>Datos enviados:</strong>
          <p><strong>Nombre:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Mensaje:</strong> {submitted.message}</p>
        </div>
      )}
    </div>
  )
}