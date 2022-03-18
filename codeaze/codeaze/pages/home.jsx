import Head from "next/head";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import Fotter from "../components/Fotter";
import Link from "next/link";
import Carousel from "../components/Carousel";

export class Home extends Component {
  render() {
    const container = {
      position: "absolute",
      top: "300px",
      height: "auto",
    };
    const div = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const div2 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      top: "100px",
      marginTop: "50px",
    };
    return (
      <div id="home">
        <Head>
          <title>KodAze | Home</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=no"
          />
          <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta
            name="description"
            content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support."
          />
        </Head>
        <Carousel /> 
        <div className="container mt-5">
          <div className="row mt-5">
            <div
              style={{ textAlign: "center" }}
              data-aos-once="false"
              data-aos={"zoom-in"}
              className="col-lg-12 mt-5"
            >
              <h2 className={styles.h2}>We offer All kind service features</h2>
              <span className={styles.span}>Lorem, ipsum Lorem..</span>
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
                  <h3 className={`card-title ${styles.h3}`}>Avesome Design</h3>
                  <hr />
                  <p className={`card-text ${styles.p3}`}>
                    Wherever you are on your graphic design voyage, you’ll need
                    guidance from time to time as you navigate the murky waters
                    of creativity. What better place to look than the quotes of
                    famous designers? After all, these men and women didn’t
                    become icons of their or .
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
                  <h3 className={`card-title ${styles.h3}`}>Customisable</h3>
                  <hr />
                  <p className={`card-text ${styles.p3}`}>
                    Customized service is any service that’s tailored to the
                    needs of individual customers. The math is simple – if the
                    service better fits their needs, you’ll be more successful
                    in service, sales and retention. The phrase “customized
                    service” is used in two ways.
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
                    src="icon3.webp"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <h3 className={`card-title ${styles.h3}`}>Web Development</h3>
                  <hr />
                  <p className={`card-text ${styles.p3}`}>
                    Web development services are used to design, build, support,
                    and evolve all types of web-based software. With 22 years in
                    web development, ScienceSoft delivers intuitive and fast
                    websites, web portals, and other web solutions that bring
                    about digital transformation
                  </p>
                </div>
              </div>
            </div>
            <div style={div2} className="col-lg-12 mt-5">
              <div style={div}>
                <Link href={"/about"}>
                  <button className={styles.btn}>
                    <Link href={"/about"}>
                      <a>See more</a>
                    </Link>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fotter url={"home"} />
      </div>
    );
  }
}

export default Home;
