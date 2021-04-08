import React, { useState } from "react";
import FormCrud from "./FormCrud";
import TableCrud from "./TableCrud";

// const initailData = [
// ];
export default function CrudAPI() {
    const [DB, setDB] = useState({});
    const [dataToEdit, setDataToEdit] = useState(null);
    const addData = (data) => {
        data.id = Date.now();
        setDB([...DB, data]);
    };
    const editData = (data) => {
        let updatedDate = DB.map((el) => (el.id === data.id ? data : el));
        setDB(updatedDate)
    };
    const deleteData = (id) => {};
    return (
        <>
            <FormCrud
                addData={addData}
                editData={editData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <TableCrud
                data={DB}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </>
    );
}
