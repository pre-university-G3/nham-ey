import LoginButton from "../components/buttons/LoginButton";
import RegisterButton from "../components/buttons/RegisterButton";

function NewNavbar() {
  return (
    <header className="bg-bg-1 h-[73px]">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="block text-primary" href="#">
          <img
            src="./src/images/Nham-Ey.png"
            alt="nham ey logo"
            className="max-h-[73px] "
          />
        </a>

        <nav aria-label="Global" className="flex-1 ">
          <ul className="flex justify-center items-center gap-8 text-xl font-semibold ">
            <li>
              <a
                className="text-zinc-600 transition hover:text-hover-primary"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-zinc-600 transition hover:text-hover-primary"
                href="#"
              >
                Food
              </a>
            </li>
            <li>
              <a
                className="text-zinc-600 transition hover:text-hover-primary"
                href="#"
              >
                Restaurant
              </a>
            </li>
            <li>
              <a
                className="text-zinc-600 transition hover:text-hover-primary"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 items-center">
            <div className="flex items-center justify-center">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6775 13.43C15.8879 11.7784 16.43 9.73062 16.1954 7.69644C15.9608 5.66226 14.9668 3.79168 13.4122 2.45892C11.8577 1.12615 9.85721 0.429508 7.81107 0.508349C5.76493 0.587191 3.824 1.43571 2.37661 2.88414C0.929213 4.33257 0.0820868 6.2741 0.00470953 8.3203C-0.0726677 10.3665 0.62541 12.3665 1.95928 13.9201C3.29316 15.4737 5.16445 16.4663 7.1988 16.6995C9.23314 16.9326 11.2805 16.3891 12.9313 15.1775H12.93C12.9675 15.2275 13.0075 15.275 13.0525 15.3213L17.865 20.1338C18.0994 20.3683 18.4174 20.5001 18.749 20.5003C19.0805 20.5004 19.3986 20.3688 19.6331 20.1344C19.8677 19.9 19.9995 19.582 19.9997 19.2504C19.9998 18.9189 19.8682 18.6008 19.6338 18.3663L14.8213 13.5538C14.7766 13.5085 14.7285 13.468 14.6775 13.43ZM15 8.625C15 9.52784 14.8222 10.4218 14.4767 11.256C14.1312 12.0901 13.6248 12.848 12.9864 13.4864C12.348 14.1248 11.5901 14.6312 10.756 14.9767C9.92186 15.3222 9.02786 15.5 8.12502 15.5C7.22219 15.5 6.32819 15.3222 5.49407 14.9767C4.65996 14.6312 3.90207 14.1248 3.26366 13.4864C2.62526 12.848 2.11885 12.0901 1.77335 11.256C1.42785 10.4218 1.25002 9.52784 1.25002 8.625C1.25002 6.80164 1.97435 5.05296 3.26366 3.76364C4.55298 2.47433 6.30166 1.75 8.12502 1.75C9.94839 1.75 11.6971 2.47433 12.9864 3.76364C14.2757 5.05296 15 6.80164 15 8.625Z"
                  fill="black"
                />
              </svg>
            </div>

            <LoginButton />

            <RegisterButton />
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
