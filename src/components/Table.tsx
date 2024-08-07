import React from "react";
import Button from "./Button";

interface Column {
  Header: string;
  accessor: string;
}

interface User {
  id: number;
  [key: string]: any;
}

interface Actions {
  view?: (id: number) => void;
  edit?: (id: number) => void;
  delete?: (id: number) => void;
}

interface ReusableTableProps {
  columns: Column[];
  data: User[];
  actions?: Actions;
}

const Table: React.FC<ReusableTableProps> = ({ columns, data, actions }) => {
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                scope="col"
                className="py-3 px-4 bg-gray-200 text-gray-700 font-bold uppercase text-sm border-b border-gray-300 text-left"
              >
                {column.Header}
              </th>
            ))}
            {actions && (
              <th
                scope="col"
                className="py-3 px-4 bg-gray-200 text-gray-700 font-bold uppercase text-sm border-b border-gray-300 text-left"
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 hover:bg-gray-100 duration-300"
            >
              {columns.map((column) => (
                <td key={column.accessor} className="py-2 px-4 text-sm">
                  {row[column.accessor] ?? "—"}
                </td>
              ))}
              {actions && (
                <td className="py-2 px-4 text-sm flex space-x-2">
                  {actions.view && (
                    <Button
                      color="primary"
                      onClick={() => actions.view!(row.id)}
                    >
                      View
                    </Button>
                  )}
                  {actions.edit && (
                    <Button
                      color="success"
                      onClick={() => actions.edit!(row.id)}
                    >
                      Edit
                    </Button>
                  )}
                  {actions.delete && (
                    <Button
                      color="danger"
                      onClick={() => actions.delete!(row.id)}
                    >
                      Delete
                    </Button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
