import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Zhao-Ming Zhong
      </Link>
      <ul>
        <li>
          <CustomLink to="/About">About Me</CustomLink>
        </li>
        <li>
          <CustomLink to="/Portfolio">Portfolio</CustomLink>
        </li>
        <li>
          <CustomLink to="/Contact">Contact</CustomLink>
        </li>
        <li>
          <CustomLink to="/Resume">Resume</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
