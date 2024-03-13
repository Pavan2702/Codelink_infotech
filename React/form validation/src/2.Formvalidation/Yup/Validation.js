import * as Yup from "yup";

const validation = Yup.object({
  firstName: Yup.string()
    .min(2, "Name is too short, minimum 2 characters required")
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
    .required("Please enter first name"),
  lastName: Yup.string()
    .min(2, "Name is too short, minimum 2 characters required")
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed")
    .required("Please enter last name"),
  contactNo: Yup.string()
    .min(10, "Must be 10 digits")
    .max(10, "Must be 10 digits")
    .matches(/^\d+$/, "Contact number must contain only digits")
    .required("Please enter contact number"),
  emailId: Yup.string()
    .email("Invalid email format")
    .required("Please enter email address"),
  gender: Yup.string().required("Select gender"),
  address: Yup.string()
    .min(9, "Please enter minimum 9 characters")
    .required("Fill address"),
  city: Yup.string().required("Select city"),
  docs: Yup.array()
    .min(1, "Select at least one document")
    .required("Select document"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .min(8, "Password must be at least 8 characters long")
    .required("Please enter a valid password"),
  conformPass: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Please enter Conform password"),
});

export default validation;
