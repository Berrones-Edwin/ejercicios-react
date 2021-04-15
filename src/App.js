import "./App.css";
import CrudAPI from "./components/CrudAPI";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";

function App() {
    return (
        <>
            <SongSearch />
            <hr />
            <CrudAPI />
            <hr />
            <CrudApp />
        </>
    );
}

export default App;
