import { useState } from "react";
import classes from "./LoginForm.module.css";
import { ReactComponent as ShowPassword } from "../../assets/icons/showpassword-icon.svg";
import { ReactComponent as HidePassword } from "../../assets/icons/hidepassword-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import ShowsContext from "../../context/shows-context";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [method, setMethod] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const ctx = useContext(ShowsContext);

  console.log(ctx.loading);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (method) singInHander(values);
      else if (!method) signUpHandler(values);
    },
  });

  const signUpHandler = (values: { email: string; password: string }) => {
    ctx.setLoading(true);
    setLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwfw0w9yHwray9mMxLEDGqPEas0ihM3fk",
      {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          //...
        } else {
          res.json().then((data) => {
            //show an error modal
            console.log(data);
            setError(data.error.message);
          });
        }
      })
      .finally(() => {
        formik.setTouched({ email: false, password: false });
        formik.setFieldValue("email", "");
        formik.setFieldValue("password", "");
        setLoading(false);
        setTimeout(() => {
          setError(null);
        }, 2000);
      });
  };

  const singInHander = (values: { email: string; password: string }) => {
    setLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwfw0w9yHwray9mMxLEDGqPEas0ihM3fk",
      {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            history.push("/");
          });
        } else {
          res.json().then((data) => {
            //show an error modal
            console.log(data);
            setError(data.error.message);
          });
        }
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setError(null);
        }, 2000);
      });
  };

  return (
    <div className={classes.container}>
      <form className={classes.loginForm}>
        <div className={classes.textFieldContainer}>
          <input
            className={classes.inputField}
            placeholder="Please enter your username"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={classes.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div
          className={classes.textFieldContainer}
          style={{ position: "relative" }}
        >
          <input
            className={classes.inputField}
            placeholder="Please enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            name="password"
          />
          <div
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className={classes.showHideContainer}
          >
            {showPassword ? <ShowPassword /> : <HidePassword />}
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className={classes.error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className={classes.serverErrorMessage}>
          {error && (
            <span style={{ height: "10px", fontSize: "15px", color: "red" }}>
              {error}
            </span>
          )}
        </div>
        <button
          className={classes.loginButton}
          onClick={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          type="submit"
        >
          {loading ? <LoadingSpinner /> : !method ? "Sign Up" : "Sign In"}
        </button>
        <div
          style={{ cursor: "pointer", textAlign: "center", marginTop: "10px" }}
          onClick={() => {
            setMethod((prev) => !prev);
          }}
        >
          {method && "Create New Account"}
          {!method && "Return to Sign In"}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
