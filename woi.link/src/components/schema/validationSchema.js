import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Let's double-check your email address.") // Message when email is invalid
    .required("Please enter an email address"), // Message when email is empty
});
