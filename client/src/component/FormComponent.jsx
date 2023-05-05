import React, { useState } from "react";

// const fields = [
//     {
//         name: "name",
//         label: "Name",
//         required: true,
//     },
//     {
//         name: "email",
//         label: "Email",
//         required: true,
//         pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     },
//     {
//         name: "password",
//         label: "Password",
//         type: "password",
//         required: true,
//     },
// ];

function FormComponent(props) {
    const { fields, onSubmit } = props;
    const [formData, setFormData] = useState(
        Object.fromEntries(fields.map((field) => [field.name, ""]))
    );
    // error
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            onSubmit(formData);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        fields.forEach((field) => {
            if (field.required && !formData[field.name]) {
                errors[field.name] = `${field.label} is required`;
            } else if (field.pattern && !field.pattern.test(formData[field.name])) {
                errors[field.name] = `${field.label} is invalid`;
            }
        });
        return errors;
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                    />
                    {formErrors[field.name] && (
                        <div className="error">{formErrors[field.name]}</div>
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;

