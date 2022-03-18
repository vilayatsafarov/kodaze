import React from "react";
import Link from "next/link";
import styles from "../styles/Breadcrumb.module.css";


const Breadcrumbs = (props) => {
  return (
    <div className={styles.div}>
      <nav className="bread">
        {props.name} The App
      </nav>
    </div>
  );
};

export default Breadcrumbs;
