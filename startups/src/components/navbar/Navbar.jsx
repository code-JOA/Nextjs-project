"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },

  {
    id: 4,
    title: "About",
    url: "/about",
  },

  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        josh.io
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.links}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged Out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
