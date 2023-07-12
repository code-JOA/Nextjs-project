import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>josh.io All Rights Reserved</div>
      <div className={styles.imgContainer}></div>
      <div>
        <Image src="/1.png" fill={true} alt="josh.io" />
      </div>
    </div>
  );
};

export default Footer;
