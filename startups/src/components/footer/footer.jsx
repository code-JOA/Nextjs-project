import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>josh.io All Rights Reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="josh.io"
          Facebook
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="josh.io"
          Instagram
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="josh.io"
          LinkendIn
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="josh.io"
          youtube
        />
      </div>
    </div>
  );
};

export default Footer;
