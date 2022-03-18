import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navcont}>
      <nav
        style={{ backgroundColor: "#5142D4" }}
        className="navbar navbar-dark navbar-expand-sm fixed-top"
      >
        <div className="container">
          <span style={{cursor:"pointer"}}  className="navbar-brand">
          <Link href="/home"><Image width={130} height={32} src="/logo.webp" className={styles.img} /></Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link href="/services/">
                  <a className="nav-link active">Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link active">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link active">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs/">
                  <a className={`nav-link active`}>Blogs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
