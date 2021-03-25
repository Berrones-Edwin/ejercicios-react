import React from "react";
import TableRowCrud from "./TableRowCrud";

export default function TableCrud({ data }) {
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
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="3">Not data</td>
                        </tr>
                    ) : (
                        data.map((el) => (
                            <TableRowCrud
                                key={el.id}
                                name={el.name}
                                constellation={el.constellation}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
