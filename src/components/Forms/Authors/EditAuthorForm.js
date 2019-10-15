import React, { useState, useEffect } from 'react';

export default function EditAuthorForm(props) {
    const [author, setAuthor] = useState(props.currentAuthor);

    useEffect(() => {
        setAuthor(props.currentAuthor);
    }, [props]);

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