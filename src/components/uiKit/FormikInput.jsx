import { ErrorMessage, Field } from "formik";

function FormikInput({ lable, name, type = "text", value, accept }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-600 mb-2">
        {lable}
      </label>
      <Field
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        type={type}
        id={name}
        name={name}
        value={value}
        accept={accept}
      />
      <ErrorMessage name={name} component="span" className="text-red-500" />
    </div>
  );
}

export default FormikInput;
