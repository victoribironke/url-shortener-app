import styles from "../styles/Statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <p className={styles.top}>Advanced Statistics</p>
        <p className={styles.bottom}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={styles.wrapper2}>
        <Desc
          src="/icon-brand-recognition.svg"
          up="Brand Recognition"
          down="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        />
        <Desc
          src="/icon-detailed-records.svg"
          up="Detailed Records"
          down="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Desc
          src="/icon-fully-customizable.svg"
          up="Fully Customizable"
          down="Improve brand awareness and content discoverabilty through customizable link, supercharging audience engagement."
        />
      </div>
    </div>
  );
};

const Desc = (props) => {
  return (
    <div className={styles.desc}>
      <div className={styles.img}>
        <img src={props.src} alt="" />
      </div>
      <p className={styles.up}>{props.up}</p>
      <p className={styles.down}>{props.down}</p>
    </div>
  );
};

export default Statistics;
