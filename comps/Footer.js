import styles from "../styles/Footer.module.css";

const Footer = () => {
  const goTo = (lk) => {
    window.open(lk, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <img src="/logo-2.svg" alt="" />
      <div className={styles.features}>
        <p className={styles.header}>Features</p>
        <p className={styles.items}>Link Shortening</p>
        <p className={styles.items}>Branded Links</p>
        <p className={styles.items}>Analytics</p>
      </div>
      <div className={styles.resources}>
        <p className={styles.header}>Resources</p>
        <p className={styles.items}>Blog</p>
        <p className={styles.items}>Developers</p>
        <p className={styles.items}>Support</p>
      </div>
      <div className={styles.company}>
        <p className={styles.header}>Company</p>
        <p className={styles.items}>About</p>
        <p className={styles.items}>Our Team</p>
        <p className={styles.items}>Careers</p>
        <p className={styles.items}>Contact</p>
      </div>
      <div className={styles.socials}>
        <img
          src="/icon-facebook.svg"
          onClick={() => goTo("https://www.facebook.com/victor.ibironke.963/")}
          alt="facebook"
        />
        <img
          src="/icon-twitter.svg"
          onClick={() => goTo("https://www.twitter.com/victoribironke_")}
          alt="twitter"
        />
        <img
          src="/favicon.png"
          onClick={() => goTo("https://www.frontendmentor.io/profile/vdiqbd")}
          alt="frontendmentor"
        />
        <img
          src="/icon-instagram.svg"
          onClick={() => goTo("https://www.instagram.com/victor.ibironke_/")}
          alt="instagram"
        />
      </div>
    </div>
  );
};

export default Footer;
