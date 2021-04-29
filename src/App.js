import { useState } from "react";
import "./App.css";
import CrudAPI from "./components/CrudAPI";
import CrudApp from "./components/CrudApp";
import SelectAnidados from "./components/selectsAnidados/SelectAnidados";
import SongSearch from "./components/SongSearch/SongSearch";
// import SongSearch from "./components/SongSearch";

function App() {
    
    return (
        <>
            <SelectAnidados />
            <hr />
            <SongSearch />
            <hr />
            <CrudAPI />
            <hr />
            <CrudApp />
        </>
    );
}

export default App;
