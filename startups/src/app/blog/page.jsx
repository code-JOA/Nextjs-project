import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blog = () => {
  // const data = await getData();
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://www.pexels.com/photo/light-city-street-dark-17388908/"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
