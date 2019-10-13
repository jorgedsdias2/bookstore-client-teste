import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from '../../components/Table';
import api from '../../services/api';

export default function Authors() {
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
            Listing Authors<br />
            <Table data={authors} head={head} /><br />
            Add Author<br />
            <ul>
                <li><Link to="#">Adicionar Author</Link></li>
            </ul>
        </>
    )
}