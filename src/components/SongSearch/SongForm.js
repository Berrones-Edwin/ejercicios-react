import React, { useState } from "react";

const initialForm = {
    artist: "",
    song: "",
};

const SongForm = ({ handleSearch }) => {
    const [form, setForm] = useState(initialForm);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.artist || !form.song) {
            alert("Fields empty");
            return;
        }
        handleSearch(form);
        setForm(initialForm);
    };
    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };
    return (
        <div>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Artist
                    <input
                        name="artist"
                        value={form.artist}
                        autoComplete="off"
                        onChange={handleChange}
                        placeholder="Enter artist"
                    />
                </label>
                <label>
                    Song
                    <input
                        name="song"
                        value={form.song}
                        autoComplete="off"
                        onChange={handleChange}
                        placeholder="Enter song"
                    />
                </label>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default SongForm;
