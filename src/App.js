import React from "react";
import "./App.css";
import CrudAPI from "./components/CrudAPI";
import CrudApp from "./components/CrudApp";
import SelectAnidados from "./components/selectsAnidados/SelectAnidados";
import SongSearch from "./components/SongSearch/SongSearch";
import ContactForm from "./components/validations-forms/ContactForm";
// import SongSearch from "./components/SongSearch";

function App() {
    return (
        <>
            <ContactForm />
            <hr /> 
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
