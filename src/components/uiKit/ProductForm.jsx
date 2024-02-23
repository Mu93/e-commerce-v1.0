import { useState } from "react";
import Modal from "react-modal";
import { Button, FormikInput } from "../../components";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const validationSchema = Yup.object({
  title: Yup.string().min(3).max(50).required("Title is required"),
  price: Yup.string().min(3).max(50).required("Price is required"),
  category: Yup.string().min(3).max(50).required("Category is required"),
  image: Yup.mixed()
    .required("Image is required")
//     .test("fileSize", "File size is too large", (value) => {
//       return value && value.size <= 1024000; // 1MB
//     })
//     .test("fileType", "Unsupported file type", (value) => {
//       return value && ["image/jpeg", "image/png"].includes(value.type);
//     }),
});

// Add this style to make the modal appear above other elements
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    zIndex: 1001,
    width: "30rem", // Set the desired width
    height: "35rem", // Set the desired height
    margin: "auto", // Center the modal
    padding: "0", // Center the modal
  },
};
const ProductForm = ({ isOpen, onRequestClose, addProduct, id }) => {
  const initialValues = {
    title: "",
    price: "",
    category: "",
    image: "",
  };
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission logic here
    console.log("Form data submitted:", values);
    // Reset the form to its initial values

    addProduct({ id, ...values });
    setSubmitting(false);
    // Reset form after submission
    resetForm();
    // Close the modal
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Product"
      style={modalStyle} // Apply the custom styles
    >
      <div className="bg-gray-800 p-3 flex items-center ">
        <h2 className="font-bold  text-white">Add New Product</h2>
      </div>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {console.log(values)}
              <FormikInput
                name="title"
                lable="Product Title:"
                value={values.title}
              />
              <FormikInput
                name="price"
                lable="Product Price:"
                value={values.price}
              />
              <FormikInput
                name="category"
                lable="Product Category:"
                value={values.category}
              />

              <FormikInput
                name="image"
                type="file"
                accept="image/jpeg, image/png"
                lable="Product Image:"
                value={values.image}
              />
              <Button type="submit">Add Product</Button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default ProductForm;
