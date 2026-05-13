import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(form.name.trim())) {
            newErrors.name = "Please enter a valid name";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }

        if (!form.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isFormValid =
        form.name.trim() !== "" &&
        form.email.trim() !== "" &&
        form.password !== "" &&
        form.confirmPassword !== "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setSubmittedData({
            name: form.name.trim(),
            email: form.email.trim(),
        });
        setErrors({});
    };

    return (
        <div style={{ margin: "20px auto", maxWidth: "320px", border: "1px solid #ccc", padding: "15px", borderRadius: "5px" }}>

            <h2>Formulario de registro controlado</h2>
            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}
            >
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={form.name} onChange={handleChange} />
                {errors.name && <p style={{ color: "red", margin: 0 }}>{errors.name}</p>}

                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
                {errors.email && <p style={{ color: "red", margin: 0 }}>{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" value={form.password} onChange={handleChange} />
                {errors.password && <p style={{ color: "red", margin: 0 }}>{errors.password}</p>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p style={{ color: "red", margin: 0 }}>{errors.confirmPassword}</p>}

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={isFormValid ? "active-btn" : "disabled-btn"}
                >
                    Show Data
                </button>
            </form>

            {submittedData && (
                <div style={{ marginTop: "20px" }}>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                </div>
            )}
        </div>
    );
}

