import React, { useEffect, useState } from "react";
import { HelperHTTP } from "../../helpers/HelperHTTP";
import Loader from "../Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;
        const { artist, song } = search;

        let urlBio = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${encodeURI(
            artist
        )}`;
        let urlSong = `https://api.lyrics.ovh/v1/${encodeURI(
            artist
        )}/${encodeURI(song)}`;

        const fetchData = async () => {
            setLoading(true);

            const [artistRes, songRes] = await Promise.all([
                HelperHTTP().get(urlBio),
                HelperHTTP().get(urlSong),
            ]);

            setBio(artistRes);
            setLyrics(songRes);
            setLoading(false);
        };

        fetchData();
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <div>
            <h3> Song Searh</h3>

            {loading && <Loader />}

            <SongForm handleSearch={handleSearch} />

            {search && !loading && (
                <SongDetails search={search} lyrics={lyrics} bio={bio} />
            )}
        </div>
    );
};

export default SongSearch;
