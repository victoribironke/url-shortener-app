import Link from "next/link";
import styles from "../styles/Boost.module.css";

const Boost = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.one}>Boost your links today</p>
      <Link className={styles.link} href="#shorten">
        Get Started
      </Link>
    </div>
  );
};

export default Boost;
