import React from 'react';
import './Table.css';

const Table = ({countries}) => {
    return (
        <div className="table">
            {countries.map(({ country, cases}) => (
                <table>
                    <tr>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                    </tr>
                </table>
                
            ))}
        </div>
    )
}

export default Table;