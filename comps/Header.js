import { useState, useRef, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.header}>
      <img className={styles.img1} src="/logo.svg" alt="logo" />
      <ul className={styles.ul}>
        <li className={styles.li}>Features</li>
        <li className={styles.li}>Pricing</li>
        <li className={styles.li}>Resources</li>
        <li className={styles.li}>Login</li>
        <li className={styles.li}>Sign up</li>
      </ul>
      <Dropdown show={show} />
      <img
        className={styles.img2}
        src="/icon-menu.svg"
        onClick={() => setShow(!show)}
        alt="menu"
      />
    </div>
  );
};

const Dropdown = (props) => {
  const drop = useRef();

  useEffect(() => {
    props.show
      ? drop.current.classList.remove(styles.hide)
      : drop.current.classList.add(styles.hide);
  }, [props.show]);

  return (
    <div ref={drop} className={`${styles.dropdown} ${styles.hide}`}>
      <p className={styles.item}>Features</p>
      <p className={styles.item}>Pricing</p>
      <p className={styles.item}>Resources</p>
      <hr className={styles.hr} />
      <p className={styles.item}>Login</p>
      <p className={`${styles.item} ${styles.last}`}>Sign Up</p>
    </div>
  );
};

export default Header;
