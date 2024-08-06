import { Form, Formik } from "formik";
import * as Yup from "yup";
import CodeBlock from "../components/CodeBlock";
import Input from "../components/Input";

interface FormValues {
  name: string;
}

const InputPage: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
  });

  const initialValues: FormValues = {
    name: "",
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: FormValues) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <Input name="name" label="Name" />
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <CodeBlock language="javascript">
          {`import { Field, useField } from "formik";
import React from "react";

function Input({ name = "name", label = "Name", ...props }) {
  const [, meta] = useField(name);

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        placeholder={label}
        className={\`border p-3 rounded  focus:ring-1 focus:outline-none 
        \${meta.touched && meta.error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}\`}
        {...props}
      />
      <div
        className={\`mb-2 transition-all duration-300 ease-in-out \${meta.touched && meta.error ? "opacity-100 h-4 text-red-500" : "opacity-0 h-0"}\`}
      >
        {meta.touched && meta.error ? meta.error : ""}
      </div>
    </div>
  );
}

export default Input;
`}
        </CodeBlock>
      </div>
    </div>
  );
};

export default InputPage;
