import React from 'react';

export default function EditAuthor({ match }) {
    return (
        <>
            <h2>Edit Author</h2>
            <p>{match.params.id}</p>
        </>
    );
}