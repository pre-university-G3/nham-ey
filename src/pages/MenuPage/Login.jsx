"use client"


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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="text-center md:text-left">
              <h1 className="font-semibold text-xl mb-1 text-gray-800">Welcome back!</h1>
              <p className="text-xs text-gray-500 mb-4">Login to access your account.</p>
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
                } text-gray-900 text-xs rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
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
              <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full border ${
                  formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
                } text-gray-900 text-xs rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-green-500`}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
              )}
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-green-500"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
                <label htmlFor="rememberMe" className="ml-2 text-xs text-gray-900">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-xs text-green-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-primary-dark text-sm font-medium rounded-lg py-2 px-4"
            >
              Login
            </button>

            <p className="text-xs text-gray-700 text-center mt-5">
              Don't have an account?{" "}
              <a href="#" className="text-green-500 hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-green-50 items-center justify-center p-4">
          <img 
            src="/Assets/Mobile login-bro (1).png" 
            alt="login" 
            className="object-contain h-full max-h-96" 
          />
        </div>
      </div>
    </div>
  )
}