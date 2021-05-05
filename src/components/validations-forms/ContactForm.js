import React from "react";
import { useForm } from "../../hooks/useForm";
import Loader from "../Loader";
import Message from "../Message";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};
const validationsForms = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "The field Name is required";
    } else if (!regexName.test(form.name.trim())) {
        errors.name = "The field Name only accept letters and spaces ";
    }

    if (!form.email.trim()) {
        errors.email = "The field Email is required";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "The field email not is correct";
    }

    if (!form.subject.trim()) {
        errors.subject = "The field Subject is required";
    }
    if (!form.comments.trim()) {
        errors.comments = "The field Comments is required";
    }else if (!regexComments.test(form.comments.trim())) {
        errors.comments = "The field comments exced the limit of characters";
    }

    return errors;
};
const errorMessage = {
    fontWeight: "bold",
    color: "#F00",
};
const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleChange,
        handleBlur,
    } = useForm(initialForm, validationsForms);
    return (
        <>
            <h3>Form Contact</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.name}
                    required
                />
                {errors.name && <p style={errorMessage}>{errors.name}</p>}
                <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email}
                    required
                />
                {errors.email && <p style={errorMessage}>{errors.email}</p>}
                <input
                    type="text"
                    autoComplete="off"
                    name="subject"
                    placeholder="Enter your subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.subject}
                    required
                />
                {errors.subject && <p style={errorMessage}>{errors.subject}</p>}
                <textarea
                    name="comments"
                    cols="50"
                    rows="10"
                    placeholder="Enter your subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.comments}
                    required
                ></textarea>
                {errors.comments && (
                    <p style={errorMessage}>{errors.comments}</p>
                )}
                <button type="submit">Send data</button>
            </form>
            
            { loading && <Loader /> }
            { response && <Message msg="Data send successfully" bgColor="#198754" /> }
        </>
    );
};

export default ContactForm;
