import CodeBlock from "@/components/CodeBlock";
import React, { ReactElement } from "react";
import Table from "../components/Table";

export interface User {
  id: number;
  name: string | ReactElement;
  age: number | ReactElement;
  email: string | ReactElement;
}

export interface Column {
  Header: string;
  accessor: string;
}

export interface Actions {
  view?: (row: number | string) => void;
  edit?: (row: number | string) => void;
  delete?: (row: number | string) => void;
}

const TablePage: React.FC = () => {
  const columns: Column[] = [
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
    { Header: "Email", accessor: "email" },
  ];

  const data: User[] = [
    {
      id: 1,
      name: "John Doe",
      age: 23,
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 36,
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Sam Green",
      age: 45,
      email: "sam@example.com",
    },
  ];

  const handleView = (row: number | string) => {
    alert(`Viewing: ${JSON.stringify(row)}`);
  };

  const handleEdit = (row: number | string) => {
    alert(`Editing: ${JSON.stringify(row)}`);
  };

  const handleDelete = (row: number | string) => {
    alert(`Deleting: ${JSON.stringify(row)}`);
  };

  const actions: Actions = {
    view: handleView,
    edit: handleEdit,
    delete: handleDelete,
  };

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Reusable Table Component</h1>
        <Table columns={columns} data={data} actions={actions} />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Code Example</h2>
        <CodeBlock language="javascript">
          {`import CodeBlock from "@/components/CodeBlock";
import React, { ReactElement } from "react";
import Table from "../components/Table";

export interface User {
  id: number | string;
  name: string | ReactElement;
  age: number | ReactElement;
  email: string | ReactElement;
}

export interface Column {
  Header: string;
  accessor: string;
}

export interface Actions {
  view?: (row: number | string) => void;
  edit?: (row: number | string) => void;
  delete?: (row: number | string) => void;
}

const TablePage: React.FC = () => {
  const columns: Column[] = [
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
    { Header: "Email", accessor: "email" },
  ];

  const data: User[] = [
    {
      id: 1,
      name: "John Doe",
      age: (
        <div className="py-1 text-center bg-green-500 text-white rounded-full">
          28
        </div>
      ),
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: (
        <div className="py-1 text-center bg-green-500 text-white rounded-full">
          34
        </div>
      ),
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Sam Green",
      age: (
        <div className="py-1 text-center bg-green-500 text-white rounded-full">
          45
        </div>
      ),
      email: "sam@example.com",
    },
  ];

  const handleView = (row: number | string) => {
    alert(\`Viewing: \${JSON.stringify(row)}\`);
  };

  const handleEdit = (row: number | string) => {
    alert(\`Editing: \${JSON.stringify(row)}\`);
  };

  const handleDelete = (row: number | string) => {
    alert(\`Deleting: \${JSON.stringify(row)}\`);
  };

  const actions: Actions = {
    view: handleView,
    edit: handleEdit,
    delete: handleDelete,
  };

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Reusable Table Component</h1>
        <Table columns={columns} data={data} actions={actions} />
      </div>
    </div>
  );
};

export default TablePage;
`}
        </CodeBlock>
      </div>
    </div>
  );
};

export default TablePage;
