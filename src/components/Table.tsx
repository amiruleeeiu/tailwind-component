import { Actions, Column, User } from "@/pages/TablePage";
import React from "react";
import Button from "./Button";

interface ReusableTableProps {
  columns: Column[];
  data: User[];
  actions?: Actions;
}

const Table: React.FC<ReusableTableProps> = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300"
              >
                {column.Header}
              </th>
            ))}
            {actions && (
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm border-b border-gray-300">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-100 duration-300"
            >
              {columns.map((column) => (
                <td key={column.accessor} className="py-2 px-4 text-sm">
                  {row[column.accessor as keyof User]}
                </td>
              ))}
              {actions && (
                <td className="py-2 px-4 text-sm">
                  {actions.view && (
                    <Button
                      color="primary"
                      onClick={() => actions.view!(row.id)}
                    >
                      View
                    </Button>
                  )}
                  &nbsp;
                  {actions.edit && (
                    <Button
                      color="success"
                      onClick={() => actions.edit!(row.id)}
                    >
                      Edit
                    </Button>
                  )}
                  &nbsp;
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
