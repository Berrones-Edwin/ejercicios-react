import React from "react";
import TableRowCrud from "./TableRowCrud";

export default function TableCrud({ data, setDataToEdit, deleteData }) {
    return (
        <div>
            <h3>Table</h3>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Constellation</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((el) => (
                            <TableRowCrud
                                key={el.id}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Not data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
