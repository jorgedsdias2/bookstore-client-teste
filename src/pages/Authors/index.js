import React, { useState, useEffect } from 'react';

import Table from '../../components/Table';
import AddAuthorForm from '../../components/Forms/Authors/AddAuthorForm';
import EditAuthorForm from '../../components/Forms/Authors/EditAuthorForm';
import api from '../../services/api';

export default function Authors() {
    const [authors, setAuthors] = useState([]);
    const [currentAuthor, setCurrentAuthor] = useState([]);
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
        /* eslint no-restricted-globals:0 */
        if(confirm('Do you really want to delete this record?')) {
            api.delete(`/api/authors/author/${id}`, {
                headers: {
                    'x-access-token': token
                }
            }).then(() => {
                loadAuthors();
            });
        }
    }
    
    async function updateAuthor(id, author) {
        api.put(`/api/authors/author/${id}`, { name: author.name }, {
            headers: {
                'x-access-token': token
            }
        }).then(() => {
            loadAuthors();
            setCurrentAuthor([]);
        });
    }
    
    function editAuthor(author) {
        setCurrentAuthor(author);
    }
    
    return (
        <>
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Listing Authors</h1>
                <Table
                    data={authors}
                    head={{ _id: '#', name: 'Name' }}
                    editRow={editAuthor}
                    deleteRow={deleteAuthor}
                />
            </div>
            <EditAuthorForm
                currentAuthor={currentAuthor}
                updateAuthor={updateAuthor}
            />
            <AddAuthorForm 
                addAuthor={addAuthor}
            />
        </>
    )
}