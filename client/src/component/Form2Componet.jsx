import React, { useState } from 'react';

const Form2Componet = ({ fields, onSubmit, submitLabel }) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: fieldValue,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check that all required fields have been filled out
        const requiredFields = fields.filter((field) => field.required);
        const missingFields = requiredFields.filter(
            (field) => !formData[field.name]
        );
        console.log(missingFields);
        if (missingFields.length > 0) {
            console.log('i am mising')
            const newErrors = {};
            missingFields.forEach((field) => {
                newErrors[field.name] = `${field.label} is required`;
            });
            setErrors(newErrors);
            return;
        }

        // Check that all fields are valid
        const newErrors = {};
        fields.forEach((field) => {
            const value = formData[field.name];
            if (field.validate && !field.validate(value)) {
                newErrors[field.name] = field.error || 'Invalid field';
            }
        });
        console.log(newErrors)
        setErrors(newErrors);

        // Submit the form if there are no errors
        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => {
                const { type, name, label, options } = field;
                let fieldComponent = null;

                switch (type) {
                    case 'text':
                    case 'email':
                    case 'password':
                    case 'number':
                    case 'tel':
                    case 'url':
                        fieldComponent = (
                            <div key={name}>
                                <label htmlFor={name}>{label}</label>
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name] || ''}
                                    onChange={handleChange}
                                />
                                {errors[name] && <div className="error">{errors[name]}</div>}
                            </div>
                        );
                        break;
                    case 'checkbox':
                        fieldComponent = (
                            <div key={name}>
                                <label htmlFor={name}>{label}</label>
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name] || false}
                                    onChange={handleChange}
                                />
                                {errors[name] && <div className="error">{errors[name]}</div>}
                            </div>
                        );
                        break;
                    case 'radio':
                        fieldComponent = (
                            <div key={name}>
                                <div>
                                    <input type={type} id="male" name={name} value={'male'} checked={formData[name] === 'male'} onChange={handleChange} />
                                    <label htmlFor={name}>male</label>
                                </div>
                                <div>
                                    <input type={type} id="women" name={name} value={'women'} checked={formData[name] === 'women'} onChange={handleChange} />
                                    <label htmlFor={name}>women</label>
                                </div>
                                <div>
                                    <input type={type} id="other" name={name} value={'other'} checked={formData[name] === 'other'} onChange={handleChange} />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        );
                        break;

                    case 'textarea':
                        fieldComponent = (
                            <div key={name}>
                                <label htmlFor={name}>{label}</label>
                                <textarea
                                    name={name}
                                    value={formData[name] || ''}
                                    onChange={handleChange}
                                ></textarea>
                                {errors[name] && <div className="error">{errors[name]}</div>}
                            </div>
                        );
                        break;
                    case 'select':
                        fieldComponent = (
                            <div key={name}>
                                <label htmlFor={name}>{label}</label>
                                <select
                                    name={name}
                                    value={formData[name] || ''}
                                    onChange={handleChange}
                                >
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {errors[name] && <div className="error">{errors[name]}</div>}
                            </div>
                        );
                        break;
                    default:
                        break;
                }

                return fieldComponent;
            })}

            <button type="submit">{submitLabel || 'Submit'}</button>
        </form>
    );
};

export default Form2Componet;
