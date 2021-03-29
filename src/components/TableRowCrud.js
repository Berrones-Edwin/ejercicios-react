import React from "react";

export default function TableRowCrud({ el, setDataToEdit, deleteData }) {
    let { id, name, constellation } = el;
    // console.log(props)
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
}
