import { React, useContext } from "react";
import styles from "./darkModeToggle.module.css";

const DarkModeToggle = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
