import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1 className={styles.item}>Better Design For SAAS products</h1>
        <p>Turning your dreams into reality using NoCode</p>
      </div>
      <button>Our Works</button>
      <div className={styles.imgContainer}></div>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  );
}
