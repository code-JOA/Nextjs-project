import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.Category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Title</h1>
          <p>Test</p>
        </div>
        <div className={styles.imgContent}></div>
      </div>
    </div>
  );
};

export default Category;
