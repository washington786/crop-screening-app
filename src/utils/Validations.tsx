import * as yup from "yup";

export const login_valSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const resetPassword_valSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is required")
    .email("Invalid email address"),
});

export const confirmPasswords_valSchema = yup.object().shape({
  password: yup.string().required("password is required"),
  confirmPassword: yup.string().required("password is required"),
});

export const register_valSchema = yup.object().shape({
  firstName: yup.string().required("Enter your first name"),
  lastName: yup.string().required("Enter your last name"),
  email: yup
    .string()
    .required("email is required")
    .email("Invalid email address"),
  city: yup.string().required("City is required"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords mismatch!"),
});

export const update_valSchema = yup.object().shape({
  firstName: yup.string().required("Enter your first name"),
  lastName: yup.string().required("Enter your last name"),
  email: yup
    .string()
    .required("email is required")
    .email("Invalid email address"),
  city: yup.string().required("City is required")
});
