function NewNavbar() {
  return (
    <header className="bg-transparent-50 h-16">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="block text-lime-700" href="#">
          <img
            src="./src/images/Nham-Ey.png"
            alt="nham ey logo"
               className="max-h-[73px] "
          />
        </a>

        <nav aria-label="Global" className="flex-1">
          <ul className="flex justify-center items-center gap-8 text-xl font-semibold">
            <li>
              <a
                className="text-zinc-600 transition hover:text-lime-600"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-zinc-600 transition hover:text-lime-600"
                href="#"
              >
                Food
              </a>
            </li>
            <li>
              <a
                className="text-zinc-600 transition hover:text-lime-600"
                href="#"
              >
                Restaurant
              </a>
            </li>
            <li>
              <a
                className="text-zinc-600 transition hover:text-lime-600"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-lg bg-transparent ring-lime-700 ring-1 px-5 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-lime-600 hover:text-white hover:ring-lime-600"
              href="#"
            >
              Login
            </a>

            <a
              className="hidden rounded-lg bg-lime-700 px-5 py-2.5 text-sm font-medium text-white transition hover:text-white hover:bg-lime-600 sm:block"
              href="#"
            >
              Register
            </a>
          </div>

          <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NewNavbar;
