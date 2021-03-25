import React, { useState } from "react";

const initialForm = {
    name: "",
    constellation: "",
    id: null,
};
export default function FormCrud({
    addData,
    editData,
    dataToEdit,
    setdataToEdit,
}) {
    const [form, setForm] = useState(initialForm);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (dataToEdit === null) addData(form);
        else editData(form);

        handleReset();

    };
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleReset = (e) => {
        setForm(initialForm);
        setdataToEdit(null);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type=" text"
                name="name"
                placeholder="enter the name"
                value={form.name}
                autoComplete="off"
                onChange={handleChange}
            />
            <input
                type=" text"
                name="constellation"
                placeholder="enter the constellation"
                value={form.constellation}
                autoComplete="off"
                onChange={handleChange}
            />
            <input
                type="reset"
                value="reset"
                onClick={handleReset}
                name="BTNreset"
            />
            <input type="submit" value="submit" name="BTNSubmit" />
        </form>
    );
}
