import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>josh.io All Rights Reserved</div>
      <div className={styles.}>

      </div>
      <div>
        <Image src="/1.png" width={15} height={15} alt="josh.io" />
      </div>
    </div>
  );
};

export default Footer;
