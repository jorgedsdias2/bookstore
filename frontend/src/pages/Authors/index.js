import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from '../../components/Table';
import AddAuthorForm from '../../components/Forms/Authors/AddAuthorForm';
import EditAuthorForm from '../../components/Forms/Authors/EditAuthorForm';
import api from '../../services/api';

export default function Authors() {
    const [authors, setAuthors] = useState([]);
    const [currentAuthor, setCurrentAuthor] = useState([]);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        async function loadAuthors() {
            const response = await api.get('/authors', {
                headers: { 'x-access-token' : localStorage.getItem('token') }
            });
    
            setAuthors(response.data.authors);
        }

        loadAuthors();
    }, []);
    
    async function addAuthor(author) {
        await api.post('/author', { name: author.name }, {
            headers: {
                'x-access-token': token
            }
        }).then((response) => {
            setAuthors([...authors, response.data]);
        });
    }
    
    async function deleteAuthor(id) {
        await api.delete(`/author/${id}`, {
            headers: {
                'x-access-token': token
            }
        }).then(() => {
            setAuthors(authors.filter(a => a._id !== id));
        });
    }
    
    async function updateAuthor(id, author) {
        await api.put(`/author/${id}`, { name: author.name }, {
            headers: {
                'x-access-token': token
            }
        }).then(() => {
            setAuthors(authors.map(a => a._id === id ? { ...author } : a));
        });
    }
    
    function editAuthor(author) {
        setCurrentAuthor(author);
    }
    
    return (
        <>
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Listing Authors</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            <Link to="" data-toggle="modal" data-target="#addAuthor">Add Author</Link>
                        </h6>
                    </div>
                    <div className="card-body">
                        <Table
                            data={authors}
                            head={{ _id: '#', name: 'Name' }}
                            editRow={editAuthor}
                            deleteRow={deleteAuthor}
                            editTarget="editAuthor"
                        />
                    </div>
                </div>
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