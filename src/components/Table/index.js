import React from 'react';

const Head = ({ keys, head }) => {
    const tableHead = head || {};
    return (
        <thead>
            <tr>
                { 
                    keys.map(key => <th key={key}>{tableHead[key] || key}</th>) 
                }
            </tr>
        </thead>
    )
}

const Row = ({ record }) => {
    const keys = Object.keys(record);
    return (
        <tr key={record._id} className={record._id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
        </tr>
    )
}

const Table = ({ data, head }) => {
    const keys = data[0] ? Object.keys(data[0]) : null;

    return (
        <>
            {
                data.length > 0 ? (
                    <table border="1">
                        <Head keys={keys} head={head} />
                        <tbody>
                            { data.map((record, index) => <Row record={record} key={index} />) }
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