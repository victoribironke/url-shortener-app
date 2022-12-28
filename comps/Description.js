import Link from "next/link";
import styles from "../styles/Description.module.css";

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/illustration-working.svg" alt="" />
      <div className={styles.description}>
        <p className={styles.up}>More than just shorter links</p>
        <p className={styles.down}>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link className={styles.link} href="#shorten">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Description;
