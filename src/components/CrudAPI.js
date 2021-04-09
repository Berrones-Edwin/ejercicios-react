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

    let url = "http://localhost:5000/datas";
    // let api = HelperHTTP();

    useEffect(() => {
        setLoading(true);
        HelperHTTP().get(url).then((data) => {
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
        data.id = Date.now();
        setDB([...DB, data]);
    };
    const editData = (data) => {
        let updatedDate = DB.map((el) => (el.id === data.id ? data : el));
        setDB(updatedDate);
    };
    const deleteData = (id) => {
        let deleteData = DB.filter((el) => (el.id !==id));
        setDB(deleteData)
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
