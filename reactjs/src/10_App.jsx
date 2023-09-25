import React from "react";
import { useTable } from "react-table";

const data = [
    {
        id: 1,
        gender: "Male",
        salary: 10000,
    },
    {
        id: 2,
        gender: "Male",
        salary: 20000,
    },
    {
        id: 3,
        gender: "Male",
        salary: 30000,
    },
];

const columns = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Gender",
        accessor: "gender",
    },
    {
        Header: "Salary",
        accessor: "salary",
    },
];

function App() {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div className="container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
