import React, { useState } from 'react';

export default function EditAuthorForm(props) {
    console.log(props.currentAuthor);
    const [author, setAuthor] = useState(props.currentAuthor);

    function handleInputChange(e) {
        const {name, value} = e.target;

        setAuthor({...author, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.updateAuthor(author._id, author);
    }

    return (
        <>
            <h2>Edit Author</h2>
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
                <button type="submit">Update</button>
            </form>
        </>
    );
}