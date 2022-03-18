import React from "react";
import Head from "next/head";
import styles from "../styles/404.module.css";
import Breadcrumbs from "../components/Breadcrumbs";
import Fotter from "../components/Fotter";
import Image from 'next/image';

const Notfound = () => {
  return (
    <div id="404">
      <Head>
        <title>404</title>
        <meta name="keywords" content="" />
          <meta name="author" content="KodAze Group, KodAze Team, KodAze Cms" />
          <meta name="description" content="Kodaze is 'all in one solution for grow online. Create your own website, android and IOS app, get a domain name, fast hosting, online marketing and  24/7 support." />
      </Head>
      <img className={styles.img2} src="/cover.webp" alt="" />
      <div>
        <Breadcrumbs name={"404"} />
      </div>
      <div className={styles.divomg}>
      <Image src={'/kh.webp'} width={450} height={450}/>
      </div>
      <p className={styles.p}>Opps! Page Not Found</p>
      <Fotter url={"404"} />
    </div>
  );
};

export default Notfound;
