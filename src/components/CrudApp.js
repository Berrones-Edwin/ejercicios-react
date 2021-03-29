import React, { useState } from "react";
import FormCrud from "./FormCrud";
import TableCrud from "./TableCrud";

const initailData = [
    {
        id: 1,
        name: "Seiya",
        constellation: "pegasso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "dragon",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "andromeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fenix",
    },
];
export default function CrudApp() {
    const [DB, setDB] = useState(initailData);
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
