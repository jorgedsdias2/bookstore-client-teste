import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Head = ({ keys, head }) => {
    const tableHead = head || {};
    return (
        <>
            <thead>
                <tr>
                    { 
                        keys.map(key => <th key={key}>{tableHead[key] || key}</th>) 
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    { 
                        keys.map(key => <th key={key}>{tableHead[key] || key}</th>) 
                    }
                    <th>Actions</th>
                </tr>
            </tfoot>
        </>
    )
}

const Row = ({ keys, record, editRow, deleteRow }) => {
    return (
        <tr key={record._id} className={record._id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
            <td>
                <button className="btn btn-primary" onClick={() => editRow(record)}  data-toggle="modal" data-target="#editAuthor">
                    <i className="fas fa-edit"></i>
                </button>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteRow(record._id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    )
}

const Table = ({ data, head, editRow, deleteRow }) => {
    const keys = data[0] ? Object.keys(data[0]).filter((value) => { return value !== "_id" && value !== "__v" }) : null;

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        <Link data-toggle="modal" data-target="#addAuthor">Add Author</Link>
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive"></div>
                        {
                            data.length > 0 ? (
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <Head keys={keys} head={head} />
                                    <tbody>
                                        { 
                                            data.map((record, index) =>
                                                <Row
                                                    keys={keys}
                                                    record={record} 
                                                    key={index}
                                                    editRow={editRow}
                                                    deleteRow={deleteRow}
                                                />
                                            )
                                        }
                                    </tbody>
                                </table>
                            ) : (
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr><th>Records</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>No records found</td></tr>
                                    </tbody>
                                </table>
                            )
                        }
                </div>
            </div>
        </>
    )
}

export default Table;