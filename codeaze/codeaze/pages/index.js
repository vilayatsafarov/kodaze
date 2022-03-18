import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Loader.module.css";
import Animate from "../components/Animate";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, []);
  return (
    <div className={styles.main}>
    <Animate/>
    </div>
  );
};

export default Home;
