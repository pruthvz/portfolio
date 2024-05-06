import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
            </ul>
          </div>
          <a className="btn text-xl ">pruthvi mohanlal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="p-1">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1">
              <Link to="/projects">Projects</Link>
            </li>
            {/* <li>
              <details>
                <summary>
                  <Link to="projects">Projects</Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li className="p-1">
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://twitter.com/justpruthvi"
            target="_blank"
            className="p-2"
          >
            <i className="fa-brands fa-twitter hidden md:flex"></i>
          </a>
          <a href="https://github.com/pruthvz" target="_blank" className="p-2">
            <i className="fa-brands fa-github hidden md:flex"></i>
          </a>
          <div
            onClick={() => {
              window.location.href = "mailto:pruthvimohanlal10@gmail.com";
            }}
          >
            <div className="btn">Contact me</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
