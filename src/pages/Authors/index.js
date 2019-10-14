import React, { useState, useEffect } from 'react';

import Table from '../../components/Table';
import AddAuthorForm from '../../components/Forms/Authors/AddAuthorForm';
import EditAuthorForm from '../../components/Forms/Authors/EditAuthorForm';
import api from '../../services/api';

export default function Authors() {
    const [authors, setAuthors] = useState([]);
    const [currentAuthor, setCurrentAuthor] = useState([]);
    const [editing, setEditing] = useState(false);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        loadAuthors();
    }, []);
    
    async function loadAuthors() {
        const response = await api.get('/api/authors', {
            headers: { 'x-access-token' : token }
        });

        setAuthors(response.data.authors);
    }
    
    async function addAuthor(author) {
        await api.post('/api/authors/author', { name: author.name }, {
            headers: {
                'x-access-token': token
            }
        }).then(() => {
            loadAuthors();
        });
    }
    
    async function deleteAuthor(id) {
        api.delete(`/api/authors/author/${id}`, {
            headers: {
                'x-access-token': token
            }
        }).then(() => {
            loadAuthors();
        });
    }
    
    async function updateAuthor(id, author) {
        api.put(`/api/authors/author/${id}`, { name: author.name }, {
            headers: {
                'x-access-token': token
            }
        }).then(() => {
            loadAuthors();
            setCurrentAuthor([]);
            setEditing(false);
        });
    }
    
    function editAuthor(author) {
        setCurrentAuthor({ ...author });
        setEditing(true);
    }
    
    return (
        <>
            <h1>Listing Authors</h1>
            <Table
                data={authors}
                head={{ _id: '#', name: 'Name' }}
                editRow={editAuthor}
                deleteRow={deleteAuthor}
            />
            <br />
            {
                editing ? (
                    <EditAuthorForm
                        currentAuthor={currentAuthor}
                        updateAuthor={updateAuthor}
                    />
                ) : (
                    <AddAuthorForm 
                        addAuthor={addAuthor}
                    />
                )
            }
        </>
    )
}