import styles from "../styles/Shortener.module.css";
import Link from "../comps/Link";
import { useRef, useState } from "react";

const Shortener = () => {
  const inputValue = useRef(null);
  const error = useRef(null);
  const [errorText, setErrorText] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const getShortLink = (link) => {
    let result = [];
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((res) => res.json())
      .then((data) => {
        result.push(data.result.full_short_link);
        result.push(data.result.original_link);
        setData(result);
        setShow(true);
      })
      .catch((err) => console.error(err));
  };

  const shorten = () => {
    const value = inputValue.current.value;
    if (value == "") {
      inputValue.current.classList.add(styles.red);
      error.current.style.display = "block";
      setErrorText("Please add a link.");
    } else if (!value.includes(".")) {
      inputValue.current.classList.add(styles.red);
      error.current.style.display = "block";
      setErrorText("Please add a valid link.");
    } else {
      getShortLink(value);
    }
  };

  const remove = () => {
    inputValue.current.classList.remove(styles.red);
    error.current.style.display = "none";
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper} id="shorten">
        <input
          type="text"
          ref={inputValue}
          onClick={remove}
          name="linkInput"
          className={styles.link}
          placeholder="Shorten a link here..."
          id="link"
        />
        <p ref={error} className={styles.error}>
          {errorText}
        </p>
        <button onClick={shorten} className={styles.button}>
          Shorten it!
        </button>
      </div>
      <Link show={show} longLink={data[1]} shortLink={data[0]} />
    </div>
  );
};

export default Shortener;
