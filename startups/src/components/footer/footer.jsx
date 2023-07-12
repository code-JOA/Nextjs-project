import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>josh.io All Rights Reserved</div>
      <div className={styles.imgContainer}>
        <Image src="/1.png" width={15} height={15} alt="josh.io" Facebook />
        <Image src="/2.png" width={15} height={15} alt="josh.io" Instagram />
        <Image src="/3.png" width={15} height={15} alt="josh.io" LinkendIn />
        <Image src="/4.png" width={15} height={15} alt="josh.io" etc />
      </div>
    </div>
  );
};

export default Footer;
