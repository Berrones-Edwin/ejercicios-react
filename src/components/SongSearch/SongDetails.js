import React from "react";
import Message from "../Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyrics, bio }) => {
    if (!lyrics || !bio) return null;

    const { artist, song } = search;
    return (
        <>
            {bio.artists ? (
                <SongArtist />
            ) : (
                <Message
                    msg={`Error: The artist ${artist} does not exist`}
                    bgColor="#dc4535"
                />
            )}

            {lyrics.error || lyrics.err || lyrics.name === "AbortController" ? (
                <Message
                    msg={`Error: The song ${song} does not exist`}
                    bgColor="#dc4535"
                />
            ) : (
                <SongLyrics />
            )}
        </>
    );
};

export default SongDetails;
