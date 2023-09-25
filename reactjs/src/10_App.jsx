import React from "react";

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

function App(){
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
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