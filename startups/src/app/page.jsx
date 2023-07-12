import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.text}>
      <div className={styles.imgContainer}>
        <h1>Better Design For SAAS products</h1>
        <p>Turning your dreams into reality using NoCode</p>
      </div>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  );
}
