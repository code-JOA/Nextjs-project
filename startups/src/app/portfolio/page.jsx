import React from "react";
import styles from "./page.module.css";
import Link from "next/Link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Our Works</h1>;
      <div className={styles.items}>
        <Link href="/portfolio/illustrations">
          <span>illustrations</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
