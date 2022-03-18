import styles from "../styles/Progressbar.module.css";
import React, { useEffect } from "react";
function Progressbar() {
    let progressBarHandler = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    const progressBar = document.getElementById("progresBar");
    progressBar.style.transform = `scale(${scroll},1)`;
    progressBar.style.opacity = `${scroll}`;
  };
  useEffect(() => {
    window.addEventListener("scroll", progressBarHandler);
  });
  return (
    <div className={styles.progressBarContainer}>
      <div id="progresBar" className={styles.progressBar}></div>
    </div>
  );
}
export default Progressbar;