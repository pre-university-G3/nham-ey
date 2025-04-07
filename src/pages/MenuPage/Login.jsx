"use client"

import { useFormik } from "formik"
import * as Yup from "yup"

export default function Login() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    rememberMe: Yup.boolean(),
  })

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values)
    },
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Form Section - Made slightly wider */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-2xl mb-2 text-gray-800">Welcome back!</h1>
              <p className="text-sm text-gray-600 mb-6">Login to access your account.</p>
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

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-green-500"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:underline font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-green-600 hover:bg-green-700 text-base font-medium rounded-lg py-3 px-4 transition duration-200"
            >
              Login
            </button>

            <p className="text-sm text-gray-700 text-center mt-6">
              Don't have an account?{" "}
              <a href="#" className="text-green-600 hover:underline font-medium">
                Register
              </a>
            </p>
          </form>
        </div>

        {/* Image Section - Expanded to take more space */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-green-50 to-green-100 items-center justify-center p-8">
          <img 
            src="/Assets/Mobile login-bro (1).png" 
            alt="login" 
            className="object-contain h-full max-h-[32rem]" 
          />
        </div>
      </div>
    </div>
  )
}