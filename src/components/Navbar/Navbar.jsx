import Link from "next/link";
import React from "react";
import { itemNavbar, barNavbar } from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <menu className={barNavbar}>
        <Link href="/" prefetch={false}>
          <a className={itemNavbar}>Home</a>
        </Link>
        <Link href="/about" prefetch={false}>
          <a className={itemNavbar}>About</a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
