import React from "react";

export default function TableRowCrud({ name, constellation }) {

    // console.log(props)
    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    );
}
