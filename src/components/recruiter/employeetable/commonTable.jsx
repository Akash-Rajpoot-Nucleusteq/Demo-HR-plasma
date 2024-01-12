import React from 'react'

export default function commonTable({ data, columns }) {
    return (
        <div className="card ctm-border-radius shadow-sm">
            <div className="card-header">
                <h4 className="card-title mb-0">Common Table</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>S. N.</th>
                                {columns.map((column) => (
                                    <th key={column.key}>{column.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id} >
                                    <td>{index + 1}</td>
                                    {columns.map((column) => (
                                        <td key={column.key}>{item[column.dataIndex]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
