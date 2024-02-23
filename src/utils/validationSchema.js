import * as Yup from "yup";

const SignInValidationSchema = Yup.object({
  username: Yup.string().min(3).max(50).required("Username is required"),
  // password: Yup.string()
  //   .required("Password is required")
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //   ),
});

// const PasswordSchema = () => (
//   <div>
//     <strong>Must Contain:</strong>
//     <p>- 8 Characters</p>
//     <p>- One Uppercase</p>
//     <p>- One Lowercase</p>
//     <p>- One Number</p>
//     <p>- One Special Case Character</p>
//   </div>
// );
const SignUpValidationSchema = Yup.object({
  username: Yup.string().min(3).max(50).required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .min(10)
    .max(50)
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  rePassword: Yup.string().oneOf([Yup.ref("password")]),
  phone: Yup.string()
    .matches(/(\+2)?0(10|11|12|15)[0-9]{8}/, "Only Egyptian Number")
    .required("Phone number is required"),
  // Add other validation rules for additional form fields
});

export { SignInValidationSchema, SignUpValidationSchema };
