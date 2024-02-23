import { Link, useNavigation } from "react-router-dom";
import Images from "../../assets/Images";
import { Button, FormikInput } from "../../components";
import { UserLogin } from "../../services/apiServers";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { SignInValidationSchema } from "../../utils/validationSchema";

const SignIn = () => {
  const initialValues = {
    username: "mor_2314",
    password: "83r5^_",
  };
  const { state } = useNavigation();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    // Handle form submission logic here
    const { data } = await UserLogin(values);
    // Reset the form to its initial values
    resetForm();
    try {
      localStorage.setItem("token", JSON.stringify(data));
      console.log(data);
      if (data) {
        window.location = "/";
      }
      toast.success("Successfully Logged in");
    } catch (error) {
      toast.error("Failed Logged in", error);
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
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInValidationSchema}
            onSubmit={onSubmit}
          >
            {({ resetForm, values }) => (
              <Form>
                <FormikInput
                  name="username"
                  lable="Username"
                  value={values.username}
                />
                <FormikInput
                  name="password"
                  lable="Password"
                  type="password"
                  value={values.password}
                />
                <Button type="submit" disabled={state === "submitting"}>
                  Sign In
                </Button>
                <Link to="/sign-up" className="text-blue-500">
                  Create new account!
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
