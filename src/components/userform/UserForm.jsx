import React from "react";
import { useFormik } from "formik";
import Validation from "../formValidation/Validation";
import "./userform.css";

// initital form data
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const UserForm = () => {
  // formik logics
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Validation,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });
  return (
    <div className="user_form">
      <div className="container">
        <form action="" onSubmit={formik.handleSubmit} className="form_content">
          <h1 className="heading">User Registration</h1>
          <div className="input_fields">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <br />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error_text">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="input_fields">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <br />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error_text">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="input_fields">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <br />
            {formik.touched.email && formik.errors.email ? (
              <div className="error_text">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input_fields">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <br />
            {formik.touched.password && formik.errors.password ? (
              <div className="error_text">{formik.errors.password}</div>
            ) : null}
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
