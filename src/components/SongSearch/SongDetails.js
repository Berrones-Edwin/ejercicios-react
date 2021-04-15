import React from "react";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyrics, bio }) => {
    return (
        <div>
            <h3>Details</h3>
            <SongArtist />
            <SongLyrics />
        </div>
    );
};

export default SongDetails;
