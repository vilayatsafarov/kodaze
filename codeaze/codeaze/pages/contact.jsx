import React, { Component } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import Fotter from "../components/Fotter";

export class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      subject: "",
      number: "",
    };
  }
  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state.name);
  };
  handlesubmit = (e) => {
    e.preventDefault();
    const blog = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      subject: this.state.subject,
      number: this.state.number,
    };
    if (
      blog.name &&
      blog.subject &&
      blog.surname &&
      blog.email
    ) {
      confirm(" We will contact with you soon. Are you sure ?.");
      fetch("https://api.kodaze.com/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: blog,
        }),
      });
      this.setState({
        name: "",
        surname: "",
        email: "",
        subject: ""
      });
    } else {
      alert("Please fill in all the blanks..");
    }
  };
  render() {
    const div = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div>
        <Head>
          <title>KodAze | Contact</title>
          <link rel="stylesheet" href="build/css/intlTelInput.css"></link>

          <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta
            name="description"
            content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support."
          />
        </Head>
        <img id="contact" className={styles.img} src="/cover.webp" alt="" />
        <div>
          <Breadcrumbs name={"Contact"} />
        </div>
        <h1 className={styles.h1}>
          Don’t hesitate to send us a Message.
          <br />
          We happy to assist you!
        </h1>
        <form>
          <div className="container mb-5">
            <div className="row mt-5">
              <div style={div} className="col-12 w-50">
                <input
                  onChange={this.handlechange}
                  className={styles.input}
                  type="text"
                  placeholder="Enter name.."
                  required
                  value={this.state.name}
                  id="name"
                />
              </div>
              <div style={div} className="col-12 w-50">
                <input
                  onChange={this.handlechange}
                  className={styles.input}
                  type="text"
                  placeholder="Enter surname.."
                  required
                  value={this.state.surname}
                  id="surname"
                />
              </div>
              <div style={div} className="col-12 w-50">
                <input
                  onChange={this.handlechange}
                  className={styles.input}
                  type="email"
                  placeholder="Enter email.."
                  required
                  value={this.state.email}
                  id="email"
                />
              </div>
              <div style={div} className="col-12 w-50">
                <textarea
                  className={styles.textarea}
                  cols="45"
                  placeholder="Enter message.."
                  rows="6"
                  required
                  value={this.state.subject}
                  id="subject"
                  onChange={this.handlechange}
                ></textarea>
              </div>

              <div style={div} className="col-12 w-50">
                <button onClick={this.handlesubmit} className={styles.btn}>
                  Send message
                </button>
              </div>
            </div>
          </div>
        </form>
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
                    src="icon4.webp"
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
                    Adress
                  </h3>
                  <hr />
                  <p
                    style={{ textAlign: "center", color: "#595959" }}
                    className="card-text"
                  >
                    85 Great Portland Street,London,W1W 7LT,United Kingdom
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos-once="false"
              data-aos={"zoom-in"}
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="icon5.webp"
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
                    Phone
                  </h3>
                  <hr />
                  <p
                    style={{ textAlign: "center", color: "#595959" }}
                    className="card-text"
                  >
                    <br />
                    +44 7898478933
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos-once="false"
              data-aos={"fade-left"}
            >
              <div className={`card ${styles.carder}`}>
                <div className={styles.imger}>
                  <img
                    className="card-img-top"
                    src="icon6.webp"
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
                    Email
                  </h3>
                  <hr />
                  <p
                    style={{ textAlign: "center", color: "#595959" }}
                    className="card-text"
                  >
                    <br />
                    contact@kodaze.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fotter url={"contact"} />
      </div>
    );
  }
}

export default contact;
