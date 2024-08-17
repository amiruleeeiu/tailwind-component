/* eslint-disable no-unused-vars */

import CodeBlock from "../components/CodeBlock";
import UserForm from "../components/UserForm";

function FormPage() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <UserForm />
      </div>
      <div>
        <CodeBlock language="javascript">
          {`import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import * as Yup from "yup";
import Input from "./Input";

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  isNrb: Yup.boolean().required("Please select an option"),
  presentAddress: Yup.object().shape({
    district: Yup.string().required("District is required"),
    thana: Yup.string().required("Thana is required"),
    postCode: Yup.number().required("PostCode is required"),
    address: Yup.string().required("Address is required"),
  }),
});

const UserForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        isNrb: "false",
        nid: "",
        passportNo: "",
        presentAddress: {
          district: "",
          thana: "",
          postCode: "",
          address: "",
        },
        permanentAddress: {
          district: "",
          thana: "",
          postCode: "",
          address: "",
        },
      }}
      validationSchema={validationSchema}
      validate={(values) => {
        const errors = {};
        if (values.isNrb == "true" && !values.passportNo) {
          errors.passportNo = "Passport No is required";
        } else if (values.isNrb == "false" && !values.nid) {
          errors.nid = "NID is required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="">
            <div className="">
              <h1>Personal Info</h1>
              <Input name="name" label="Name" />
              <Input name="email" label="Email" />
              <Input name="phone" label="Phone" />
              <div className="my-2 flex flex-col">
                <label>Is NRB?</label>
                <div className="flex gap-5">
                  <label className="flex gap-1">
                    <Field type="radio" name="isNrb" value="true" />
                    Yes
                  </label>
                  <label className="flex gap-1">
                    <Field type="radio" name="isNrb" value="false" />
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="isNrb"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {values?.isNrb == "true" && (
                <Input name="passportNo" label="Passport No" />
              )}

              {values?.isNrb == "false" && <Input name="nid" label="NID" />}
            </div>
            <div className="">
              <h1>Present Address</h1>

              <Input name="presentAddress.district" label="District" />
              <Input name="presentAddress.thana" label="Thana" />
              <Input name="presentAddress.postCode" label="PostCode" />
              <Input name="presentAddress.address" label="Address" />
            </div>
          </div>

          <FormikContextLogger />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 text-white flex justify-end"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const FormikContextLogger = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (values.isNrb == "true") {
      setFieldValue("nid", "");
    } else {
      setFieldValue("passportNo", "");
    }

    // Perform any other logic with values
    console.log("Formik values:", values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.isNrb]);

  return null;
};

export default UserForm;
`}
        </CodeBlock>
      </div>
    </div>
  );
}

export default FormPage;
