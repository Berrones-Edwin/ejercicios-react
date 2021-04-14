import "./App.css";
import CrudAPI from "./components/CrudAPI";
import CrudApp from "./components/CrudApp";

function App() {
    return (
        <>
            <h3>CRUD</h3>
            <CrudAPI />
            <hr />
            <CrudApp />
        </>
    );
}

export default App;
