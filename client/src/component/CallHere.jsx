import React from 'react';
import Form2Componet from './Form2Componet';

const fields = [
    {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        // required: true,
    },
    {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
    },
    { type: 'textarea', name: 'textarea', label: 'Describeation' },
    { type: 'checkbox', name: 'checkbox', label: 'allow' },
    { type: 'radio', name: 'gender', label: 'Male' },
    {
        type: 'email',
        name: 'email',
        label: 'Email',
    },
    {
        type: 'select',
        name: 'country',
        label: 'Country',
        options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'mx', label: 'Mexico' },
        ],
    },
];

const handleSubmit = (formData) => {
    // console.log(formData);
};

const MyForm = () => {
    return (
        <Form2Componet fields={fields} onSubmit={handleSubmit} submitLabel="Sign Up" />
    );
};

export default MyForm;
