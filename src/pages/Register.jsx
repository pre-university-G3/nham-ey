function Register() {
  return (
    <div className="grid grid-cols-2 h-screen font-kh">
      <form className="w-[440px] h-auto mx-[100px] my-auto">
        <h1 className="font-semibold text-xl mb-5">Register Now!</h1>
        <p className="mb-5 text-sm text-gray-500">
          Let's you all register to your personal account.
        </p>

        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            className="shadow-xs bg-bg-1 border border-hover-primary text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow-xs bg-bg-1 border border-hover-primary text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-none"
            placeholder="johndoe@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-xs bg-bg-1 border border-hover-primary text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-none"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-xs bg-bg-1 border border-hover-primary text-gray-900 text-sm rounded-xl block w-full p-2.5 focus:outline-none"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="Remember me"
              type="checkbox"
              value=""
              className="w-3 h-3 border border-gray-300 bg-gray-50 focus:outline-none"
              required
            />
          </div>
          <label
            htmlFor="Remember me"
            className="ms-2 text-xs font-medium text-gray-900"
          >
            I agree to the{" "}
            <a href="#" className=" text-blue-500">
              term & policy
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-bg-1 bg-hover-primary hover:bg-primary focus:outline-none font-medium rounded-xl text-xl px-[10px] py-[5px] text-center"
        >
          Create Account
        </button>

        <p className="text-sm text-gray-900 font-medium text-center my-5">
          Already have an account?
          <a className="text-primary" href="#">
            Login
          </a>
        </p>
      </form>

      <img
        src="./src/images/register.png"
        alt="login"
        className="w-full h-screen object-cover"
      />
    </div>
  );
}
export default Register;
