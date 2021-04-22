import React from "react";
import Message from "../Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyrics, bio }) => {
    if (!lyrics || !bio) return null;

    const { artist, song } = search;
    return (
        <>
            {lyrics.error || lyrics.err || lyrics.name === "AbortController" ? (
                <Message
                    msg={`Error: The song ${song} does not exist`}
                    bgColor="#dc4535"
                />
            ) : (
                <SongLyrics title={song} lyrics={lyrics.lyrics} />
            )}
            {bio.artists ? (
                <SongArtist artist={bio.artists[0]} />
            ) : (
                <Message
                    msg={`Error: The artist ${artist} does not exist`}
                    bgColor="#dc4535"
                />
            )}
        </>
    );
};

export default SongDetails;
