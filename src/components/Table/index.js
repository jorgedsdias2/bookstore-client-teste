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
                <td>Edit</td>
            </tr>
        </thead>
    )
}

const Row = ({ record, url }) => {
    const keys = Object.keys(record);
    return (
        <tr key={record._id} className={record._id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
            <td><Link to={`${url}/edit/${record._id}`}>Edit Author</Link></td>
        </tr>
    )
}

const Table = ({ data, head, url }) => {
    const keys = data[0] ? Object.keys(data[0]) : null;

    return (
        <>
            {
                data.length > 0 ? (
                    <table border="1">
                        <Head keys={keys} head={head} />
                        <tbody>
                            { data.map((record, index) => <Row record={record} key={index} url={url} />) }
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