import { useEffect, useRef } from "react";
import styles from "../styles/Link.module.css";

const Link = (props) => {
  const container = useRef(null);
  const button = useRef(null);

  const copy = () => {
    navigator.clipboard.writeText(props.shortLink);
    button.current.textContent = "Copied!";
  };

  useEffect(() => {
    button.current.textContent = "Copy";
  }, [props.shortLink]);

  useEffect(() => {
    props.show
      ? (container.current.style.display = "flex")
      : (container.current.style.display = "none");
  }, [props.show]);

  return (
    <div ref={container} className={styles.wrapper}>
      <p className={styles.up}>{props.longLink}</p>
      <hr className={styles.hr} />
      <p className={styles.down}>{props.shortLink}</p>
      <button onClick={copy} ref={button} className={styles.button}>
        Copy
      </button>
    </div>
  );
};

export default Link;
