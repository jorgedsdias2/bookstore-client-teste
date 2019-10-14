import React, { useState } from 'react';

export default function AddAuthorForm(props) {
    const initialFormState = { name: '' };
    const [author, setAuthor] = useState(initialFormState);

    function handleInputChange(e) {
        const {name, value} = e.target;

        setAuthor({...author, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addAuthor(author);
        setAuthor(initialFormState);
    }

    return (
        <>
            <h2>Add Author</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name *</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={author.name}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
}