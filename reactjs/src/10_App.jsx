import React from "react";
import { useTable, useSortBy, usePagination } from "react-table"; // pagination means displaying only a particular amount of rows in a page

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
  {
    id: 4,
    gender: "Male",
    salary: 10000,
  },
  {
    id: 5,
    gender: "Male",
    salary: 20000,
  },
  {
    id: 6,
    gender: "Male",
    salary: 30000,
  },
  {
    id: 7,
    gender: "Male",
    salary: 10000,
  },
  {
    id: 8,
    gender: "Male",
    salary: 20000,
  },
  {
    id: 9,
    gender: "Male",
    salary: 30000,
  },
  {
    id: 10,
    gender: "Male",
    salary: 10000,
  },
  {
    id: 11,
    gender: "Male",
    salary: 20000,
  },
  {
    id: 12,
    gender: "Male",
    salary: 30000,
  },
  {
    id: 13,
    gender: "Male",
    salary: 10000,
  },
  {
    id: 14,
    gender: "Male",
    salary: 20000,
  },
  {
    id: 15,
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
    // Enable sorting for this column by adding the 'accessor' property
    // and 'useSortBy' to the table options
    sortType: "basic", // Specify the sorting type for this column
  },
];

function App() {
  // Add 'useSortBy' and 'usePagination' to the 'useTable' hook options
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of 'rows', use 'page' for paginated data
    prepareRow,
    // Pagination variables
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex }, // Current page index
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy, // import the useMethods() here 
    usePagination
  );

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}> {/*Use the created prop here in the form of method */}
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    // Enable sorting by adding 'getSortByToggleProps'
                    column.getSortByToggleProps()
                  )}
                >
                  {/* Render the column header */}
                  {column.render("Header")}
                  {/* Display sorting indicators */}
                  <span> {/*write the sorting logic in span tag*/}
                  {/*checking if the coloums are sorted or not and sort accordingly*/}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span>&darr;</span> //desending order sorting &darr;
                      ) : (
                        <span>&uarr;</span> //acsending order sorting &uarr;
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* 
           The following code is responsible for rendering the body of the table,
           including the rows and cells.
        */}
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            // Prepare the current row for rendering
            prepareRow(row);
    
            return (
              // Render a table row and apply the row's properties
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    // Render a table cell and apply the cell's properties
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
}

export default App;
