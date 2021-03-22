import { useState, useEffect } from "react";
import {urlApi} from "../../App";
import jwt_decode from "jwt-decode";


//Creating a custom hook for form validation

const useFormSignUp = (callback, validateForm) => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    username: "",
    password: "",
    passwordConfirm: ""
  });

  const [errors, setErrors] = useState({});

  //Assign isSubmitteng to false before handleSubmit is processed
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    //Prevent default refresh when submitting a form

    e.preventDefault();

    setErrors(validateForm(values));
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("lastname", values.lastname);
    formData.append("birthdate", values.birthdate);
    formData.append("username", values.username);
    formData.append("password", values.password);  // $request->request->get('password')


    const data = {
      name: values.name,
      lastname: values.lastname
    }

    console.log(formData);
    console.log(values);

    fetch(`${urlApi}/register`, {
      method: "POST",
      cors: "CORS",
      body:values,
    }).then(response =>
      response
        .json()
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log("Erorr: ", error))
    );
  };

  //Check if there are not errors and if not then return isSubmitting
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useFormSignUp;
