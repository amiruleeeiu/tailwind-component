import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  useFormikContext,
} from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Input from "./Input";

// Define the type for the form values
interface Address {
  district: string;
  thana: string;
  postCode: string;
  address: string;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  isNrb: string; // 'true' or 'false' as string
  nid: string;
  passportNo: string;
  presentAddress: Address;
  permanentAddress: Address;
}

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(
      /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?[\d\s-]{5,15}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
  isNrb: Yup.boolean().required("Please select an option"),
  presentAddress: Yup.object().shape({
    district: Yup.string().required("District is required"),
    thana: Yup.string().required("Thana is required"),
    postCode: Yup.number().required("PostCode is required"),
    address: Yup.string().required("Address is required"),
  }),
});

const UserForm: React.FC = () => {
  const initialValues: FormValues = {
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
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validate={(values: FormValues) => {
        const errors: Partial<FormValues> = {};
        if (values.isNrb === "true" && !values.passportNo) {
          errors.passportNo = "Passport No is required";
        } else if (values.isNrb === "false" && !values.nid) {
          errors.nid = "NID is required";
        }
        return errors;
      }}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        // Handle form submission
        console.log(values);
        setSubmitting(false);
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

              {values?.isNrb === "true" && (
                <Input name="passportNo" label="Passport No" />
              )}
              {values?.isNrb === "false" && <Input name="nid" label="NID" />}
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

const FormikContextLogger: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<FormValues>();

  useEffect(() => {
    if (values.isNrb === "true") {
      setFieldValue("nid", "");
    } else {
      setFieldValue("passportNo", "");
    }

    // Perform any other logic with values
    console.log("Formik values:", values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.isNrb, setFieldValue]);

  return null;
};

export default UserForm;
