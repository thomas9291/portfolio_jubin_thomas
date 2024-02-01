import React, { useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const toggleHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={isActive ? classes.active : classes.navbar}>
      <ul>
        <li>
          <Link href={"/"} data-text="Home">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/aboutMe"} data-text="About Me">
            About Me
          </Link>
        </li>
        <li>
          <Link href={"/certificats"} data-text="Certificates">
            Certificates
          </Link>
        </li>
        <li>
          <Link href={"/contact"} data-text="Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href={"/projects"} data-text="Projects">
            Projects
          </Link>
        </li>
      </ul>
      <button className={classes.btn} onClick={toggleHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
