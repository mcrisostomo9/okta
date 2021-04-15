import React, { useState } from "react";
import { Input } from "../components/Contact";

const ContactPage = () => {
  const [values, setValues] = useState({
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstNameValidation = validateName({
      name: "First Name",
      field: "firstName",
      value: values.firstName,
    });
    const lastNameValidation = validateName({
      name: "Last Name",
      field: "lastName",
      value: values.lastName,
    });
    const emailValidation = validateEmail(values.email);
    const phoneValidation = validatePhone(values.phone);

    if (
      firstNameValidation &&
      lastNameValidation &&
      emailValidation &&
      phoneValidation
    ) {
      setSuccess(true);
    }
  };

  const validateName = ({ name, field, value }) => {
    // Remove any white space and make sure input value has characters
    if (value.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        [field]: `${name} is required`,
      }));
      return false;
    } else if (value.trim().length < 2) {
      setErrors((prevState) => ({
        ...prevState,
        [field]: `${name} needs to be at least 2 characters`,
      }));
      return false;
    } else {
      setErrors((prevState) => ({ ...prevState, [field]: null }));
      return true;
    }
  };

  const validateEmail = (email) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
    if (isEmailValid) {
      setErrors((prevState) => ({ ...prevState, email: null }));
      return true;
    } else if (email.trim() === "") {
      setErrors((prevState) => ({ ...prevState, email: "Email is required" }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email",
      }));
      return false;
    }
  };

  const validatePhone = (phone) => {
    // Accepts format xxx-xxx-xxxx, (xxx)-xxx-xxxx, xxxxxxxxxx etc.
    const isPhoneValid = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
      phone
    );

    if (isPhoneValid) {
      setErrors((prevState) => ({ ...prevState, phone: null }));
      return true;
    }

    if (phone.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Phone number is required",
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid phone number",
      }));
      return false;
    }
  };

  return (
    <div className="container p-8 mx-auto flex flex-col">
      <h1 className="text-center text-2xl font-bold text-primary">
        Contact Us
      </h1>
      {isSuccess ? (
        <h2 className="text-xl mt-8 text-center">Thank You</h2>
      ) : (
        <form
          action="#"
          onSubmit={handleSubmit}
          method="POST"
          className="mt-8 max-w-2xl mx-auto w-full"
        >
          <div className="border shadow-sm overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <Input
                  handleChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  label="First Name"
                  type="text"
                  error={errors.firstName}
                />
                <Input
                  handleChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  label="Last Name"
                  type="text"
                  error={errors.lastName}
                />
                <Input
                  handleChange={handleChange}
                  value={values.email}
                  name="email"
                  label="Email"
                  type="email"
                  error={errors.email}
                />
                <Input
                  handleChange={handleChange}
                  value={values.phone}
                  name="phone"
                  label="Phone"
                  type="tel"
                  error={errors.phone}
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 px-4 py-5">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
