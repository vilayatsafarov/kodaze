import Head from "next/head";
import React, { Component } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "../../styles/Services.module.css";
import Fotter from "../../components/Fotter";

export class Services extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>KodAze | Services</title>
          <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta name="description" content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support." />
        </Head>
        <img
          id="services"
          style={{ border: "none", outline: "none", marginBottom: "50px" }}
          className={styles.img}
          src="/cover.webp"
          alt=""
        />
        <div>
          <Breadcrumbs name={"Services"} />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div
              data-aos={"fade-right"}
              className={`col-lg-6 mb-4 ${styles.h2}`}
            >
              KodAze is a full service digital agency based in London, United
              Kingdom
              <br />
              <hr style={{ border: "1px solid #2E265D" }} />
            </div>
            <div data-aos={"fade-left"} className={`col-lg-6 ${styles.p}`}>
              We build professional, Clean websites that are planned and
              designed with your project’s objectives in mind. Our web design
              experts does everything in-house and our team of experts is armed
              with the skills to needed provide services throughout any stage of
              a web development project. We offer our web design services as a
              complete package.
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row mt-5">
            <div
              data-aos-once="false"
              data-aos={"fade-right"}
              className="col-lg-4"
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="img1.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "rgb(40, 40, 69)",
                    }}
                    className="card-title"
                  >
                    Web Design
                  </h3>
                  <hr />
                  <p style={{ textAlign: "center" }} className="card-text">
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
                    src="img2.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "rgb(40, 40, 69",
                    }}
                    className="card-title"
                  >
                    Customisable
                  </h3>
                  <hr />
                  <p style={{ textAlign: "center" }} className="card-text">
                    Bubble offers total design freedom without any knowledge of
                    HTML or CSS. Create mobile-friendly layouts and dynamic
                    content for a polished product that you will be proud to show
                    off to your prospects, customers.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-once="false"
              data-aos={"fade-left"}
              className="col-lg-4"
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="img3.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "rgb(40, 40, 69",
                    }}
                    className="card-title"
                  >
                    Web Development
                  </h3>
                  <hr />
                  <p style={{ textAlign: "center" }} className="card-text">
                    We know how special and unique your brand is, so we always
                    strive to make sure it gets noticed. Therefore, we develop
                    efficient web applications by using the latest technology
                    innovation.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-once="false"
              data-aos={"fade-right"}
              className="col-lg-4"
            >
              <div className={`card ${styles.carder} `}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="img4.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "rgb(40, 40, 69",
                    }}
                    className="card-title"
                  >
                    Web Server Services
                  </h3>
                  <hr />
                  <p style={{ textAlign: "center" }} className="card-text">
                    IT server management services encompass everything you need
                    to manage your server and make sure it is up and running
                    correctly for the maximum amount of time.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos-once="false" data-aos={"zoomIn"} className="col-lg-4">
              <div className={`card ${styles.carder} `}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="img5.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "rgb(40, 40, 69",
                    }}
                    className="card-title"
                  >
                    Graphic Design
                  </h3>
                  <hr />
                  <p style={{ textAlign: "center" }} className="card-text">
                    Graphic design is a craft where professionals create visual
                    content to communicate messages. By applying visual
                    hierarchy and page layout techniques. designs
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos-once="false"
              data-aos={"fade-left"}
              className="col-lg-4"
            >
              <div className={`card ${styles.carder} `}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="img6.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "rgb(40, 40, 69",
                    }}
                    className="card-title"
                  >
                    Mobile App
                  </h3>
                  <hr />
                  <p style={{ textAlign: "center" }} className="card-text">
                    Flutter transforms the app development process. Build, test,
                    and deploy beautiful mobile, web, desktop, and embedded apps
                    from a single codebase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fotter url={"services"} />
      </div>
    );
  }
}

export default Services;
