"use client"

import { useFormik } from "formik"
import * as Yup from "yup"

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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Form Section - Made more compact */}
        <div className="w-full md:w-1/2 p-6">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="text-center md:text-left">
              <h1 className="font-semibold text-xl mb-1 text-gray-800">Register Now!</h1>
              <p className="text-xs text-gray-500 mb-4">Let's you all register to your personal account.</p>
            </div>

            <div>
              <label htmlFor="username" className="block text-xs font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={`w-full border ${
                  formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-xs rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary`}
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
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full border ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-xs rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary`}
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
              <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full border ${
                  formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-xs rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary`}
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
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`w-full border ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 text-xs rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary`}
                placeholder="Enter your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</div>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                className={`w-3 h-3 border ${
                  formik.touched.agreeToTerms && formik.errors.agreeToTerms ? "border-red-500" : "border-gray-300"
                } rounded focus:ring-primary focus:outline-none`}
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-xs text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  term & policy
                </a>
              </label>
            </div>
            {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
              <div className="text-red-500 text-xs -mt-2">{formik.errors.agreeToTerms}</div>
            )}

            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-primary-dark text-sm font-medium rounded-lg py-2 px-4"
            >
              Create account
            </button>

            <p className="text-xs text-gray-700 text-center">
              Already have account?{" "}
              <a className="text-primary hover:underline" href="#">
                Log in
              </a>
            </p>
          </form>
        </div>

        {/* Image Section - Made proportional to form */}
        <div className="hidden md:flex md:w-1/2 bg-primary-50 items-center justify-center p-4">
          <img 
            src="/Assets/Mobile login-rafiki.png" 
            alt="register" 
            className="object-contain h-full max-h-96" 
          />
        </div>
      </div>
    </div>
  )
}
