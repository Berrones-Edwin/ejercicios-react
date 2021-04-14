import React, { useEffect, useState } from "react";
import { HelperHTTP } from "../helpers/HelperHTTP";
import FormCrud from "./FormCrud";
import Loader from "./Loader";
import Message from "./Message";
import TableCrud from "./TableCrud";

export default function CrudAPI() {
    const [DB, setDB] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let url = "http://localhost:5000/data";
    let api = HelperHTTP();

    useEffect(() => {
        setLoading(true);
        HelperHTTP()
            .get(url)
            .then((data) => {
                if (!data.err) {
                    setDB(data);
                    setError(null);
                } else {
                    setDB(null);
                    setError(data);
                }

                setLoading(false);
            });
    }, [url]);

    const addData = (data) => {
        setLoading(true);
        data.id = Date.now();
        const options = {
            body: {
                ...data,
            },
            headers: {
                "content-type": "application/json",
            },
        };

        api.post(url, options).then((data) => {
            if (!data.err) {
                setDB([...DB, data]);
                setError(null);
            } else {
                setDB(null);
                setError(data);
            }

            setLoading(false);
        });
    };
    const editData = (data) => {
        setLoading(true);
        const options = {
            body: {
                ...data,
            },
            headers: {
                "content-type": "application/json",
            },
        };

        api.put(`${url}/${data.id}`, options).then((data) => {
            if (!data.err) {
                let updatedDate = DB.map((el) =>
                    el.id === data.id ? data : el
                );
                setDB(updatedDate);
                setError(null);
            } else {
                setDB(null);
                setError(data);
            }

            setLoading(false);
        });
    };
    const deleteData = (id) => {
        setLoading(true);
        const options = {
            headers: {
                "content-type": "application/json",
            },
        };

        api.del(`${url}/${id}`, options).then((data) => {
            if (!data.err) {
                let deleteData = DB.filter((el) => el.id !== id);
                setDB(deleteData);
                setError(null);
            } else {
                setDB(null);
                setError(data);
            }

            setLoading(false);
        });
    };
    return (
        <>
            <FormCrud
                addData={addData}
                editData={editData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />

            {loading && <Loader />}
            {error && (
                <Message
                    msg={`Error: ${error.status}, ${error.statusText} `}
                    bgColor="#dc3545"
                />
            )}

            {DB && (
                <TableCrud
                    data={DB}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            )}
        </>
    );
}
