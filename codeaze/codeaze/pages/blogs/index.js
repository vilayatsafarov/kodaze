import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import Fotter from "../../components/Fotter";
import styles from "../../styles/Data.module.css";

export const getStaticProps = async () => {
  const url = "https://api.kodaze.com/api/blogs?populate=*";
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      blogs: data,
    },
  };
  
};

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: this.props.blogs,
    };
  }
  handelChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  render() {
    const filterdata = this.state.data.data.filter((item) => {
      return (
        item.attributes.title
          .toLocaleLowerCase()
          .indexOf(this.state.query.toLocaleLowerCase()) !== -1
      );
    });
    return (
      <div>
        <Head>
          <title>KodAze | Blogs</title>
          <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta
            name="description"
            content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support."
          />
        </Head>
        <img
          id="blogs"
          style={{ border: "none", outline: "none", marginBottom: "50px" }}
          className={styles.img}
          src="/cover.webp"
          alt=""
        />
        <div>
          <Breadcrumbs name={"Blogs"} />
        </div>
        <div className={`container ${styles.form}`}>
          <form className="row">
            <div className="input-group">
              <input
                type="text"
                className={` form-control col-lg-12 ${styles.input}`}
                onChange={this.handelChange}
                value={this.state.query}
                placeholder="Enter query.."
              />
              <div style={{ zIndex: "1" }} className="input-group-append">
                <button
                  className={`btn btn-primary ${styles.btn}`}
                  type="button"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={`container  ${styles.card}`}>
          <div className="row">
            {filterdata.map((item) => {
              return (
                <Link key={item.id}  href={`/blogs/${item.id}`}>
                  <div
                    data-aos-once="false"
                    data-aos={item.attributes.aos}
                    key={item.id}
                    className={`col-lg-4 ${styles.col} mt-4`}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={`card ${styles.div}`}>
                      <img
                        style={{ borderRadius: "15px 15px 0px 0px " }}
                        className="card-img-top"
                        src={
                          `https://api.kodaze.com` +
                          item.attributes.url.data.attributes.formats.small.url
                        }
                        alt="Card image cap"
                        height={216}
                      />
                      <div className="card-body">
                        <h5 className={`card-title ${styles.title}`}>
                          <span className={styles.span1}>
                            {item.attributes.title}
                          </span>
                          <span className={styles.span2}>
                            {item.attributes.createdAt.slice(0, 10)}
                          </span>
                        </h5>
                        <p className="card-text">
                          {item.attributes.description.slice(0, 105)}...
                        </p>
                        <Link href={`/blogs/${item.id}`}>
                          <a className="btn btn-primary">Learn more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Fotter url={"blogs"} />
      </div>
    );
  }
}
export default Home;

