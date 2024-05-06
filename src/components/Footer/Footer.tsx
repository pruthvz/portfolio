import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about " className="link link-hover">
            About
          </Link>
          <Link to="/about" className="link link-hover">
            Contact
          </Link>
          <Link to="/projects" className="link link-hover">
            Projects
          </Link>
        </nav>

        <aside>
          <p>Copyright © 2024 - All right reserved by pruthvz</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
