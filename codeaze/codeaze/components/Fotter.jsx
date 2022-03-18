import Link from "next/link";
import React from "react";
import styles from "../styles/Fotter.module.css";
import MailchimpFormContainer from "./MailchimpFormContainer";
import Top from "./Top";
const Fotter = (props) => {
  return (
    <div>
      <div className={styles.img}>
        <div className="container">
          <div className="row">
            <div className={`col-12 ${styles.divcol}`}>
              <MailchimpFormContainer />
            </div>
            <div className={`col-12 ${styles.divimg}`}>
              <Link href={"/"}>
                <img style={{ cursor: "pointer" }} src="/logodark.webp" />
              </Link>
            </div>
            <div
              style={{ textAlign: "center" }}
              className={`col-12 ${styles.divp}`}
            >
              <p style={{ textAlign: "center" }}>
                Get weekly updates about our latest shop and special offers.
              </p>
            </div>
            <div
              style={{ textAlign: "center" }}
              className={`col-12 ${styles.divp2}`}
            >
              <p style={{ textAlign: "center" }}>
                <Link href={"/about"}>About </Link>|{" "}
                <Link href={"/contact"}>Contact</Link> |
                <Link href={"/services/"}> Services</Link> |
                <Link href={"/blogs/"}> Blogs</Link>
              </p>
            </div>
            <div
              style={{ textAlign: "center" }}
              className={`col-12 ${styles.divfoot}`}
            >
              <p style={{ textAlign: "center" }}>
                <span> © 2021 App, powered by Fimaron Limited - </span>
                <Link
                  style={{
                    color: "black",
                    parginLeft: "3px",
                    fontWeight: "bold",
                  }}
                  href={"/home"}
                >
                  <a style={{ fontWeight: "bold",textDecoration:"none" }}>
                    KodAze(v2)
                  </a>
                </Link>
              </p>
              <Top url={props.url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
