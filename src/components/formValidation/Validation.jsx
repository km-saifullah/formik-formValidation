import * as Yup from "yup";

// main and password regular expression
const mailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegEx =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

const Validation = () =>
  Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(5, "Must be 5 characters or more")
      .required("Please Enter First Name"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(5, "Must be 5 characters or more")
      .required("Please Enter Last Name"),
    email: Yup.string()
      .email()
      .matches(mailRegEx, "Invalid Email Address")
      .required("Please Enter Your Email"),
    password: Yup.string()
      .min(8, "Must be 8 chracters or higher")
      .max(16, "Must be 16 characters or less")
      .required("Please Enter Your Password")
      .matches(
        passwordRegEx,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number,one special case character and no space"
      ),
  });

export default Validation;
