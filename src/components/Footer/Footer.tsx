import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Projects</a>
        </nav>

        <aside>
          <p>Copyright © 2024 - All right reserved by pruthvz</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
