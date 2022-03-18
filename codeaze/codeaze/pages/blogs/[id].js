import Head from "next/head";
import React, { Component } from "react";
import styles from "../../styles/Data.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import style from "../../styles/Single.module.css";
import Fotter from "../../components/Fotter";
export const getStaticPaths = async () => {
  const url = "https://api.kodaze.com/api/blogs?populate=*";
  const res = await fetch(url);
  const data = await res.json();
  const hrefs = data.data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths: hrefs,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://api.kodaze.com/api/blogs/${id}?populate=*`);
  const data = await res.json();
  return {
    props: { blog: data },
  };
};
export class Blog extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>KodAze | Blog</title>
          <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta
            name="description"
            content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support."
          />
        </Head>
        <img
          id="blog"
          style={{ border: "none", outline: "none", marginBottom: "50px" }}
          className={styles.img}
          src="/cover.webp"
          alt=""
        />
        <div style={{ marginBottom: "60px" }}>
          <Breadcrumbs name={"Single blog"} />
        </div>
  <div className="container">
    <div className="row">
    <div className="col-lg-6">
          <div className={style.div}>
            <img
              className={`card-img-top ${styles.Img}`}
              src={
                `https://api.kodaze.com` +
                this.props.blog.data.attributes.url.data.attributes.formats
                  .small.url
              }
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-lg-6" style={{ textAlign: "left" }}>
          <h5 className={`card-title ${styles.h}`}>
            {this.props.blog.data.attributes.title}
          </h5>
          <p className={`card-text ${styles.p}`}>
            {this.props.blog.data.attributes.body}
          </p>
          <div className={styles.btnDiv}>
            <Link href={`/blogs/`}>
              <button className="btn btn-primary">Go back</button>
            </Link>
          </div>
        </div>
    </div>
  </div>
        <Fotter url="blog" />
      </div>
    );
  }
}

export default Blog;
