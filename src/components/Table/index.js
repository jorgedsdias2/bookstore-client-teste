import React from 'react';
import { Link } from 'react-router-dom';

const Head = ({ keys, head }) => {
    const tableHead = head || {};
    return (
        <thead>
            <tr>
                { 
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>) 
                }
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const Row = ({ keys, record, editRow, deleteRow }) => {
    return (
        <tr key={record._id} className={record._id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
            <td>
                <button onClick={() => editRow(record)}>
                    Edit
                </button>

                <button onClick={() => deleteRow(record._id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

const Table = ({ data, head, editRow, deleteRow }) => {
    const keys = data[0] ? Object.keys(data[0]).filter((value) => { return value !== "_id" && value !== "__v" }) : null;

    return (
        <>
            {
                data.length > 0 ? (
                    <table border="1">
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
                    <table border="1">
                        <thead>
                            <tr><th>Records</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>No records found</td></tr>
                        </tbody>
                    </table>
                )
            }
        </>
    )
}

export default Table;