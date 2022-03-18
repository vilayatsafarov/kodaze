import React, { Component } from "react";
import styles from "../styles/Carousel.module.css";

export class Carousel extends Component {
  render() {
    return (
      <div>
        <img className={styles.wal} src="/wal.webp" alt="walpapper" />
        <img className={styles.wal2} src="/vec.png" alt="walpapper" />
        <div
          id="carouselExampleIndicators"
          className={`carousel slide container-fluid ${styles.parent}`}
          data-ride="carousel"
        >
          <ol className={`carousel-indicators mt-5`}>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner mb-5">
            <div className="carousel-item active">
              <div className={styles.main}>
                <div className={styles.p}>
                  <p className={styles.text}>
                  <p>
                  <h2 className={styles.h2}>Get the Apps & Website</h2>
                    <p className={styles.p2}>
                      If you want to order website, app or in any services, so
                      you can find KodeAze in there , click for learning.
                    </p>
                    <button className={styles.btn}>
                      Learn more
                    </button>
                  </p>
                  </p>
                </div>
                <div>
                  <img src="/app.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={styles.main}>
                <div className={styles.p}>
                <p className={styles.text}>
                    <p><h2 className={styles.h2}>Get the Domain,
                    <br />
                    Cloud Server & Other Services</h2>
                    <p className={styles.p2}>
                      If you want to order website, app or in any services, so
                      you can find KodeAze in there , click for learning.
                    </p>
                    <button className={styles.btn}>
                      Learn more
                    </button></p>
                  </p>
                </div>
                <div className={styles.img}>
                  <img src="/server2.webp" alt="" />
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
