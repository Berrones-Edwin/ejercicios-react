import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");
    const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";
    const URLAPI = "https://api-sepomex.hckdrk.mx/query/";
    return (
        <>
            <SelectList
                handleChange={(e) => setState(e.target.value)}
                title="estado"
                url={`${URLAPI}get_estados?token=${TOKEN}`}
            />
            {state && (
                <SelectList
                    handleChange={(e) => setTown(e.target.value)}
                    title="municipios"
                    url={`${URLAPI}get_municipio_por_estado/${state}?token=${TOKEN}`}
                />
            )}
            {town && (
                <SelectList
                    handleChange={(e) => setSuburb(e.target.value)}
                    title="colonia"
                    url={`${URLAPI}get_colonia_por_municipio/${town}?token=${TOKEN}`}
                />
            )}
        </>
    );
};

export default SelectAnidados;
