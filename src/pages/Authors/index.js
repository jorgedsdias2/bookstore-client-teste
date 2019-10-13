import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import Table from '../../components/Table';
import AddAuthor from './add';
import EditAuthor from './edit';
import api from '../../services/api';

export default function Authors({ match }) {
    const [authors, setAuthors] = useState([]);
    const head = {
        _id: '#',
        name: 'Name'
    };

    useEffect(() => {
        async function loadAuthors() {
            const token = localStorage.getItem('token');
            const response = await api.get('/api/authors', {
                headers: { 'x-access-token' : token }
            });

            setAuthors(response.data.authors);
        }

        loadAuthors();
    }, []);

    return (
        <>
            <h1>Listing Authors</h1>
            <Link to={`${match.url}/add`}>Add Author</Link>
            <Table data={authors} head={head} url={match.url} /><br />
            <Route path={`${match.url}/add`} component={AddAuthor} />
            <Route path={`${match.url}/edit/:id`} component={EditAuthor} />
        </>
    )
}