"use client"

import { useFormik } from "formik"
import * as Yup from "yup"
import { NavLink } from "react-router-dom"

export default function Register() {
  // Define validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    agreeToTerms: Yup.boolean()
      .required("You must accept the terms and policy")
      .oneOf([true], "You must accept the terms and policy"),
  })

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values)
      // Add your registration logic here
    },
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Form Section - Expanded */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-2xl mb-2 text-gray-800">Register Now!</h1>
              <p className="text-sm text-gray-600 mb-6">Create your personal account to get started.</p>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={`w-full border ${
                  formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.username}</div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full border ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full border ${
                  formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`w-full border ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</div>
              )}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  className={`w-4 h-4 border ${
                    formik.touched.agreeToTerms && formik.errors.agreeToTerms ? "border-red-500" : "border-gray-300"
                  } rounded focus:ring-green-500 focus:outline-none`}
                  checked={formik.values.agreeToTerms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <NavLink to="/terms" className="text-primary hover:underline font-medium">
                  terms & policy
                </NavLink>
              </label>
            </div>
            {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
              <div className="text-red-500 text-xs -mt-3 ml-6">{formik.errors.agreeToTerms}</div>
            )}

            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-green-700 text-base font-medium rounded-lg py-3 px-4 transition duration-200"
            >
              Create Account
            </button>

            <p className="text-sm text-gray-700 text-center mt-6">
              Already have an account?{" "}
              <NavLink to="/login" className="text-primary hover:underline font-medium">
                Log in
              </NavLink>
            </p>
          </form>
        </div>

        {/* Image Section - Expanded */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-green-50 to-green-100 items-center justify-center p-8">
          <img src="/Assets/Mobile login-rafiki.png" alt="register" className="object-contain h-full max-h-[32rem]" />
        </div>
      </div>
    </div>
  )
}

