import React from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="parent">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
          <div className="message">
            {isSubmitted && (
              <p className="successMessage">
                Registration completed Successfully
              </p>
            )}
          </div>
          <div className="inputContainer">
            <label htmlFor="firstName" className="label">
              Enter your first name
            </label>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstname", { required: true })}
              className="input"
            />
            {errors.firstname && (
              <p className="error">{errors.firstname.message}</p>
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="lastName" className="label">
              Enter your last name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastname", {
                required: "Please enter your last name",
              })}
              className="input"
            />
            {errors.lastname && (
              <p className="error">{errors.lastname.message}</p>
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="email" className="label">
              Enter your email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^[a-zA-Z0-9_*]+@[a-zA-Z0-9]+\.[A-Za-z]{2,}$/,
                  message: "Missing a character",
                },
              })}
              className="input"
            />
            {errors.email && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="password" className="label">
              Enter Your password
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              {...register("password", {
                required: "Password required",
                pattern: {
                  value: /^[a-zA-Z0-9_*]{5,20}$/,
                  message: "Password length should be between 5 - 20 characters",
                },
              })}
              className="input"
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <input type="submit" value={"Register"} className="submitButton" />
        </form>
      </div>
    </>
  );
};

export default Forms;