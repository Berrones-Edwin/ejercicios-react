import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleSubmit = (e) => {};
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleBlur = (e) => {
        handleSubmit(e);
        setErrors(validateForm(form));
    };

    return {
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleChange,
        handleBlur,
    };
};
