import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>josh.io All Rights Reserved</div>
      <div className={styles.imgContainer}>
        <Image
          src="/1.png"
          fill={true}
          width={15}
          height={15}
          alt="josh.io"
          Facebook
        />
        <Image
          src="/2.png"
          fill={true}
          width={15}
          height={15}
          alt="josh.io"
          Instagram
        />
        <Image src="/3.png" fill={true} width={15} height={15} alt="josh.io" />
        <Image src="/1.png" fill={true} width={15} height={15} alt="josh.io" />
      </div>
    </div>
  );
};

export default Footer;
