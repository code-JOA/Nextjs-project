import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For SAAS products</h1>
        <p className={styles.desc}>
          Turning your dreams into reality using NoCode
        </p>
      </div>
      <button>Our Works</button>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
