import React, { useState, useEffect } from "react";

const initialForm = {
    name: "",
    constellation: "",
    id: null,
};
export default function FormCrud({
    addData,
    editData,
    dataToEdit,
    setDataToEdit,
}) {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) setForm(dataToEdit);
        else setForm(initialForm);
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.constellation) {
            alert("datos incompletos");
            return;
        }

        if (form.id === null) addData(form);
        else editData(form);

        handleReset();
    };

    return (
        <>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
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
        </>
    );
}
