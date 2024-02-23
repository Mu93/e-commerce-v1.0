import { Link, useNavigation } from "react-router-dom";
import Images from "../../assets/Images";
import { Button, FormikInput } from "../../components";
import { AddNewUser } from "../../services/apiServers";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { SignUpValidationSchema } from "../../utils/validationSchema";

const SignUp = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    phone: "",
  };
  const { state } = useNavigation();
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Handle form submission logic here
      const { data } = await AddNewUser(values);
      console.log(data);
      // Reset the form to its initial values
      resetForm();
      toast.success("Successfully Registered");
    } catch (error) {
      toast.error("Failed Registered", error);
    }
    setSubmitting(false);
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className=" flex items-center justify-center h-[650px] ">
        <div className="w-[25vw] h-[100%] relative">
          <div className=" absolute top-[50%] left-[50%] mt-[-50px] ml-[-50px]  text-white">
            <h1 className="font-bold text-3xl">Welcome</h1>
          </div>
          <img
            src={Images.registerBG}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white p-8 rounded shadow-md w-[25vw] h-[100%]">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={SignUpValidationSchema}
            onSubmit={onSubmit}
          >
            {({ resetForm, values }) => (
              <Form>
                {console.log()}
                <FormikInput
                  name="username"
                  lable="Username"
                  value={values.username}
                />
                <FormikInput
                  name="phone"
                  lable="Phone"
                  type="phone"
                  value={values.phone}
                />
                <FormikInput
                  name="email"
                  lable="Email"
                  type="email"
                  value={values.email}
                />
                <FormikInput
                  name="password"
                  lable="Password"
                  type="password"
                  value={values.password}
                />
                <Button type="submit" disabled={state === "submitting"}>
                  Sign Up
                </Button>
                <Link to="/sign-in" className="text-blue-500">
                  Already have account?
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
