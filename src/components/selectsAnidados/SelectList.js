import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader";
import Message from "../Message";

const SelectList = ({ title, url, handleChange }) => {
    const { data, error, loading } = useFetch(url);
    let id = `select-${title}`;
    let label = title.charAt(0).toUpperCase() + title.slice(1);
    
    console.count()

    if (!data) return null;
    if (error)
        return (
            <Message
                msg={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
            />
        );
        let options = data.response[title];
    return (
        <>
            <label htmlFor={id}>{label}</label>
            {loading && <Loader />}
            <select name={id} id={id} onChange={handleChange}>
                <option>----</option>
                {data &&
                    options.map((el) => (
                        <option value={el} key={el}>
                            {el}
                        </option>
                    ))}
            </select>
        </>
    );
};

export default SelectList;
