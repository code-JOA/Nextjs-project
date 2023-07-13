import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return;
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        fill={true}
        alt=""
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h1 className={styles.imgDesc}>
          Hand Crafting Award Winning Experiences
        </h1>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  </div>;
};

export default About;
