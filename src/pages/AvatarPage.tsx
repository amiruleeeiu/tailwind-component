import Avatar from "@/components/Avatar";
import FileUpload from "@/components/FileUpload";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
  file1: File | null;
  file2: File | null;
  file3: File | null;
}

const validationSchema = Yup.object({
  file1: Yup.mixed().required("File 1 is required"),
  file2: Yup.mixed().required("File 2 is required"),
  file3: Yup.mixed().required("File 3 is required"),
});

const AvatarPage = () => {
  const handleUpload = (file: File) => {
    console.log("File uploaded:", file);
  };
  const initialValues: FormValues = {
    file1: null,
    file2: null,
    file3: null,
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Form values:", values);
    // Handle form submission, e.g., send to an API
  };

  return (
    <div className="flex items-center gap-3">
      <Avatar
        src="https://images.pexels.com/photos/4048598/pexels-photo-4048598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="John Doe"
        size="xl"
        rounded
      />
      <Avatar
        src="https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5360.jpg?w=1380&t=st=1723114951~exp=1723115551~hmac=ea37f5ffb55620bbeb5cac65b2d4414d06c6d5ac01fc5006a465ded3e90f0538"
        alt="John Doe"
        size="lg"
        rounded
      />
      <Avatar
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1723114237~exp=1723114837~hmac=4bd9386a111e00a1076b3ad8e30e8348ef92cc40a85d617b793e79a634280066"
        alt="John Doe"
        size="md"
      />{" "}
      <Avatar
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1723114237~exp=1723114837~hmac=4bd9386a111e00a1076b3ad8e30e8348ef92cc40a85d617b793e79a634280066"
        alt="John Doe"
        size="sm"
        rounded
      />
      <div className="p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="file1">Upload File 1:</label>
                <FileUpload onUpload={(file) => setFieldValue("file1", file)} />
                <ErrorMessage
                  name="file1"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="file2">Upload File 2:</label>
                <FileUpload onUpload={(file) => setFieldValue("file2", file)} />
                <ErrorMessage
                  name="file2"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label htmlFor="file3">Upload File 3:</label>
                <FileUpload onUpload={(file) => setFieldValue("file3", file)} />
                <ErrorMessage
                  name="file3"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AvatarPage;
