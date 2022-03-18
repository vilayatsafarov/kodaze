import Head from "next/head";
import React, { Component } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "../styles/About.module.css";
import Fotter from "../components/Fotter";
import Link from "next/link";

export class about extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>KodAze | About</title>
          <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta
            name="description"
            content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support."
          />
        </Head>
        <img
          id="about"
          style={{ border: "none", outline: "none" }}
          className={styles.img}
          src="/cover.webp"
          alt="cover"
        />
        <div>
          <Breadcrumbs name={"About"} />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div
              data-aos-once="false"
              data-aos={"fade-right"}
              className="col-lg-6"
            >
              <div className={styles.div}>
                <div>
                  <h1 className={styles.h1}>
                    We are take care of your <br /> next Demand
                  </h1>
                  <p className={styles.p}>
                    Our modern technology may be cheap,
                    <br />
                    but it is incrediblyinvaluable. Increasingly, websites and
                    <br />
                    applications are the main platform for connecting with other
                    people, including paid
                    <br />
                    customers. Among these platforms, KodAze is an online
                    service platform you can trust.
                  </p>
                  <div className={styles.btndiv}>
                    <Link href={"/services/"}>
                      <button className={styles.btn}>Read more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos-once="false"
              data-aos={"fade-left"}
              className="col-lg-6"
            >
              <div className={styles.div2}>
                <img src="about.webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row mt-5">
            <div data-aos-once="false" data-aos={"zoom-in"} className="col-12">
              <h2 className={styles.h2}>The only app you will need</h2>
              <p style={{ textAlign: "center", color: "rgb(71, 69, 69)" }}>
                All what you need is in one Website
              </p>
            </div>
            <div
              data-aos-once="false"
              data-aos={"fade-right"}
              className="col-lg-4"
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="icon1.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2E265D",
                    }}
                    className="card-title"
                  >
                    Web Design
                  </h3>
                  <hr />
                  <p
                    style={{ textAlign: "center", color: "rgb(71, 69, 69)" }}
                    className="card-text"
                  >
                    Over ten years of professional experience have helped us
                    become experts in web design. Experience combined with
                    creativity offers a winning solution and takes businesses to
                    the next level.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-once="false"
              data-aos={"zoom-in"}
              className="col-lg-4"
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="icon2.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2E265D",
                    }}
                    className="card-title"
                  >
                    Customisable
                  </h3>
                  <hr />
                  <p
                    style={{ textAlign: "center", color: "rgb(71, 69, 69)" }}
                    className="card-text"
                  >
                    Bubble offers total design freedom without any knowledge of
                    HTML or CSS. Create mobile-friendly layouts and dynamic
                    content for a polished product that you will be proud to show
                    off to your prospects, customers.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-once="false"
              className="col-lg-4"
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="icon3.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#2E265D",
                    }}
                    className="card-title"
                  >
                    Web Development
                  </h3>
                  <hr />
                  <p
                    style={{ textAlign: "center", color: "rgb(71, 69, 69)" }}
                    className="card-text"
                  >
                    We know how special and unique your brand is, so we always
                    strive to make sure it gets noticed. Therefore, we develop
                    efficient web applications by using the latest technology
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fotter url={"about"} />
      </div>
    );
  }
}

export default about;
