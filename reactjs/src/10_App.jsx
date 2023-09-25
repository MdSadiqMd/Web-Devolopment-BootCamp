import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";

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
    useSortBy,
    usePagination
  );

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span>&darr;</span>
                      ) : (
                        <span>&uarr;</span>
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
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
