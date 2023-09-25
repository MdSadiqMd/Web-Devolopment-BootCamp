import React from "react";
import ReactDOM from "react-dom";


const data=[
    {
        id:1,
        gender:"Male",
        salary:10000,
    },
    {
        id:2,
        gender:"Male",
        salary:20000,
    },
    {
        id:3,
        gender:"Male",
        salary:30000,
    }
]

const coloumns=[
    { 
        Header:"ID", // Header is which display in UI
        accessor:"id", // Accessor is which we use to manipulate values in UI
    },
    {
        Header:"Gender",
        accessor:"gender",
    },
    {
        Header:"Salary",
        accessor:"salary",
    },
]

function App(){
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=useTable({
        coloumns,
        data,
    });

    return (
        <div className="container">
            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map((hg)=>(
                        <tr {hg.getHeaderProps()}></tr>
                    ))}

                    /*<tr>
                        <th>Id</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>*/
                </thead>
                <tbody>
                    {data.map((i)=>{
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.gender}</td>
                            <td>{i.salary}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default App