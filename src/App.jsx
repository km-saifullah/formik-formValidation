import { useFormik } from "formik";
import "./App.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
function App() {
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });

  return (
    <>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <br />
          </div>
          <div>
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <br />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <br />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
