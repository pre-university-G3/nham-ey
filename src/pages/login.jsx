function Login() {
  return (
    <div class="grid grid-cols-2 h-screen">
      <form class="w-[440px] h-auto mx-auto my-auto">
        <h1 class="font-semibold text-xl mb-5">Welcome back!</h1>
        <p class="mb-5 text-sm text-gray-500">Login to access your account.</p>

        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            class="shadow-xs bg-bg-1 border border-hover-primary text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="shadow-xs bg-bg-1 border border-hover-primary text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="Remember me"
              type="checkbox"
              value=""
              class="w-3 h-3 border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
              required
            />
          </div>
          <span class="flex justify-between w-full">
            <label
              for="Remember me"
              class="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>

            <a class="text-xs text-primary" href="#">
              Forgot Password
            </a>
          </span>
        </div>
        <button
          type="submit"
          class="w-full text-white bg-hover-primary hover:bg-primary focus:outline-none font-medium rounded-xl text-xl px-[10px] py-[5px] text-center dark:bg-hover-primary dark:hover:bg-primary"
        >
          Login
        </button>

        <p class="text-sm text-gray-900 font-medium text-center my-5">
          Don't have an account?{" "}
          <a class="text-primary" href="#">
            Register
          </a>
        </p>
      </form>

      <img
        src="./src/images/login.png"
        alt="login"
        class="w-full h-screen object-cover"
      />
    </div>
  );
}

export default Login;
