import React, { useState } from "react";
import Loader from "../Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h3> Song Searh</h3>

            {loading && <Loader />}

            <SongForm handleSearch={handleSearch} />
            <SongDetails search={search} lyrics={lyrics} bio={bio} />
        </div>
    );
};

export default SongSearch;
