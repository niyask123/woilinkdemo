import * as yup from "yup";
export const signupnSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address") // If field is empty
    .matches(
      /^[a-zA-Z0-9@._-]*$/,
      "Only letters, numbers, '@', '.', '_', and '-' are allowed."
    ) // If user enters invalid characters
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Let's double-check your email address."
    ) // If email format is incorrect
});

export const passwordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .matches(/^[a-zA-Z0-9@._-]*$/, "Only letters, numbers, '@', '.', '_', and '-' are allowed.")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Let's double-check your email address."),
  password: yup
    .string()
    .required("Please enter a password")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character (@, $, !, %, *, ?, &)"),
});

export const usernameSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(/^[a-zA-Z0-9._-]+$/, "Only letters, numbers, '.', '_', and '-' are allowed"),
});

export const emailVerificationSchema = yup.object().shape({
  email_verification_code: yup.string()
    .required('Code is required')
    .matches(/^\d{6}$/, 'Code must be exactly 6 digits'),
});


export const loginSchema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .required('Username or Email is required')
    .test('is-email-or-username', 'Enter a valid email or username', (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) || value.length > 2;
    }),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});